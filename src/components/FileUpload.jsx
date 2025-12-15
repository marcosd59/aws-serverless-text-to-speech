import { STATES } from "../constants";

export default function FileUpload({
  selectedFile,
  currentState,
  onFileChange,
}) {
  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt";
    input.onchange = (e) => onFileChange(e);
    input.click();
  };

  return (
    <div>
      <label className="block mb-3 text-sm md:text-base font-semibold text-slate-300">
        Selecciona tu archivo de texto
      </label>
      <div
        className={`group relative border-2 border-dashed rounded-xl p-6 md:p-8 text-center transition-all duration-300 ${
          currentState === STATES.UPLOADING ||
          currentState === STATES.PROCESSING
            ? "border-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/10"
            : selectedFile
            ? "border-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
            : "border-slate-600 bg-slate-700/50 hover:border-emerald-500/70 hover:bg-emerald-500/5 hover:shadow-lg hover:shadow-emerald-500/5"
        }`}
      >
        {selectedFile ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl opacity-50"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 rounded-full flex items-center justify-center border-2 border-emerald-500/30">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-base md:text-lg font-bold text-emerald-400">
                {selectedFile.name}
              </p>
              <p className="text-xs md:text-sm text-slate-400">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
            {currentState === STATES.IDLE && (
              <button
                onClick={handleClick}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg transition-all duration-200 border border-emerald-500/20 hover:border-emerald-500/40"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                Cambiar archivo
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-600/50 rounded-full flex items-center justify-center border-2 border-slate-500/30 group-hover:border-emerald-500/30 transition-colors">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-emerald-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-base md:text-lg font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
                Arrastra tu archivo aquí o haz clic para seleccionar
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-600/30 rounded-full">
                <svg
                  className="w-4 h-4 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-xs md:text-sm text-slate-400 font-medium">
                  Solo archivos .txt
                </p>
              </div>
            </div>
          </div>
        )}
        <input
          type="file"
          accept=".txt"
          onChange={onFileChange}
          disabled={
            currentState === STATES.UPLOADING ||
            currentState === STATES.PROCESSING
          }
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
