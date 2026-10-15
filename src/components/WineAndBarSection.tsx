import React, { useState } from 'react';
import { Wine, GlassWater, Compass, Award, Sparkles } from 'lucide-react';
import { BlackTornDivider } from './TornEdge.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface WineItem {
  id: string;
  name: string;
  region: string;
  vintage: string;
  type: string;
  tastingNotes: string;
  pairing: string;
  glassPrice: string;
  bottlePrice: string;
}

const wineList: WineItem[] = [
  {
    id: 'brunello',
    name: 'Brunello di Montalcino DOCG',
    region: 'Montalcino, Tuscany',
    vintage: '2017 Riserva',
    type: 'Full-Bodied Red',
    tastingNotes: 'Wild blackberries, dried violet petals, pipe tobacco, and silky volcanic mineral tannins.',
    pairing: 'Bistecca alla Fiorentina & Tagliolini al Tartufo',
    glassPrice: '$24',
    bottlePrice: '$110',
  },
  {
    id: 'barolo',
    name: 'Barolo Cannubi DOCG',
    region: 'Langhe, Piedmont',
    vintage: '2018',
    type: 'Noble Red',
    tastingNotes: 'Rose petals, ripe tar, macerated cherries, and refined truffles with long savory persistence.',
    pairing: 'Slow-braised Ossobuco & aged Parmigiano',
    glassPrice: '$26',
    bottlePrice: '$125',
  },
  {
    id: 'chianti',
    name: 'Chianti Classico Gran Selezione DOCG',
    region: 'Greve in Chianti, Tuscany',
    vintage: '2019',
    type: 'Classic Red',
    tastingNotes: 'Bright sour red cherries, culinary thyme, leather, and zesty balsamic acidity.',
    pairing: 'Artisan Margherita Pizza & Wood-fired Meats',
    glassPrice: '$17',
    bottlePrice: '$72',
  },
  {
    id: 'amarone',
    name: 'Amarone della Valpolicella Classico',
    region: 'Verona, Veneto',
    vintage: '2016',
    type: 'Appassimento Red',
    tastingNotes: 'Sun-dried figs, dark cocoa, spiced plum preserves, and velvety rounded richness.',
    pairing: 'Gorgonzola Dolce & Dark Chocolate Desserts',
    glassPrice: '$28',
    bottlePrice: '$135',
  },
  {
    id: 'franciacorta',
    name: 'Franciacorta Brut Satèn DOCG',
    region: 'Lombardy',
    vintage: 'Millésimé 2020',
    type: 'Artisan Sparkling',
    tastingNotes: 'Golden brioche, green apple tart, creamy micro-bubbles, and crisp limestone finish.',
    pairing: 'Crispy Fritto Misto & Raw Burrata',
    glassPrice: '$19',
    bottlePrice: '$85',
  },
];

interface WineAndBarSectionProps {
  onOpenReservation?: () => void;
}

