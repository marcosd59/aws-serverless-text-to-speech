export default function HeroSection({ onStartClick }) {
  return (
    <div className="text-center mb-8 md:mb-16">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-xs md:text-sm text-emerald-400 font-medium">
            Powered by AWS Serverless
          </span>
        </div>

        {/* Main Title with gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 px-2">
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
            Text to Speech
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 md:mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
          Convierte tus archivos de texto a audio{" "}
          <span className="text-emerald-400 font-semibold">MP3</span> de alta
          calidad usando tecnología{" "}
          <span className="text-emerald-400 font-semibold">serverless</span> de
          AWS
        </p>

        {/* CTA Button */}
        <button
          onClick={onStartClick}
          className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold py-4 px-8 md:px-10 rounded-xl transition-all duration-300 text-base md:text-lg shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/60 hover:-translate-y-0.5"
        >
          <span>Empezar a convertir</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
