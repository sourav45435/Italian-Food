import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const { mode } = useLanguage();

  return (
    <section className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image: Classic movie theatre Italian restaurant interior */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Cinematic dark warm overlay matching the red velvet theater ambiance */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-stone-950/50 to-stone-950/80" />
        <div className="absolute inset-0 bg-red-950/20 mix-blend-multiply" />
      </div>

      {/* Hero Content Badge */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
        {/* TASTY label - Italian First */}
        <div className="font-slab text-amber-300 tracking-[0.25em] text-sm sm:text-base uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-1 flex items-center gap-2">
          {mode === 'en' ? (
            <span>TASTY & ARTISANAL</span>
          ) : mode === 'it' ? (
            <span>AUTENTICO & SQUISITO</span>
          ) : (
            <>
              <span className="font-bold text-white">SQUISITO</span>
              <span className="text-amber-400 font-normal">·</span>
              <span className="text-amber-300 font-normal opacity-90">TASTY</span>
            </>
          )}
        </div>

        {/* Vintage Ornate Ribbon / Bracket Frame */}
        <div className="relative px-6 py-3 sm:px-10 sm:py-4 my-2">
          {/* Custom SVG Decorative Ribbon Frame */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            viewBox="0 0 360 80"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Outer ornate bracket frame */}
            <path
              d="M30,8 L330,8 M350,28 L350,52 M330,72 L30,72 M10,52 L10,28"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Left flourish bracket */}
            <path
              d="M30,8 C12,8 5,18 10,28 M10,52 C5,62 12,72 30,72"
              stroke="#ffffff"
              strokeWidth="2.5"
            />
            {/* Right flourish bracket */}
            <path
              d="M330,8 C348,8 355,18 350,28 M350,52 C355,62 348,72 330,72"
              stroke="#ffffff"
              strokeWidth="2.5"
            />
            {/* Inner accent line */}
            <path
              d="M34,14 L326,14 M34,66 L326,66"
              stroke="#ffffff"
              strokeWidth="1"
              strokeOpacity="0.75"
            />
            {/* Left and right wing accents */}
            <polygon points="4,40 14,35 14,45" fill="#ffffff" />
            <polygon points="356,40 346,35 346,45" fill="#ffffff" />
          </svg>

          {/* ITALIAN FOOD text inside - Italian First */}
          <div className="px-6 py-2">
            <h1 className="font-slab text-2xl sm:text-3xl md:text-4xl text-white tracking-widest uppercase select-none drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
              {mode === 'en' ? 'ITALIAN FOOD' : 'CUCINA ITALIANA'}
            </h1>
            {mode === 'it-first' && (
              <p className="text-stone-300 text-xs sm:text-sm font-sans tracking-[0.2em] uppercase font-medium mt-1 select-none">
                Tasty Italian Food
              </p>
            )}
          </div>
        </div>

        {/* RESERVE NOW Red Button - Italian First */}
        <button
          onClick={onOpenReservation}
          className="mt-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-slab text-sm sm:text-base tracking-wider px-8 sm:px-10 py-2.5 sm:py-3 rounded-md shadow-[0_4px_15px_rgba(220,38,38,0.5)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.7)] transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer uppercase font-bold flex items-center gap-2"
        >
          {mode === 'en' ? (
            'RESERVE NOW'
          ) : mode === 'it' ? (
            'PRENOTA ORA'
          ) : (
            <span>
              <strong>PRENOTA ORA</strong>{' '}
              <span className="opacity-80 font-normal text-xs tracking-normal font-sans">/ Reserve Now</span>
            </span>
          )}
        </button>
      </div>

      {/* Subtle vignette border at edges */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
    </section>
  );
};
