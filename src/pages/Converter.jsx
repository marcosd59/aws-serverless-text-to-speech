import { STATES } from "../constants";
import FileUpload from "../components/FileUpload";
import StatusIndicator from "../components/StatusIndicator";
import { useTextToSpeech } from "../hooks/useTextToSpeech";

export default function Converter({ onBack }) {
  const {
    selectedFile,
    currentState,
    downloadUrl,
    downloadSuccess,
    handleFileChange,
    handleConvert,
    handleDownload,
    handleReset,
    getStateMessage,
    getStateColor,
  } = useTextToSpeech();

  const handleBack = () => {
    handleReset();
    onBack();
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6">
      <div className="container mx-auto max-w-2xl">
        <button
          onClick={handleBack}
          className="mb-6 text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm md:text-base transition-colors"
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al inicio
        </button>

        <div className="bg-slate-800 rounded-xl shadow-2xl p-6 md:p-8 space-y-6 md:space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-emerald-500/20 rounded-full mb-4">
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
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
              Text to Speech
            </h1>
            <p className="text-slate-400 text-sm md:text-base">
              Convierte tus archivos .txt a audio MP3 de alta calidad
            </p>
          </div>

          <FileUpload
            selectedFile={selectedFile}
            currentState={currentState}
            onFileChange={handleFileChange}
          />

          <StatusIndicator
            currentState={currentState}
            message={getStateMessage()}
            color={getStateColor()}
          />

          {/* Mensaje de descarga exitosa */}
          {downloadSuccess && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 md:p-6">
              <div className="flex items-center justify-center space-x-2">
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
                <p className="text-sm md:text-base font-medium text-emerald-400">
                  ¡Descarga exitosa! El archivo MP3 se ha descargado
                  correctamente.
                </p>
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div className="space-y-3">
            {currentState === STATES.READY ? (
              <>
                <button
                  onClick={handleDownload}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 md:py-4 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Descargar MP3</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 md:py-3 px-4 rounded-lg transition-colors"
                >
                  Convertir otro archivo
                </button>
              </>
            ) : (
              <button
                onClick={handleConvert}
                disabled={
                  !selectedFile ||
                  currentState === STATES.UPLOADING ||
                  currentState === STATES.PROCESSING
                }
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-semibold py-3 md:py-4 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/50 disabled:shadow-none"
              >
                {currentState === STATES.UPLOADING ||
                currentState === STATES.PROCESSING ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Convertir a audio</span>
                  </>
                )}
              </button>
            )}

            {currentState === STATES.ERROR && (
              <button
                onClick={handleReset}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 md:py-3 px-4 rounded-lg transition-colors"
              >
                Intentar de nuevo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
