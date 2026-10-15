import React from 'react';
import { Film, Calendar, Users, Wine, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface EventsSectionProps {
  onOpenReservation?: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenReservation }) => {
  const { mode } = useLanguage();

  return (
    <section id="private-events" className="py-20 bg-[#f4f1e8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Italian First */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-red-700 text-xs font-semibold uppercase tracking-widest mb-2">
            <Film className="w-4 h-4 text-red-600" />
            <span>
              {mode === 'en' ? 'Exclusive Experiences' : 'Esperienze Esclusive & Banchetti'}
            </span>
          </div>

          <h2 className="font-slab text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-wide uppercase drop-shadow-sm">
            {mode === 'en'
              ? 'PRIVATE CINEMA SCREENINGS & EVENTS'
              : 'PROIEZIONI PRIVATE & CENE ESCLUSIVE'}
          </h2>

          {mode === 'it-first' && (
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-red-700 font-bold mt-1">
              Private Cinema Screenings & Bespoke Banquets
            </p>
          )}

          <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            {mode === 'en' ? (
              'Host your celebration inside our historic 1950s theatre auditorium. From bespoke 5-course banquet menus paired with vintage cinema to corporate masterclasses and anniversary evenings.'
            ) : mode === 'it' ? (
              'Celebra i tuoi momenti speciali nella platea del nostro cinema anni ’50. Menu degustazione da 3 a 5 portate, proiezioni su grande schermo e servizio impeccabile in esclusiva.'
            ) : (
              'Celebra i tuoi momenti speciali nella platea del nostro cinema storico anni ’50. Bespoke banquet menus paired with vintage 35mm cinema for anniversaries & celebrations.'
            )}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-300 aspect-[16/10] group">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=85"
                alt="Private cinema dining hall set for celebration banquet with wine glasses and candlelight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                decoding="async"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono uppercase text-amber-400">
                  {mode === 'en' ? 'Exclusive Buyout' : 'Affitto Esclusivo'}
                </span>
                <h3 className="font-slab text-xl text-white font-bold">
                  {mode === 'en' ? 'The Main Cinema Hall (Up to 90 Guests)' : 'La Sala Cinema Storica (Fino a 90 Ospiti)'}
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  {mode === 'en'
                    ? 'Full 35mm projector usage, vintage red velvet seating & dedicated kitchen brigade.'
                    : 'Proiettore 35mm cinematografico, poltrone in velluto e brigata di cucina dedicata.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-stone-300 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=85"
                  alt="Champagne glasses toasting at private event"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-2 left-2 text-white text-[11px] font-mono">
                  {mode === 'en' ? 'Cocktail Receptions' : 'Aperitivi & Brindisi'}
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg border border-stone-300 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=85"
                  alt="Intimate booth dining in the cinema lounge"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-2 left-2 text-white text-[11px] font-mono">
                  {mode === 'en' ? 'Mezzanine Booths' : 'Privée Mezzanino'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Event Packages & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-stone-200">
              <span className="text-xs font-mono uppercase text-red-600 font-bold tracking-wider">
                {mode === 'en' ? 'Tailored Occasions' : 'Occasioni su Misura'}
              </span>
              <h3 className="font-slab text-2xl text-stone-900 font-bold mt-1">
                {mode === 'en' ? (
                  'A Cinematic Backdrop for Unforgettable Moments'
                ) : (
                  'Una Cornice Cinematografica per Momenti Indimenticabili'
                )}
              </h3>
              <p className="text-stone-600 text-sm mt-3 leading-relaxed">
                {mode === 'en' ? (
                  'Whether you are screening your wedding film, celebrating a milestone birthday, or hosting VIP corporate clients, our hospitality team curates every detail.'
                ) : (
                  'Dalla proiezione del tuo video di nozze sul nostro schermo storico, ai compleanni speciali o cene aziendali di gala con vini DOCG: curiamo ogni singolo dettaglio.'
                )}
              </p>

              {/* Event Features List - Italian First */}
              <div className="mt-6 space-y-3">
                {[
                  {
                    it: 'Schermo di proiezione cinema con audio ad alta fedeltà e microfoni',
                    en: 'Private cinema projection screen with hi-fi audio & mic setup',
                  },
                  {
                    it: 'Menu degustazione personalizzati da 3 a 5 portate con abbinamento vini',
                    en: 'Customized 3 to 5 course Italian tasting menus with wine pairings',
                  },
                  {
                    it: 'Bartender dedicato e servizio di sala privato esclusivo',
                    en: 'Dedicated private bartender and front-of-house hospitality brigade',
                  },
                  {
                    it: 'Biglietti d’invito vintage personalizzati in stile cinema d’epoca',
                    en: 'Personalized vintage cinema ticket invitations for your guests',
                  },
                  {
                    it: 'Buffet di pizze artigianali notturne e dolci tipici della tradizione',
                    en: 'Late-night artisan pizza and Italian pastry buffet options',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      {mode === 'en' ? (
                        <span>{item.en}</span>
                      ) : mode === 'it' ? (
                        <span>{item.it}</span>
                      ) : (
                        <span>
                          <strong>{item.it}</strong>{' '}
                          <span className="text-stone-500 text-xs italic">/ {item.en}</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Event Capacity Stats */}
              <div className="mt-6 pt-6 border-t border-stone-100 grid grid-cols-3 gap-3 text-center">
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60">
                  <Users className="w-4 h-4 text-stone-500 mx-auto mb-1" />
                  <span className="font-slab text-lg font-bold text-stone-900">12 – 90</span>
                  <p className="text-[10px] text-stone-500 uppercase">
                    {mode === 'en' ? 'Guest Capacity' : 'Capienza Ospiti'}
                  </p>
                </div>
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60">
                  <Film className="w-4 h-4 text-stone-500 mx-auto mb-1" />
                  <span className="font-slab text-lg font-bold text-stone-900">4K & 35mm</span>
                  <p className="text-[10px] text-stone-500 uppercase">
                    {mode === 'en' ? 'Screen Formats' : 'Formati Schermo'}
                  </p>
                </div>
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60">
                  <Wine className="w-4 h-4 text-stone-500 mx-auto mb-1" />
                  <span className="font-slab text-lg font-bold text-stone-900">
                    {mode === 'en' ? 'Bespoke' : 'Su Misura'}
                  </span>
                  <p className="text-[10px] text-stone-500 uppercase">
                    {mode === 'en' ? 'Sommelier Menus' : 'Menu Sommelier'}
                  </p>
                </div>
              </div>

              {onOpenReservation && (
                <div className="mt-6">
                  <button
                    onClick={onOpenReservation}
                    className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>
                      {mode === 'en'
                        ? 'Inquire About Private Dining & Cinema Hire'
                        : mode === 'it'
                        ? 'Richiedi Disponibilità per Eventi Privati'
                        : 'Richiedi Evento Privato / Inquire Private Cinema'}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
