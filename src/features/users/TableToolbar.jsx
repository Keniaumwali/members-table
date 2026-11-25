function TableToolbar({
  searchInput,
  onSearchChange,
  gender,
  onGenderChange,
  pageSize,
  onPageSizeChange,
}) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <label
          htmlFor="member-search"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Search members
        </label>
        <input
          id="member-search"
          type="search"
          value={searchInput}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by name or email..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm"
        />
      </div>

      <div>
        <label
          htmlFor="gender-filter"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Filter by gender
        </label>
        <select
          id="gender-filter"
          value={gender}
          onChange={(event) => onGenderChange(event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm"
        >
          <option value="">All genders</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="page-size"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Members per page
        </label>
        <select
          id="page-size"
          value={pageSize}
          onChange={(event) => onPageSizeChange(Number(event.target.value))}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm"
        >
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
          <option value={50}>50 per page</option>
        </select>
      </div>
    </div>
  )
}

export default TableToolbar
