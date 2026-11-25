function ErrorState({ message, onRetry }) {
  return (
    <div role="alert" className="py-12 text-center">
      <h3 className="text-lg font-semibold text-red-600">
        Unable to load members
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {message || 'Something went wrong. Please try again.'}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  )
}

export default ErrorState
