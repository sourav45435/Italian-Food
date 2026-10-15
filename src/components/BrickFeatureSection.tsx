import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface BrickFeatureSectionProps {
  onOpenReservation: () => void;
  onOpenDelivery: () => void;
}

export const BrickFeatureSection: React.FC<BrickFeatureSectionProps> = ({
  onOpenReservation,
  onOpenDelivery,
}) => {
  const { mode } = useLanguage();

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-[#8b3a2b]">
      {/* Brick Wall Texture Background */}
      <div
        className="absolute inset-0 bg-cover bg-repeat opacity-95"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: '400px',
        }}
      >
        {/* Warm shadow gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center justify-center max-w-4xl mx-auto">
          {/* Card 1: FINE DINING - Italian First */}
          <div className="group relative rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-950/40 hover:-translate-y-1">
            {/* White outer frame border */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border-4 border-white bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=85"
                alt="Fine Dining Salad & Italian Delicacies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />

              {/* Dark tint overlay for text legibility */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />

              {/* Centered Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="font-slab text-2xl sm:text-3xl text-white tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-1">
                  {mode === 'en' ? 'FINE DINING' : 'CUCINA RAFFINATA'}
                </h3>
                {mode === 'it-first' && (
                  <p className="text-stone-300 text-xs tracking-wider uppercase font-medium mb-3">
                    Fine Dining & Cinema Atmosphere
                  </p>
                )}

                <button
                  onClick={onOpenReservation}
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-slab text-xs sm:text-sm tracking-wider px-6 py-2 rounded shadow-lg uppercase font-bold cursor-pointer transition-all transform hover:scale-105"
                >
                  {mode === 'en' ? (
                    'RESERVE NOW'
                  ) : mode === 'it' ? (
                    'PRENOTA UN TAVOLO'
                  ) : (
                    <span>
                      <strong>PRENOTA ORA</strong>{' '}
                      <span className="opacity-80 text-[11px] font-sans font-normal">/ Reserve</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: DELIVERY - Italian First */}
          <div className="group relative rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-950/40 hover:-translate-y-1">
            {/* White outer frame border */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border-4 border-white bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=800&q=85"
                alt="Delivery of Fresh Gourmet Italian meals"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />

              {/* Dark tint overlay for text legibility */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />

              {/* Centered Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="font-slab text-2xl sm:text-3xl text-white tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-1">
                  {mode === 'en' ? 'FAST DELIVERY' : 'CONSEGNA A DOMICILIO'}
                </h3>
                {mode === 'it-first' && (
                  <p className="text-stone-300 text-xs tracking-wider uppercase font-medium mb-3">
                    Order Delivery 24/7 Hot To Your Door
                  </p>
                )}

                <button
                  onClick={onOpenDelivery}
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-slab text-xs sm:text-sm tracking-wider px-6 py-2 rounded shadow-lg uppercase font-bold cursor-pointer transition-all transform hover:scale-105"
                >
                  {mode === 'en' ? (
                    'ORDER DELIVERY'
                  ) : mode === 'it' ? (
                    'ORDINA A DOMICILIO'
                  ) : (
                    <span>
                      <strong>ORDINA ONLINE</strong>{' '}
                      <span className="opacity-80 text-[11px] font-sans font-normal">/ Delivery</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Artisan Pizza Slice & Ingredients in the bottom right corner */}
        <div className="relative mt-8 md:mt-2 flex justify-end">
          <div className="relative w-48 sm:w-60 md:w-72 -mb-24 sm:-mb-28 md:-mb-32 z-20 pointer-events-none select-none">
            {/* Artisan Pizza Slice */}
            <img
              src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=85"
              alt="Artisan Pizza Slice"
              className="w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] rotate-12 rounded-2xl"
              decoding="async"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />

            {/* Floating basil leaves and tomato garnish accents */}
            <span className="absolute -top-3 left-4 text-2xl filter drop-shadow">🍃</span>
            <span className="absolute top-8 -left-6 text-xl filter drop-shadow">🍅</span>
            <span className="absolute -bottom-2 -left-2 text-lg filter drop-shadow">🍃</span>
          </div>
        </div>
      </div>
    </section>
  );
};