export const WineAndBarSection: React.FC<WineAndBarSectionProps> = ({ onOpenReservation }) => {
  const [selectedWine, setSelectedWine] = useState<WineItem>(wineList[0]);
  const { mode } = useLanguage();

  return (
    <section id="cantina-bar" className="relative py-20 bg-[#12100e] text-stone-200 overflow-hidden">
      {/* Black Torn Divider at Top */}
      <BlackTornDivider />

      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        {/* Section Heading - Italian First */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Wine className="w-4 h-4 text-amber-400" />
            <span>
              {mode === 'en'
                ? 'Historic Wine Cellar & Cinema Lounge'
                : 'La Cantina Storica & Cinema Lounge Bar'}
            </span>
          </div>

          <h2 className="font-slab text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase drop-shadow-md">
            {mode === 'en' ? 'WINE CELLAR & COCKTAIL LOUNGE' : 'LA CANTINA & IL LOUNGE BAR'}
          </h2>

          {mode === 'it-first' && (
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-amber-400 font-semibold mt-1">
              Historic Wine Cellar & Artisanal Cinema Bar
            </p>
          )}

          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full" />

          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            {mode === 'en' ? (
              'Housed in the restored brick vaults beneath the historic cinema auditorium. Curated with over 200 rare Italian vintages and craft classic cocktails inspired by golden-age Italian cinema.'
            ) : mode === 'it' ? (
              'Oltre 200 etichette storiche custodite nelle volte in mattoni faccia a vista sotto la platea del cinema. Vini rari delle venti regioni italiane e cocktail artigianali ispirati al grande cinema d’autore.'
            ) : (
              'Oltre 200 etichette storiche custodite nelle volte sotto il cinema. Over 200 rare Italian vintages & craft classic cocktails inspired by golden-age Italian cinema.'
            )}
          </p>
        </div>

        {/* 3 Atmospheric Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-stone-800 aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85"
              alt="Historic wine cellar arches with wooden aging barrels and vintage wine bottles"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              decoding="async"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[11px] font-mono uppercase text-amber-400">Vaulted Cellar</span>
              <h3 className="font-slab text-lg text-white font-bold">Over 200 Italian Vintages</h3>
              <p className="text-xs text-stone-300 mt-0.5">Aged under optimal temperature in historic brick caverns.</p>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-stone-800 aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=85"
              alt="Sommelier pouring vintage red wine into crystal glass"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              decoding="async"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[11px] font-mono uppercase text-amber-400">Sommelier Selection</span>
              <h3 className="font-slab text-lg text-white font-bold">Curated Wine Pairings</h3>
              <p className="text-xs text-stone-300 mt-0.5">Every course is expertly paired to elevate each regional note.</p>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-stone-800 aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85"
              alt="Craft cocktail with dehydrated orange slice on vintage bar counter"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              decoding="async"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[11px] font-mono uppercase text-amber-400">Cinema Bar Lounge</span>
              <h3 className="font-slab text-lg text-white font-bold">Artisanal Negronis & Spritz</h3>
              <p className="text-xs text-stone-300 mt-0.5">Antique amaro infusions and crystal-clear artisanal ice.</p>
            </div>
          </div>
        </div>

        {/* Interactive Sommelier Tasting Room Interface */}
        <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Wine Selector Column */}
            <div className="w-full lg:w-5/12 space-y-3">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-amber-400">
                <Compass className="w-4 h-4" />
                <span>Featured Cellar Reserves</span>
              </div>

              {wineList.map((wine) => {
                const active = selectedWine.id === wine.id;
                return (
                  <button
                    key={wine.id}
                    onClick={() => setSelectedWine(wine)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      active
                        ? 'bg-stone-800/90 border-amber-500/80 shadow-lg shadow-amber-500/10'
                        : 'bg-stone-950/50 border-stone-800 hover:border-stone-700 text-stone-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wide text-amber-400">
                        {wine.region}
                      </span>
                      <span className="text-xs text-stone-400 font-mono">
                        {wine.vintage}
                      </span>
                    </div>
                    <h4 className={`font-slab text-base font-bold mt-1 ${active ? 'text-white' : 'text-stone-300'}`}>
                      {wine.name}
                    </h4>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-800/70 text-xs">
                      <span className="text-stone-400">{wine.type}</span>
                      <span className="text-amber-400 font-mono font-bold">
                        Glass {wine.glassPrice} · Bottle {wine.bottlePrice}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Wine Sommelier Details Card */}
            <div className="w-full lg:w-7/12 bg-stone-950 rounded-2xl p-6 sm:p-8 border border-stone-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-red-400 tracking-wider">
                      {selectedWine.region}
                    </span>
                    <h3 className="font-slab text-2xl sm:text-3xl text-white mt-1">
                      {selectedWine.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-400">Vintage</span>
                    <p className="font-mono text-amber-400 font-bold text-sm">
                      {selectedWine.vintage}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-stone-400 tracking-wider">
                      Sommelier Tasting Notes
                    </span>
                    <p className="text-sm sm:text-base text-stone-200 mt-1.5 leading-relaxed italic bg-stone-900/60 p-4 rounded-xl border border-stone-800/80">
                      "{selectedWine.tastingNotes}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800/80">
                      <span className="text-xs font-mono uppercase text-stone-400 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>Recommended Dish Pairing</span>
                      </span>
                      <p className="text-sm font-semibold text-amber-300 mt-1">
                        {selectedWine.pairing}
                      </p>
                    </div>

                    <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800/80">
                      <span className="text-xs font-mono uppercase text-stone-400 flex items-center gap-1.5">
                        <GlassWater className="w-3.5 h-3.5 text-red-400" />
                        <span>Service & Temperature</span>
                      </span>
                      <p className="text-sm font-semibold text-white mt-1">
                        Served at 16°C – 18°C in Riedel Crystal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-400">
                  <span>Available by the glass & bottle daily.</span>
                </div>

                {onOpenReservation && (
                  <button
                    onClick={onOpenReservation}
                    className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold px-6 py-2.5 rounded-lg text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Reserve Wine Tasting Booth</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
