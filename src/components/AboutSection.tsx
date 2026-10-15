import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface AboutSectionProps {
  onOpenStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenStory }) => {
  const { mode } = useLanguage();

  return (
    <section
      id="about-us"
      className="py-16 md:py-24 bg-[#f8f6f0] relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(#e5e0d4 0.75px, transparent 0.75px)`,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Delicious halved artisan wraps */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative group max-w-sm">
              <div className="overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02] bg-white p-2 border border-stone-200/80">
                <img
                  src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85"
                  alt="Delicious Italian Piadina and Artisan Wraps"
                  className="w-full h-72 sm:h-80 object-cover rounded-xl"
                  loading="lazy"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative culinary badge */}
              <div className="absolute -bottom-3 -right-3 bg-red-600 text-white font-slab text-xs px-3.5 py-1.5 rounded-md shadow-md uppercase tracking-wider">
                {mode === 'en' ? (
                  'Fresh Daily'
                ) : mode === 'it' ? (
                  'Fresco Ogni Giorno'
                ) : (
                  <span>
                    Fresco Ogni Giorno <span className="opacity-80 font-normal">· Fresh</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: About Us Content */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <div>
              <h2 className="font-slab text-3xl sm:text-4xl text-stone-900 tracking-wide uppercase drop-shadow-sm">
                {mode === 'en' ? 'ABOUT US' : 'CHI SIAMO'}
              </h2>
              {mode === 'it-first' && (
                <span className="text-xs sm:text-sm font-sans uppercase tracking-widest text-red-700 font-bold mb-4 block">
                  About Our Cinema Restaurant & Heritage
                </span>
              )}
            </div>

            <div className="space-y-4 text-stone-700 text-sm sm:text-[15px] leading-relaxed max-w-xl font-normal mt-3">
              {mode === 'en' ? (
                <>
                  <p>
                    We are an authentic Italian restaurant located in an old movie
                    theatre. It is the ultimate escape —
                    the perfect spot to enjoy sensational food and drinks that showcases everything
                    Italy has to offer in a single, sophisticated setting.
                  </p>
                  <p>
                    Where an early morning walk to the bakery around the corner is a way of life,
                    nothing beats the first batch of bread from the oven to start your day. We
                    combine the finest ingredients and delicacies for you to enjoy that
                    experience whenever you desire.
                  </p>
                </>
              ) : mode === 'it' ? (
                <>
                  <p>
                    Siamo un autentico ristorante italiano situato all'interno di uno storico cinema
                    d'epoca. Un rifugio esclusivo dove assaporare pietanze sensazionali e vini
                    pregiati che racchiudono tutta l'eccellenza culinaria italiana in un ambiente
                    sofisticato.
                  </p>
                  <p>
                    La passeggiata mattutina verso il forno all'angolo è una vera filosofia di vita:
                    nulla eguaglia la prima sfornata di pane caldo dal forno a legna. Selezioniamo con
                    passione i migliori ingredienti D.O.P. per farti rivivere questa emozione ogni giorno.
                  </p>
                </>
              ) : (
                <>
                  {/* Italian First with English Text Underneath */}
                  <div className="space-y-2">
                    <p className="text-stone-900 font-medium">
                      Siamo un autentico ristorante italiano situato all'interno di uno storico cinema
                      d'epoca. È il rifugio perfetto dove gustare piatti sensazionali e vini pregiati che
                      celebrano l'eccellenza della tradizione italiana in un contesto intimo ed elegante.
                    </p>
                    <p className="text-xs sm:text-[13px] text-stone-500 italic pl-3 border-l-2 border-red-600/50">
                      We are an authentic Italian restaurant located in an old movie theatre. The
                      ultimate spot to enjoy sensational food and regional delicacies in a sophisticated
                      cinematic setting.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <p className="text-stone-900 font-medium">
                      Qui il buongiorno profuma di pane fresco appena sfornato dal legno ardente:
                      selezioniamo a mano le materie prime più genuine d'Italia per regalarti quell'emozione
                      ogni volta che ti accomodi ai nostri tavoli.
                    </p>
                    <p className="text-xs sm:text-[13px] text-stone-500 italic pl-3 border-l-2 border-red-600/50">
                      Where a morning walk to the bakery is a way of life, nothing beats the first
                      batch of fresh wood-fired bread. We bring together Italy’s finest ingredients for
                      you to savor anytime.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* READ MORE Button */}
            <button
              onClick={onOpenStory}
              className="mt-6 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm shadow hover:shadow-md transition-all cursor-pointer font-sans flex items-center gap-1.5"
            >
              {mode === 'en' ? (
                'READ OUR STORY'
              ) : mode === 'it' ? (
                'SCOPRI LA NOSTRA STORIA'
              ) : (
                <span>
                  <strong>SCOPRI LA STORIA</strong>{' '}
                  <span className="opacity-80 font-normal lowercase">/ read more</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
