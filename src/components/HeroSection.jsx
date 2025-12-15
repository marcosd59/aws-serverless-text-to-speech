export default function HeroSection({ onStartClick }) {
  return (
    <div className="text-center mb-8 md:mb-16">
      <h1 className="text-3xl md:text-5xl font-bold text-emerald-400 mb-3 md:mb-4 px-2">
        Text to Speech
      </h1>
      <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
        Convierte tus archivos de texto a audio MP3 de alta calidad usando
        tecnología serverless de AWS
      </p>
      <button
        onClick={onStartClick}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-colors text-base md:text-lg"
      >
        Empezar a convertir
      </button>
    </div>
  );
}
