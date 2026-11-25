import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import { useUsers, userKeys } from './features/users/queries.js'
import { fetchUsers } from './api/users.js'
import { useTableParams } from './hooks/useTableParams.js'
import { useDebounce } from './hooks/useDebounce.js'

import TableToolbar from './features/users/TableToolbar.jsx'
import UsersTable from './features/users/UsersTable.jsx'
import TablePagination from './features/users/TablePagination.jsx'
import EmptyState from './components/EmptyState.jsx'
import ErrorState from './components/ErrorState.jsx'

function App() {
  const queryClient = useQueryClient()

  const {
    page,
    pageSize,
    sortBy,
    order,
    q,
    gender,
    update,
  } = useTableParams()

  const [searchInput, setSearchInput] = useState(q)
  const debouncedSearch = useDebounce(searchInput, 400)

  // Keep the search input synchronized with the URL.
  useEffect(() => {
    setSearchInput(q)
  }, [q])

  // Update the URL and API search after the user stops typing.
  useEffect(() => {
    if (debouncedSearch !== q) {
      update({ q: debouncedSearch })
    }
  }, [debouncedSearch, q, update])

  const params = {
    page,
    pageSize,
    sortBy,
    order,
    q,
    gender,
  }

  const {
    data,
    isPending,
    isFetching,
    isError,
    error,
    refetch,
  } = useUsers(params)

  // Prefetch the next page to make navigation faster.
  useEffect(() => {
    if (!data || page * pageSize >= data.total) return

    const nextParams = {
      ...params,
      page: page + 1,
    }

    queryClient.prefetchQuery({
      queryKey: userKeys.list(nextParams),
      queryFn: () => fetchUsers(nextParams),
    })
  }, [
    data,
    page,
    pageSize,
    sortBy,
    order,
    q,
    gender,
    queryClient,
  ])

  function handleSort(field) {
    update({
      sortBy: field,
      order:
        sortBy === field && order === 'asc'
          ? 'desc'
          : 'asc',
    })
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Kigali Cooperative Directory
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Abanyamuryango
          </h1>

          <p className="mt-2 text-slate-500">
            Manage and explore cooperative members.
          </p>
        </header>

        <section
          aria-label="Cooperative members"
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
        >
          <TableToolbar
            searchInput={searchInput}
            onSearchChange={setSearchInput}
            gender={gender}
            onGenderChange={(value) => update({ gender: value })}
            pageSize={pageSize}
            onPageSizeChange={(value) => update({ pageSize: value })}
          />

          {isPending && (
            <p
              role="status"
              className="py-12 text-center text-slate-500"
            >
              Loading members...
            </p>
          )}

          {isError && (
            <ErrorState
              message={error?.message}
              onRetry={() => refetch()}
            />
          )}

          {data && !isError && (
            <>
              <div className="mb-4 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  <span className="font-semibold text-slate-800">
                    {data.total}
                  </span>{' '}
                  members found
                </p>

                <p role="status" aria-live="polite">
                  {isFetching ? 'Refreshing...' : 'Up to date'}
                </p>
              </div>

              {data.users.length === 0 ? (
                <EmptyState />
              ) : (
                <UsersTable
                  users={data.users}
                  sortBy={sortBy}
                  order={order}
                  onSort={handleSort}
                />
              )}

              <TablePagination
                page={page}
                pageSize={pageSize}
                total={data.total}
                onPageChange={(nextPage) => update({ page: nextPage })}
              />
            </>
          )}
        </section>

        <footer className="mt-6 text-center text-xs text-slate-400">
          Abanyamuryango Cooperative Members Directory
        </footer>

      </div>
    </main>
  )
}

export default App
