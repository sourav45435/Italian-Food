import React from 'react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface Review {
  id: number;
  author: string;
  role: string;
  roleIt: string;
  rating: number;
  quote: string;
  quoteIt: string;
  dish: string;
  avatar: string;
  date: string;
  dateIt: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Elena Moretti',
    role: 'Food & Wine Critic, Milano',
    roleIt: 'Critica Enogastronomica, Milano',
    rating: 5,
    quote: 'The finest wood-fired pizza outside of Naples. The crust is featherlight, the San Marzano tomatoes sing with natural sweetness, and watching classic 35mm cinema in the background creates an unforgettable evening.',
    quoteIt: 'La miglior pizza a legna fuori da Napoli. Il cornicione è leggerissimo, i pomodori San Marzano sprigionano tutta la loro naturale dolcezza, e cenare davanti alle proiezioni 35mm d’epoca rende la serata indimenticabile.',
    dish: 'Pizza Regina Margherita D.O.P.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85',
    date: 'Verified Review · October 2026',
    dateIt: 'Recensione Verificata · Ottobre 2026',
  },
  {
    id: 2,
    author: 'Matteo Rossi',
    role: 'Executive Chef & Sommelier',
    roleIt: 'Executive Chef & Sommelier AIS',
    rating: 5,
    quote: 'Their Tagliolini al Tartufo was extraordinary. The pasta texture has that unmistakable bronze-extruded bite, and the wine pairings from their vaulted cellar were flawless. A true culinary jewel.',
    quoteIt: 'I loro Tagliolini al Tartufo sono stati straordinari. La sfoglia ruvida trafilata al bronzo trattiene perfettamente il condimento, e gli abbinamenti dalla cantina sotterranea sono impeccabili. Un autentico gioiello.',
    dish: 'Tagliolini al Tartufo & Barolo 2018',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85',
    date: 'Verified Review · September 2026',
    dateIt: 'Recensione Verificata · Settembre 2026',
  },
  {
    id: 3,
    author: 'Sophia & Alexander Wright',
    role: 'Anniversary Dinner Guests',
    roleIt: 'Ospiti Anniversario di Nozze',
    rating: 5,
    quote: 'We celebrated our 10th anniversary in the mezzanine cinema booth. The candlelit atmosphere, the warm brick walls, and the incredible tiramisù made it the most romantic dinner we have ever experienced.',
    quoteIt: 'Abbiamo celebrato il nostro decimo anniversario nel privée del mezzanino. L’atmosfera a lume di candela, le pareti storiche in mattoni e il sublime tiramisù hanno reso questa la cena più romantica di sempre.',
    dish: 'Bistecca Fiorentina & Tiramisù',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=85',
    date: 'Verified Review · August 2026',
    dateIt: 'Recensione Verificata · Agosto 2026',
  },
];

