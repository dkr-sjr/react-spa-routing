export default function ErrorLayout({ error, onRetry }) {
  return (
    <div className="text-center mt-20 text-xl">
      <h2>
        Failed Load Articles..!
      </h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {`error message :${error.message}`}
      </p>

      <button
        type="button"
        onClick={() => onRetry()}
        className="mt-4 border border-gray-300 rounded-xl px-4 py-2"
      >
        Try Load Again
      </button>
    </div>
  );
}
