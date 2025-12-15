import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Architecture from "../components/Architecture";
import Features from "../components/Features";

export default function HomePage({ onStartClick }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <HeroSection onStartClick={onStartClick} />
        <HowItWorks />
        <Architecture />
        <Features />

        {/* CTA Final */}
        <div className="text-center mt-8 md:mt-16 px-2">
          <button
            onClick={onStartClick}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 md:py-4 px-6 md:px-10 rounded-lg transition-colors text-base md:text-lg w-full sm:w-auto"
          >
            Empezar a convertir ahora
          </button>
        </div>
      </div>
    </div>
  );
}