export const TestimonialsSection: React.FC = () => {
  const { mode } = useLanguage();

  return (
    <section id="testimonials-section" className="py-20 bg-[#f9f8f4] border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Italian First */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-red-700 text-xs font-semibold uppercase tracking-widest mb-2">
            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
            <span>
              {mode === 'en' ? 'Guest Reflections' : 'Cosa Dicono di Noi'}
            </span>
          </div>

          <h2 className="font-slab text-3xl sm:text-4xl text-stone-900 tracking-wide uppercase drop-shadow-sm">
            {mode === 'en' ? 'WORDS FROM OUR GUESTS & CRITICS' : 'LE PAROLE DEI NOSTRI OSPITI'}
          </h2>

          {mode === 'it-first' && (
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-red-700 font-bold mt-1">
              Words from Our Guests & Food Critics
            </p>
          )}

          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            {mode === 'en' ? (
              'Over 2,500 five-star memories created under our vintage theatre lights. Here is what food connoisseurs and guests say about their experience.'
            ) : mode === 'it' ? (
              'Oltre 2.500 serate indimenticabili celebrate sotto le luci del nostro cinema d’epoca. Ecco le recensioni di critici e ospiti che amano la nostra cucina.'
            ) : (
              'Oltre 2.500 serate indimenticabili sotto le luci del nostro cinema. Memories created under our vintage theatre lights.'
            )}
          </p>
        </div>

        {/* Guest Photo & Atmosphere Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden shadow-xl border border-stone-200 grid grid-cols-1 md:grid-cols-12 bg-white">
          <div className="md:col-span-7 relative min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85"
              alt="Happy guests enjoying dinner and raising wine glasses in the vintage cinema dining room"
              className="w-full h-full object-cover"
              decoding="async"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[11px] font-mono uppercase text-amber-300">
                {mode === 'en' ? 'Live Evening Atmosphere' : 'Atmosfera delle Nostre Serate'}
              </span>
              <p className="text-sm font-semibold">
                {mode === 'en'
                  ? 'Laughter, fine wine, and cinema elegance'
                  : 'Sorrisi, calici di vino e l’eleganza del cinema'}
              </p>
            </div>
          </div>

          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-center bg-stone-900 text-white">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-xs font-mono font-bold text-white ml-2">4.9 / 5.0 VALUTAZIONE</span>
            </div>

            <h3 className="font-slab text-2xl text-white font-bold">
              {mode === 'en' ? (
                '"The Most Atmospheric Italian Dining in Town"'
              ) : (
                '«L’Esperienza Italiana Più Suggestiva della Città»'
              )}
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
              {mode === 'en'
                ? 'Selected by Italian Culinary Guides 2025/2026 for authentic artisanal adherence to Neapolitan pizza craft and fresh bronze-die pasta creation.'
                : 'Selezionato dalle guide gastronomiche per la fedeltà all’arte della pizza napoletana e alla trafilatura della pasta fresca al bronzo.'}
            </p>

            <div className="mt-6 pt-4 border-t border-stone-800 grid grid-cols-2 gap-4 text-left">
              <div>
                <span className="font-slab text-2xl font-bold text-amber-400">98%</span>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  {mode === 'en' ? 'Recommend to Friends' : 'Consigliato ad Amici'}
                </p>
              </div>
              <div>
                <span className="font-slab text-2xl font-bold text-red-500">48 Ore</span>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  {mode === 'en' ? 'Sourdough Fermentation' : 'Lievitazione Naturale'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid - Italian First */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => {
            const roleText = mode === 'en' ? rev.role : rev.roleIt;
            const dateText = mode === 'en' ? rev.date : rev.dateIt;

            return (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-200/90 flex flex-col justify-between relative group"
              >
                <div>
                  {/* 5-Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-stone-300 group-hover:text-red-500 transition-colors" />
                  </div>

                  {/* Review Text: Italian First with English Text */}
                  <div className="text-xs sm:text-sm leading-relaxed space-y-2">
                    {mode === 'en' ? (
                      <p className="text-stone-700 italic">"{rev.quote}"</p>
                    ) : mode === 'it' ? (
                      <p className="text-stone-800 italic">«{rev.quoteIt}»</p>
                    ) : (
                      <>
                        <p className="text-stone-900 font-medium italic">«{rev.quoteIt}»</p>
                        <p className="text-[11px] text-stone-500 italic border-l-2 border-red-600/30 pl-2">
                          "{rev.quote}"
                        </p>
                      </>
                    )}
                  </div>

                  {/* Dish tag */}
                  <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    <CheckCircle2 className="w-3 h-3 text-amber-600" />
                    <span>
                      {mode === 'en' ? 'Favorite:' : 'Piatto Amato:'} {rev.dish}
                    </span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-stone-200"
                    decoding="async"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-slab text-sm font-bold text-stone-900">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-stone-500">{roleText}</p>
                    <p className="text-[10px] text-stone-400">{dateText}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
