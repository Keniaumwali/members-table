function SortableHeader({ field, label, sortBy, order, onSort }) {
  const isActive = sortBy === field

  return (
    <th
      scope="col"
      className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600"
    >
      <button
        type="button"
        onClick={() => onSort(field)}
        aria-label={`Sort by ${label}`}
        aria-sort={
          isActive
            ? order === 'asc'
              ? 'ascending'
              : 'descending'
            : 'none'
        }
        className="inline-flex items-center gap-2 hover:text-blue-600"
      >
        {label}
        <span aria-hidden="true">
          {isActive ? (order === 'asc' ? '↑' : '↓') : '↕'}
        </span>
      </button>
    </th>
  )
}

export default SortableHeader
