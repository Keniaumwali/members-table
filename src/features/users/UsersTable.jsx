import SortableHeader from './SortableHeader.jsx'

function UsersTable({ users, sortBy, order, onSort }) {
  const columns = [
    { field: 'firstName', label: 'First name' },
    { field: 'lastName', label: 'Last name' },
    { field: 'email', label: 'Email' },
    { field: 'age', label: 'Age' },
  ]

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full min-w-[650px] text-left text-sm">
        <caption className="sr-only">
          Cooperative members directory
        </caption>

        <thead className="bg-slate-100">
          <tr>
            {columns.map((column) => (
              <SortableHeader
                key={column.field}
                field={column.field}
                label={column.label}
                sortBy={sortBy}
                order={order}
                onSort={onSort}
              />
            ))}

            <th
              scope="col"
              className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600"
            >
              Gender
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {users.map((user) => (
            <tr key={user.id} className="transition-colors hover:bg-slate-50">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-800">
                {user.firstName}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                {user.lastName}
              </td>
              <td className="px-4 py-3 text-slate-600">
                {user.email}
              </td>
              <td className="px-4 py-3 text-slate-700">
                {user.age}
              </td>
              <td className="px-4 py-3 capitalize text-slate-700">
                {user.gender}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
