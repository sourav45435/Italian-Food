import React, { useState, useEffect } from 'react';
import { Sparkles, Utensils, ShoppingBag, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export interface CulinaryDish {
  id: string;
  name: string;
  nameIt: string;
  category: 'all' | 'pasta' | 'pizza' | 'secondi' | 'dolci';
  price: string;
  image: string;
  description: string;
  descriptionIt: string;
  highlight: string;
  highlightIt: string;
}

const dishes: CulinaryDish[] = [
  {
    id: 'truffle-pasta',
    name: 'Handmade Tagliolini with Fresh Black Truffles',
    nameIt: 'Tagliolini al Tartufo Nero Pregiato',
    category: 'pasta',
    price: '$28.00',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85',
    description: 'Fresh egg pasta tossed in cultured Alpine butter, 24-month Parmigiano-Reggiano, and generously shaved fresh black winter truffles.',
    descriptionIt: 'Pasta all’uovo fresca trafilata al bronzo, mantecata con burro d’alpeggio, Parmigiano-Reggiano 24 mesi e scaglie generose di tartufo nero.',
    highlight: 'Chef Signature',
    highlightIt: 'Piatto d’Autore',
  },
  {
    id: 'pizza-regina',
    name: 'Regina Margherita Pizza D.O.P.',
    nameIt: 'Pizza Regina Margherita Napoletana',
    category: 'pizza',
    price: '$18.00',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85',
    description: 'Crushed San Marzano tomatoes, buffalo mozzarella from Caserta, fresh sweet basil, and organic extra virgin olive oil baked at 450°C.',
    descriptionIt: 'Pomodoro San Marzano dell’Agro Sarnese schiacciato a mano, mozzarella di bufala campana D.O.P., basilico fresco e olio extravergine d’oliva a 450°C.',
    highlight: 'Classic D.O.P.',
    highlightIt: 'Classica D.O.P.',
  },
  {
    id: 'fritto-misto',
    name: 'Crispy Calamari & Tiger Prawns',
    nameIt: 'Fritto Misto di Calamari e Gamberi',
    category: 'secondi',
    price: '$19.50',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=85',
    description: 'Flash-fried semolina-dusted calamari and wild prawns, served with charred Amalfi lemon wedges and fresh garlic-caper aioli.',
    descriptionIt: 'Calamaretti e gamberi dorati in crosta di semola croccante, serviti con spicchi di limone d’Amalfi grigliato e maionese ai capperi e aglio dolce.',
    highlight: 'Crispy Seafood',
    highlightIt: 'Frittura Dorata',
  },
  {
    id: 'tagliere-salumi',
    name: 'Artisan Charcuterie & Burrata Board',
    nameIt: 'Gran Tagliere di Salumi e Burrata Pugliese',
    category: 'secondi',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=85',
    description: 'Prosciutto di San Daniele 24M, Salame Finocchiona, Mortadella di Bologna, whole fresh pugliese burrata, and warm focaccia.',
    descriptionIt: 'Prosciutto crudo San Daniele 24 mesi, Finocchiona toscana, Mortadella Bologna I.G.P., burrata pugliese dal cuore morbido e focaccia calda al rosmarino.',
    highlight: 'To Share',
    highlightIt: 'Da Condividere',
  },
  {
    id: 'bistecca-fiorentina',
    name: 'Dry-Aged Bistecca alla Fiorentina',
    nameIt: 'Bistecca alla Fiorentina di Chianina',
    category: 'secondi',
    price: '$38.00',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
    description: 'Thick T-bone steak seared over Tuscan hardwood charcoal, served with fresh rosemary, flaky Maldon sea salt, and extra virgin olive oil.',
    descriptionIt: 'Taglio alto frollato oltre 35 giorni, scottato su brace viva di legna toscana con rosmarino fresco, fiocchi di sale marino e olio a crudo.',
    highlight: 'Charcoal Grilled',
    highlightIt: 'Alla Brace di Legna',
  },
  {
    id: 'cannoli-siciliani',
    name: 'Sicilian Ricotta & Bronte Pistachio Cannoli',
    nameIt: 'Cannoli Siciliani con Pistacchio di Bronte',
    category: 'dolci',
    price: '$9.50',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85',
    description: 'Crisp hand-rolled wine-dough shells piped to order with sweet sheep ricotta, candito orange peel, and crushed green pistachio.',
    descriptionIt: 'Scorza friabile al Marsala farcita al momento con crema di ricotta di pecora, gocce di cioccolato, scorza d’arancia candita e granella di pistacchio di Bronte D.O.P.',
    highlight: 'Piped to Order',
    highlightIt: 'Farcito al Momento',
  },
  {
    id: 'tiramisu',
    name: 'Classic Venetian Espresso Tiramisù',
    nameIt: 'Tiramisù Tradizionale al Mascarpone',
    category: 'dolci',
    price: '$10.00',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85',
    description: 'Light Savoiardi ladyfingers steeped in Illy espresso and Marsala wine, layered with fluffy mascarpone cream and Valrhona cocoa.',
    descriptionIt: 'Savoiardi artigianali inzuppati nel caffè espresso Illy e gocce di Marsala, soffice crema al mascarpone fresco e spolverata di cacao amaro.',
    highlight: 'House Recipe',
    highlightIt: 'Ricetta di Famiglia',
  },
  {
    id: 'vintage-cocktails',
    name: 'Vintage Negroni Riserva & Aperol Spritz',
    nameIt: 'Aperitivi della Casa: Negroni Riserva e Spritz',
    category: 'dolci',
    price: '$14.00',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=85',
    description: 'Antique barrel-aged Gin, Campari, and red vermouth with charred orange peel, or chilled Prosecco Superiore with Italian Aperol.',
    descriptionIt: 'Gin invecchiato in botte, Campari Bitter e Vermouth rosso con scorza d’arancia fiammeggiata, oppure Prosecco Superiore DOCG con Aperol.',
    highlight: 'Cinema Bar Favorite',
    highlightIt: 'Dal Cinema Bar',
  },
];

interface CulinaryMosaicSectionProps {
  onSelectItem?: (dish: CulinaryDish) => void;
  onOpenDelivery?: () => void;
}

export const CulinaryMosaicSection: React.FC<CulinaryMosaicSectionProps> = ({
  onSelectItem,
  onOpenDelivery,
}) => {
  const { mode } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'pasta' | 'pizza' | 'secondi' | 'dolci'>('all');
  const [selectedPreview, setSelectedPreview] = useState<CulinaryDish | null>(null);

  useEffect(() => {
    if (!selectedPreview) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPreview(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPreview]);

  const filteredDishes = filter === 'all'
    ? dishes
    : dishes.filter((dish) => dish.category === filter);

  return (
    <section id="culinary-mosaic" className="py-20 bg-[#f4f1e8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-red-700 text-xs font-semibold uppercase tracking-widest mb-2">
            <Utensils className="w-4 h-4 text-red-600" />
            <span>
              {mode === 'en' ? 'Signature Dishes' : 'I Capolavori del Nostro Chef'}
            </span>
          </div>

          <h2 className="font-slab text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-wide uppercase drop-shadow-sm">
            {mode === 'en' ? 'SIGNATURE CULINARY SHOWCASE' : 'I NOSTRI CAPOLAVORI CULINARI'}
          </h2>

          {mode === 'it-first' && (
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-red-700 font-bold mt-1">
              Signature Culinary Showcase & Regional Specialties
            </p>
          )}

          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            {mode === 'en' ? (
              'Feast your eyes on our kitchen’s daily masterpieces. Each dish is cooked fresh from scratch, celebrating authentic regional Italian traditions and artisanal quality.'
            ) : mode === 'it' ? (
              'Ogni portata è preparata espressa al momento nella nostra cucina a vista, celebrando le ricette storiche regionali italiane con ingredienti freschissimi di stagione.'
            ) : (
              'Ogni portata è preparata espressa al momento nella nostra cucina a vista. Handcrafted fresh daily, celebrating authentic regional Italian traditions.'
            )}
          </p>

          {/* Interactive Category Filter Controls - Italian First */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { key: 'all', it: 'TUTTI I PIATTI', en: 'All' },
              { key: 'pasta', it: 'PASTA FRESCA', en: 'Pastas' },
              { key: 'pizza', it: 'PIZZE AL FORNO', en: 'Pizza' },
              { key: 'secondi', it: 'SECONDI & CARNI', en: 'Mains' },
              { key: 'dolci', it: 'I NOSTRI DOLCI', en: 'Desserts' },
            ].map((tab) => {
              const active = filter === tab.key;
              const label =
                mode === 'en'
                  ? tab.en
                  : mode === 'it'
                  ? tab.it
                  : `${tab.it} / ${tab.en}`;

              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20 scale-105'
                      : 'bg-white text-stone-700 border border-stone-300 hover:border-stone-400 hover:text-stone-900'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8-Dish Interactive Image Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => {
            const primaryTitle = mode === 'en' ? dish.name : dish.nameIt;
            const secondaryTitle = mode === 'it-first' ? dish.name : null;
            const primaryHighlight = mode === 'en' ? dish.highlight : dish.highlightIt;

            return (
              <div
                key={dish.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/80 flex flex-col hover:-translate-y-1"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={dish.image}
                    alt={primaryTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    decoding="async"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Highlight Tag */}
                  <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-sm text-amber-300 px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide border border-stone-700">
                    {primaryHighlight}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 right-3 bg-red-600 text-white font-slab px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {dish.price}
                  </div>

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <button
                      onClick={() => setSelectedPreview(dish)}
                      className="bg-white/90 hover:bg-white text-stone-900 p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
                      title={mode === 'en' ? 'Quick Details' : 'Dettagli / View Details'}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (onSelectItem) onSelectItem(dish);
                        if (onOpenDelivery) onOpenDelivery();
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
                      title={mode === 'en' ? 'Order Dish' : 'Ordina / Order Online'}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Body - Italian First */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Primary Title: Italian First */}
                    <h3 className="font-slab text-base text-stone-900 font-bold group-hover:text-red-700 transition-colors line-clamp-1">
                      {primaryTitle}
                    </h3>

                    {/* Secondary Title: English Text Underneath */}
                    {secondaryTitle && (
                      <p className="text-[11px] font-sans text-stone-500 font-medium italic mt-0.5 line-clamp-1">
                        {secondaryTitle}
                      </p>
                    )}

                    {/* Description: Italian First, English Text */}
                    <div className="mt-2.5 text-xs leading-relaxed space-y-1">
                      {mode === 'en' ? (
                        <p className="text-stone-600 line-clamp-2">{dish.description}</p>
                      ) : mode === 'it' ? (
                        <p className="text-stone-700 line-clamp-2">{dish.descriptionIt}</p>
                      ) : (
                        <>
                          <p className="text-stone-700 font-medium line-clamp-2">{dish.descriptionIt}</p>
                          <p className="text-[11px] text-stone-500 italic line-clamp-1 border-l border-red-600/30 pl-1.5">
                            {dish.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-amber-800">
                      {mode === 'en' ? 'Artisan Recipe' : 'Fatto Espresso'}
                    </span>
                    <button
                      onClick={() => {
                        if (onSelectItem) onSelectItem(dish);
                        if (onOpenDelivery) onOpenDelivery();
                      }}
                      className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>
                        {mode === 'en' ? 'Order Online' : mode === 'it' ? 'Ordina Online' : 'Ordina / Order'}
                      </span>
                      <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Delivery CTA */}
        <div className="mt-14 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-stone-800">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 text-xs font-mono uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dine-In or Hot Doorstep Delivery</span>
            </div>
            <h3 className="font-slab text-xl sm:text-2xl text-white">
              Crave Any of These Italian Delights Tonight?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Freshly boxed in thermal insulated Italian packaging to arrive piping hot.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onOpenDelivery && (
              <button
                onClick={onOpenDelivery}
                className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-bold px-6 py-3 rounded-lg shadow-md transition-all text-xs tracking-wider uppercase cursor-pointer"
              >
                Order Online Now
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Dish Detail Modal */}
      {selectedPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedPreview(null);
          }}
        >
          <div className="bg-stone-900 text-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-800 relative">
            <div className="relative aspect-[16/10] w-full">
              <img
                src={selectedPreview.image}
                alt={mode === 'en' ? selectedPreview.name : selectedPreview.nameIt}
                className="w-full h-full object-cover"
                decoding="async"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedPreview(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/90 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close Preview"
              >
                &times;
              </button>
              <div className="absolute bottom-3 right-3 bg-red-600 text-white font-slab px-3 py-1 rounded-full text-sm font-bold shadow-md">
                {selectedPreview.price}
              </div>
            </div>

            <div className="p-6">
              <span className="text-xs font-mono uppercase text-amber-400">
                {mode === 'en' ? selectedPreview.highlight : selectedPreview.highlightIt}
              </span>
              <h3 className="font-slab text-2xl text-white mt-1">
                {mode === 'en' ? selectedPreview.name : selectedPreview.nameIt}
              </h3>
              {mode === 'it-first' && (
                <p className="text-xs text-stone-400 font-sans italic mt-0.5">
                  {selectedPreview.name}
                </p>
              )}

              <div className="text-stone-300 text-sm mt-3 leading-relaxed">
                {mode === 'en' ? (
                  <p>{selectedPreview.description}</p>
                ) : mode === 'it' ? (
                  <p>{selectedPreview.descriptionIt}</p>
                ) : (
                  <div className="space-y-1">
                    <p className="text-stone-200">{selectedPreview.descriptionIt}</p>
                    <p className="text-stone-400 text-xs italic">{selectedPreview.description}</p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-stone-800">
                <button
                  onClick={() => setSelectedPreview(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-400 hover:text-white cursor-pointer"
                >
                  {mode === 'en' ? 'Close' : 'Chiudi'}
                </button>
                <button
                  onClick={() => {
                    setSelectedPreview(null);
                    if (onSelectItem) onSelectItem(selectedPreview);
                    if (onOpenDelivery) onOpenDelivery();
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {mode === 'en'
                      ? `Order Now ${selectedPreview.price}`
                      : mode === 'it'
                      ? `Ordina Ora ${selectedPreview.price}`
                      : `Ordina Ora · Order ${selectedPreview.price}`}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
