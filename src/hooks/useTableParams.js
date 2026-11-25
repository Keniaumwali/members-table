import { useCallback, useSyncExternalStore } from 'react'

const DEFAULT_PARAMS = {
  page: 1,
  pageSize: 10,
  sortBy: 'firstName',
  order: 'asc',
  q: '',
  gender: '',
}

const VALID_SORT_FIELDS = [
  'firstName',
  'lastName',
  'email',
  'age',
]

function readParams() {
  const searchParams = new URLSearchParams(window.location.search)

  const page = Number(searchParams.get('page'))
  const pageSize = Number(searchParams.get('pageSize'))
  const sortBy = searchParams.get('sortBy')
  const order = searchParams.get('order')
  const gender = searchParams.get('gender')

  return {
    page: Number.isInteger(page) && page > 0
      ? page
      : DEFAULT_PARAMS.page,

    pageSize: [10, 20, 50].includes(pageSize)
      ? pageSize
      : DEFAULT_PARAMS.pageSize,

    sortBy: VALID_SORT_FIELDS.includes(sortBy)
      ? sortBy
      : DEFAULT_PARAMS.sortBy,

    order: ['asc', 'desc'].includes(order)
      ? order
      : DEFAULT_PARAMS.order,

    q: searchParams.get('q') || '',

    gender: ['female', 'male'].includes(gender)
      ? gender
      : '',
  }
}

function subscribe(callback) {
  window.addEventListener('popstate', callback)

  return () => {
    window.removeEventListener('popstate', callback)
  }
}

function getSnapshot() {
  return window.location.search
}

export function useTableParams() {
  const search = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => '',
  )

  const params = readParams()

  const update = useCallback((changes) => {
    const nextParams = {
      ...readParams(),
      ...changes,
    }

    if (Object.keys(changes).some(key => key !== 'page')) {
      nextParams.page = 1
    }

    const searchParams = new URLSearchParams()

    Object.entries(nextParams).forEach(([key, value]) => {
      if (value !== '' && value !== DEFAULT_PARAMS[key]) {
        searchParams.set(key, value)
      }
    })

    const query = searchParams.toString()
    const newUrl = query
      ? `${window.location.pathname}?${query}`
      : window.location.pathname

    window.history.pushState(null, '', newUrl)

    window.dispatchEvent(new PopStateEvent('popstate'))
  }, [])

  return {
    ...params,
    update,
  }
}
