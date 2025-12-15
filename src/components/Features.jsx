export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Rápido y Eficiente",
      description:
        "Procesamiento serverless que escala automáticamente según la demanda",
      color: "emerald",
      gradient: "from-emerald-500/20 to-emerald-600/10",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-500/20",
    },
    {
      icon: "🔒",
      title: "Seguro",
      description: "Tus archivos se procesan de forma segura en la nube de AWS",
      color: "blue",
      gradient: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
    },
    {
      icon: "🎯",
      title: "Fácil de Usar",
      description:
        "Interfaz simple: sube, espera y descarga. Sin complicaciones",
      color: "purple",
      gradient: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
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
            className={`group relative bg-slate-800 rounded-xl p-5 md:p-7 border ${
              feature.borderColor
            } transition-all duration-300 hover:-translate-y-1 ${
              index === 2 ? "sm:col-span-2 md:col-span-1" : ""
            } ${
              feature.color === "emerald"
                ? "hover:shadow-xl hover:shadow-emerald-500/20"
                : feature.color === "blue"
                ? "hover:shadow-xl hover:shadow-blue-500/20"
                : "hover:shadow-xl hover:shadow-purple-500/20"
            }`}
          >
            {/* Gradient background on hover */}
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon container */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl ${feature.iconBg} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <span
                  className={`text-3xl md:text-4xl ${
                    feature.color === "emerald"
                      ? "text-emerald-400"
                      : feature.color === "blue"
                      ? "text-blue-400"
                      : "text-purple-400"
                  }`}
                >
                  {feature.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`text-lg md:text-xl font-bold mb-3 ${
                  feature.color === "emerald"
                    ? "text-emerald-400"
                    : feature.color === "blue"
                    ? "text-blue-400"
                    : "text-purple-400"
                }`}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
