import { STATES } from "../constants";

export default function StatusIndicator({ currentState, message, color }) {
  if (currentState === STATES.UPLOADING || currentState === STATES.PROCESSING) {
    return (
      <div className="bg-slate-700/50 rounded-lg p-4 md:p-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-2 border-emerald-400 border-t-transparent"></div>
          <p className={`text-sm md:text-base font-medium ${color}`}>
            {message}
          </p>
        </div>
        {currentState === STATES.PROCESSING && (
          <p className="text-xs md:text-sm text-slate-400 text-center mt-3">
            Esto puede tardar unos segundos...
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg p-4 md:p-6 ${
        currentState === STATES.READY
          ? "bg-emerald-500/10 border border-emerald-500/20"
          : currentState === STATES.ERROR
          ? "bg-red-500/10 border border-red-500/20"
          : "bg-slate-700/50"
      }`}
    >
      <div className="flex items-center justify-center space-x-2">
        {currentState === STATES.READY && (
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        {currentState === STATES.ERROR && (
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <p className={`text-sm md:text-base font-medium ${color}`}>{message}</p>
      </div>
    </div>
  );
}
