import React, { useState } from 'react';
import { Award, Flame, Wheat, Sparkles, CheckCircle2 } from 'lucide-react';
import { TornEdge } from './TornEdge.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface Ingredient {
  id: string;
  name: string;
  nameIt: string;
  region: string;
  description: string;
  descriptionIt: string;
  tag: string;
  tagIt: string;
  image: string;
}

const ingredients: Ingredient[] = [
  {
    id: 'flour',
    name: '48-Hour Fermented Lievito Madre',
    nameIt: 'Lievito Madre Naturale Fermentato 48 Ore',
    region: 'Napoli, Campania',
    description: 'Slow-fermented stone-ground Italian Type 00 wheat flour with natural wild yeast culture, creating an airy, digestible, honeycombed crust.',
    descriptionIt: 'Farina tipo 00 macinata a pietra e lievito madre naturale con fermentazione lenta di 48 ore, per un impasto soffice, leggero e ad alta digeribilità.',
    tag: 'Sourdough Heritage',
    tagIt: 'Lievito Madre Naturale',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'tomatoes',
    name: 'Pomodoro San Marzano D.O.P.',
    nameIt: 'Pomodoro San Marzano dell’Agro Sarnese-Nocerino D.O.P.',
    region: 'Agro Sarnese-Nocerino, Mt. Vesuvius',
    description: 'Sun-ripened in mineral-rich volcanic soil, hand-crushed with sea salt and sweet Genovese basil for an unmatched sweet-acidic balance.',
    descriptionIt: 'Maturati al sole sui terreni vulcanici del Vesuvio, schiacciati a mano con sale marino integrale e basilico genovese fresco.',
    tag: 'Volcanic Soil D.O.P.',
    tagIt: 'Suolo Vulcanico D.O.P.',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'mozzarella',
    name: 'Mozzarella di Bufala Campana D.O.P.',
    nameIt: 'Mozzarella di Bufala Campana D.O.P. Fresca',
    region: 'Caserta, Campania',
    description: 'Flown in fresh every Tuesday & Friday, creamy whole buffalo milk cheese pulled by master casari, with porcelain sheen and luscious tear.',
    descriptionIt: 'In arrivo fresca due volte a settimana, latte intero di bufala lavorato a mano da maestri casari con la tipica goccia di latte.',
    tag: 'Fresh Twice Weekly',
    tagIt: 'Fresca 2 Volte a Settimana',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'parmigiano',
    name: 'Parmigiano-Reggiano Vacche Rosse 24M',
    nameIt: 'Parmigiano-Reggiano D.O.P. Vacche Rosse 24 Mesi',
    region: 'Reggio Emilia, Emilia-Romagna',
    description: 'Crafted exclusively from ancestral Red Cow milk, aged for 24 months to yield crystalline tyrosine crunch and deep savory umami.',
    descriptionIt: 'Prodotto solo con latte pregiato di Vacche Rosse reggiane e stagionato 24 mesi: sapore ricco, sentori di frutta secca e cristalli di tirosina.',
    tag: 'Aged 24 Months',
    tagIt: 'Stagionato 24 Mesi',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=700&q=85',
  },
];

interface ChefSectionProps {
  onOpenReservation?: () => void;
}

