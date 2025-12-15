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
      <label className="block mb-3 text-sm font-medium text-slate-300">
        Selecciona tu archivo de texto
      </label>
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 md:p-8 text-center transition-all ${
          currentState === STATES.UPLOADING ||
          currentState === STATES.PROCESSING
            ? "border-blue-400 bg-blue-500/10"
            : selectedFile
            ? "border-emerald-400 bg-emerald-500/10"
            : "border-slate-600 bg-slate-700/50 hover:border-emerald-500/50"
        }`}
      >
        {selectedFile ? (
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-emerald-400"
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
            <div>
              <p className="text-sm md:text-base font-semibold text-emerald-400">
                {selectedFile.name}
              </p>
              <p className="text-xs md:text-sm text-slate-400 mt-1">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
            {currentState === STATES.IDLE && (
              <button
                onClick={handleClick}
                className="text-xs md:text-sm text-emerald-400 hover:text-emerald-300 underline"
              >
                Cambiar archivo
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-slate-400"
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
            <div>
              <p className="text-sm md:text-base text-slate-300 mb-1">
                Arrastra tu archivo aquí o haz clic para seleccionar
              </p>
              <p className="text-xs md:text-sm text-slate-500">
                Solo archivos .txt
              </p>
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
