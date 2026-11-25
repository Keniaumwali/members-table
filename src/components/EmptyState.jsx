function EmptyState() {
  return (
    <div className="py-12 text-center">
      <h3 className="text-lg font-semibold text-slate-800">
        No members found
      </h3>
      <p className="mt-2 text-sm text-slate-500">
        Try changing your search or filter criteria.
      </p>
    </div>
  )
}

export default EmptyState