export const ChefSection: React.FC<ChefSectionProps> = ({ onOpenReservation }) => {
  const [activeIngredient, setActiveIngredient] = useState<Ingredient>(ingredients[0]);
  const { mode } = useLanguage();

  return (
    <section id="chef-philosophy" className="relative py-20 bg-[#141210] text-stone-100 overflow-hidden">
      {/* Torn Edge Transition at Top */}
      <TornEdge position="top" />

      {/* Ambient warm glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>
              {mode === 'en' ? (
                'Master Italian Craftsmanship'
              ) : mode === 'it' ? (
                'Maestria e Passione Italiana'
              ) : (
                'Maestria e Passione Italiana · Master Craftsmanship'
              )}
            </span>
          </div>

          <h2 className="font-slab text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase drop-shadow-md">
            {mode === 'en' ? 'THE ART OF THE WOOD-FIRED HEARTH' : 'L’ARTE DEL FORNO A LEGNA'}
          </h2>

          {mode === 'it-first' && (
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-amber-300 font-semibold mt-1">
              The Art of the Wood-Fired Hearth & Master Sfoglina
            </p>
          )}

          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full" />

          <div className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            {mode === 'en' ? (
              <p>
                Every pizza, handmade pasta, and braised cut is forged with time-honored discipline.
                From our hand-built 450°C wood-burning oven to our certified Italian D.O.P. purveyors.
              </p>
            ) : mode === 'it' ? (
              <p>
                Ogni pizza, pasta fresca tirata al mattarello e taglio cotto a fuoco lento nasce da
                una disciplina centenaria. Dal nostro forno a legna a 450°C alle materie prime D.O.P.
                delle migliori cascine italiane.
              </p>
            ) : (
              <div className="space-y-1.5">
                <p className="text-stone-200 font-medium">
                  Ogni pizza, pasta fresca stesa a mano e taglio al forno nasce da una disciplina
                  centenaria. Dal forno a legna a 450°C alle materie prime italiane certificate D.O.P.
                </p>
                <p className="text-xs text-stone-400 italic">
                  Every pizza, handmade pasta, and braised cut is forged with time-honored discipline,
                  baked in our 450°C hearth with certified Italian D.O.P. purveyors.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Dynamic 4-Photo Collage */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-stone-800 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=800&q=85"
                  alt="Master chef kneading and stretching pizza dough with flour dust"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-mono uppercase text-amber-400 tracking-wider">Handcrafted</span>
                  <p className="text-xs font-semibold text-white">Hand-Stretched Sourdough</p>
                </div>
              </div>

              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-stone-800 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=85"
                  alt="Wood-fired brick oven burning beechwood embers at 450 degrees"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-mono uppercase text-amber-400 tracking-wider">450°C Hearth</span>
                  <p className="text-xs font-semibold text-white">Beechwood Fire Roasting</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-stone-800 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=85"
                  alt="Freshly rolled handmade tagliatelle pasta on wooden kitchen board"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-mono uppercase text-amber-400 tracking-wider">
                    {mode === 'en' ? 'Fresh Pasta' : 'Pasta Fatta a Mano'}
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {mode === 'en' ? (
                      'Daily Fresh Semolina Pasta'
                    ) : mode === 'it' ? (
                      'Pasta Fresca Trafilata al Bronzo'
                    ) : (
                      'Pasta Fresca al Bronzo · Semolina Pasta'
                    )}
                  </p>
                </div>
              </div>

              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-stone-800 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85"
                  alt="Chef plating fresh truffle pasta with shaved black truffles"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-mono uppercase text-amber-400 tracking-wider">
                    {mode === 'en' ? 'Alba Truffles' : 'Tartufo Pregiato'}
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {mode === 'en' ? (
                      'Freshly Shaved Truffles'
                    ) : mode === 'it' ? (
                      'Scaglie di Tartufo Nero Fresco'
                    ) : (
                      'Tartufo Nero Fresco · Shaved Truffles'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Master Philosophy & Pedigree */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-l-2 border-red-600 pl-4">
              <p className="text-xs font-mono uppercase tracking-widest text-red-400">
                {mode === 'en' ? 'Our Heritage' : 'La Nostra Tradizione'}
              </p>
              <h3 className="font-slab text-xl sm:text-2xl text-white mt-1">
                {mode === 'en' ? (
                  '"No shortcuts. Only passion, flame, and certified Italian soul."'
                ) : mode === 'it' ? (
                  '«Nessun compromesso. Solo passione, fiamma viva e anima italiana.»'
                ) : (
                  <>
                    <span>«Nessun compromesso. Solo passione, fiamma viva e anima italiana.»</span>
                    <span className="block text-xs text-stone-400 font-sans font-normal italic mt-1">
                      "No shortcuts. Only passion, flame, and certified Italian soul."
                    </span>
                  </>
                )}
              </h3>
            </div>

            <div className="text-stone-300 text-sm sm:text-base leading-relaxed space-y-2">
              {mode === 'en' ? (
                <p>
                  We respect the centuries-old recipes of our Italian nonne while orchestrating dishes
                  with Michelin-trained precision. Our sourdough ferments for 48 hours for extreme lightness,
                  and our pasta dough is rolled by hand each morning before the theatre lights turn on.
                </p>
              ) : mode === 'it' ? (
                <p>
                  Rispettiamo i segreti tramandati dalle nostre nonne italiane, unendoli alla precisione
                  dell’alta cucina. Il nostro lievito madre matura per 48 ore per garantire massima
                  leggerezza, e la sfoglia fresca viene tirata a mano ogni alba prima che si accendano le luci del cinema.
                </p>
              ) : (
                <>
                  <p className="text-stone-200">
                    Rispettiamo i segreti tramandati dalle nostre nonne italiane, unendoli alla precisione
                    dell’alta cucina contemporanea. Il nostro lievito madre matura per 48 ore per garantire
                    massima leggerezza, e la sfoglia fresca viene tirata a mano ogni alba.
                  </p>
                  <p className="text-xs text-stone-400 italic pl-3 border-l-2 border-stone-700">
                    We respect centuries-old Italian recipes with culinary precision. Our sourdough
                    ferments for 48 hours, and pasta dough is rolled by hand every morning before theatre showtime.
                  </p>
                </>
              )}
            </div>

            {/* 3 Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-stone-900/80 p-3.5 rounded-lg border border-stone-800">
                <div className="w-8 h-8 rounded-full bg-red-950/80 border border-red-700/60 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {mode === 'en' ? (
                      'Neapolitan Certified Technique'
                    ) : mode === 'it' ? (
                      'Tecnica Tradizionale Napoletana'
                    ) : (
                      'Tecnica Tradizionale Napoletana / Neapolitan Technique'
                    )}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {mode === 'en'
                      ? 'Cooked in 90 seconds at 450°C for the authentic leopard-spotted cornicione.'
                      : 'Cottura in 90 secondi a 450°C per il tipico cornicione alveolato e maculato.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-900/80 p-3.5 rounded-lg border border-stone-800">
                <div className="w-8 h-8 rounded-full bg-amber-950/80 border border-amber-700/60 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Wheat className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {mode === 'en' ? (
                      'Single-Origin Italian Semolina'
                    ) : mode === 'it' ? (
                      'Semola 100% Italiana Trafilata al Bronzo'
                    ) : (
                      'Semola di Grano Duro Italiano / Bronze-Die Pasta'
                    )}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {mode === 'en'
                      ? 'Extruded through antique bronze dies to capture rich sauces.'
                      : 'Trafilatura al bronzo per una superficie ruvida e porosa che trattiene ogni sugo.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-900/80 p-3.5 rounded-lg border border-stone-800">
                <div className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {mode === 'en' ? (
                      'Direct-from-Italy D.O.P. Guarantee'
                    ) : mode === 'it' ? (
                      'Certificazione D.O.P. Diretta dall’Italia'
                    ) : (
                      'Garanzia D.O.P. Diretta / Certified Italian Provenance'
                    )}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {mode === 'en'
                      ? 'Zero substitutes. Every cheese, oil, and cure is certified from designated Italian origins.'
                      : 'Nessun compromesso: formaggi, pomodori e salumi provengono direttamente dai consorzi d’origine.'}
                  </p>
                </div>
              </div>
            </div>

            {onOpenReservation && (
              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all text-xs tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>
                    {mode === 'en' ? (
                      'Reserve a Table by the Hearth'
                    ) : mode === 'it' ? (
                      'Prenota un Tavolo Vicino al Forno'
                    ) : (
                      'Prenota un Tavolo Vicino al Forno / Reserve by Hearth'
                    )}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Interactive D.O.P. Ingredients Provenance Strip */}
        <div className="mt-12 bg-stone-900/90 rounded-2xl border border-stone-800/90 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                {mode === 'en' ? 'The Source of Flavor' : 'Le Radici del Gusto'}
              </span>
              <h3 className="font-slab text-xl sm:text-2xl text-white mt-0.5">
                {mode === 'en' ? (
                  'Certified D.O.P. & I.G.P. Italian Provenance'
                ) : mode === 'it' ? (
                  'Provenienza Certificata D.O.P. & I.G.P.'
                ) : (
                  <span>
                    Provenienza Certificata D.O.P.{' '}
                    <span className="text-sm font-sans font-normal text-stone-400">/ Certified Italian Origin</span>
                  </span>
                )}
              </h3>
            </div>
            <p className="text-xs text-stone-400 max-w-sm">
              {mode === 'en'
                ? 'Click an ingredient to explore our direct family-farm partnerships across the Italian regions.'
                : 'Clicca su un ingrediente per scoprire la provenienza e le nostre cascine agricole partner in Italia.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
            {ingredients.map((item) => {
              const isSelected = activeIngredient.id === item.id;
              const displayName = mode === 'en' ? item.name : item.nameIt;
              const displayTag = mode === 'en' ? item.tag : item.tagIt;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIngredient(item)}
                  className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-stone-800 border-amber-500/80 shadow-lg shadow-amber-500/10'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700 text-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono uppercase ${isSelected ? 'text-amber-400 font-bold' : 'text-stone-500'}`}>
                      {displayTag}
                    </span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                  </div>
                  <p className={`text-sm font-semibold mt-1 truncate ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                    {displayName}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">{item.region}</p>
                </button>
              );
            })}
          </div>

          {/* Active Ingredient Spotlight Banner */}
          <div className="bg-stone-950 rounded-xl overflow-hidden border border-stone-800 flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6">
            <div className="w-full sm:w-48 h-36 rounded-lg overflow-hidden shrink-0 border border-stone-800">
              <img
                src={activeIngredient.image}
                alt={activeIngredient.nameIt}
                className="w-full h-full object-cover"
                decoding="async"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-800/60 font-mono">
                  {activeIngredient.region}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/60 font-mono">
                  {mode === 'en' ? activeIngredient.tag : activeIngredient.tagIt}
                </span>
              </div>
              <h4 className="font-slab text-lg sm:text-xl text-white">
                {mode === 'en' ? (
                  activeIngredient.name
                ) : mode === 'it' ? (
                  activeIngredient.nameIt
                ) : (
                  <span>
                    {activeIngredient.nameIt}{' '}
                    <span className="text-xs text-stone-400 font-sans font-normal">({activeIngredient.name})</span>
                  </span>
                )}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                {mode === 'en' ? (
                  activeIngredient.description
                ) : mode === 'it' ? (
                  activeIngredient.descriptionIt
                ) : (
                  <>
                    <span className="text-stone-200 block font-normal">{activeIngredient.descriptionIt}</span>
                    <span className="text-stone-400 italic block mt-1 text-xs">{activeIngredient.description}</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
