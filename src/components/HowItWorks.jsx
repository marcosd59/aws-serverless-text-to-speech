export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sube tu archivo",
      description:
        "Selecciona un archivo .txt con el texto que deseas convertir a audio",
      color: "emerald",
    },
    {
      number: 2,
      title: "Procesamiento",
      description:
        "El archivo se sube a S3 y se procesa automáticamente usando AWS Lambda y Polly",
      color: "blue",
    },
    {
      number: 3,
      title: "Conversión",
      description:
        "AWS Polly convierte el texto a voz y genera un archivo MP3 de alta calidad",
      color: "purple",
    },
    {
      number: 4,
      title: "Descarga",
      description:
        "Una vez listo, descarga tu archivo MP3 directamente desde tu navegador",
      color: "emerald",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-8 md:mb-16 px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6 md:mb-8 text-center">
        ¿Cómo funciona?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-slate-800 rounded-lg p-4 md:p-6 text-center"
          >
            <div
              className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold ${
                step.color === "emerald"
                  ? "bg-emerald-500"
                  : step.color === "blue"
                  ? "bg-blue-500"
                  : "bg-purple-500"
              }`}
            >
              {step.number}
            </div>
            <h3
              className={`text-lg md:text-xl font-semibold mb-2 ${
                step.color === "emerald"
                  ? "text-emerald-400"
                  : step.color === "blue"
                  ? "text-blue-400"
                  : "text-purple-400"
              }`}
            >
              {step.title}
            </h3>
            <p className="text-slate-400 text-xs md:text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
