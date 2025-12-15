export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sube tu archivo",
      description:
        "Selecciona un archivo .txt con el texto que deseas convertir a audio",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-500/20",
      textColor: "text-emerald-400",
    },
    {
      number: 2,
      title: "Procesamiento",
      description:
        "El archivo se sube a S3 y se procesa automáticamente usando AWS Lambda y Polly",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      number: 3,
      title: "Conversión",
      description:
        "AWS Polly convierte el texto a voz y genera un archivo MP3 de alta calidad",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
      textColor: "text-purple-400",
    },
    {
      number: 4,
      title: "Descarga",
      description:
        "Una vez listo, descarga tu archivo MP3 directamente desde tu navegador",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-500/20",
      textColor: "text-emerald-400",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-8 md:mb-16 px-2">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-3">
          ¿Cómo funciona?
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
          Un proceso simple en 4 pasos para convertir tu texto en audio de alta
          calidad
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="group relative bg-slate-800 rounded-xl p-5 md:p-6 text-center border transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor:
                step.color === "emerald"
                  ? "rgba(16, 185, 129, 0.3)"
                  : step.color === "blue"
                  ? "rgba(59, 130, 246, 0.3)"
                  : "rgba(168, 85, 247, 0.3)",
            }}
          >
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                step.color === "emerald"
                  ? "from-emerald-500/10 to-emerald-600/5"
                  : step.color === "blue"
                  ? "from-blue-500/10 to-blue-600/5"
                  : "from-purple-500/10 to-purple-600/5"
              }`}
            ></div>

            <div className="relative z-10">
              {/* Number badge */}
              <div className="relative inline-flex items-center justify-center mb-4">
                <div
                  className={`absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity bg-gradient-to-r ${step.gradient}`}
                ></div>
                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.number}
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-lg md:text-xl font-bold mb-3 ${step.textColor}`}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Connector line (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                <svg
                  className="w-6 h-6 text-emerald-400/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
