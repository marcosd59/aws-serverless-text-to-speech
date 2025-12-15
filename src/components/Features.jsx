export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Rápido y Eficiente",
      description:
        "Procesamiento serverless que escala automáticamente según la demanda",
      color: "emerald",
    },
    {
      icon: "🔒",
      title: "Seguro",
      description: "Tus archivos se procesan de forma segura en la nube de AWS",
      color: "blue",
    },
    {
      icon: "🎯",
      title: "Fácil de Usar",
      description:
        "Interfaz simple: sube, espera y descarga. Sin complicaciones",
      color: "purple",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6 md:mb-8 text-center">
        Características
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-slate-800 rounded-lg p-4 md:p-6 ${
              index === 2 ? "sm:col-span-2 md:col-span-1" : ""
            }`}
          >
            <div
              className={`text-2xl md:text-3xl mb-2 md:mb-3 ${
                feature.color === "emerald"
                  ? "text-emerald-400"
                  : feature.color === "blue"
                  ? "text-blue-400"
                  : "text-purple-400"
              }`}
            >
              {feature.icon}
            </div>
            <h3
              className={`text-lg md:text-xl font-semibold mb-2 ${
                feature.color === "emerald"
                  ? "text-emerald-400"
                  : feature.color === "blue"
                  ? "text-blue-400"
                  : "text-purple-400"
              }`}
            >
              {feature.title}
            </h3>
            <p className="text-slate-400 text-xs md:text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
