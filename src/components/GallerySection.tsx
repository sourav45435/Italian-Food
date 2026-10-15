import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const galleryItems = [
  {
    id: 1,
    title: 'The Grand Cinema Auditorium',
    titleIt: 'La Grande Sala del Cinema d’Epoca',
    subtitle: 'Dining under 1950s 35mm classic cinema projections',
    subtitleIt: 'Cene indimenticabili sotto le proiezioni su pellicola 35mm',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    projectorNote: 'Now Showing: Classic Italian Golden Age Masterpieces (1950s–1970s)',
    projectorNoteIt: 'In Proiezione: Capolavori del Cinema Italiano d’Autore',
  },
  {
    id: 2,
    title: 'The Projectionist Booth Lounge',
    titleIt: 'Il Salotto del Proiezionista',
    subtitle: 'Cozy velvet booths with vintage film reels and cocktail service',
    subtitleIt: 'Divanetti in velluto rosso, bobine d’epoca e servizio cocktail d’autore',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
    projectorNote: 'Atmospheric warm amber lighting & handcrafted Italian wines',
    projectorNoteIt: 'Luce calda soffusa e selezione di vini pregiati italiani',
  },
  {
    id: 3,
    title: 'Cellar & Mezzanine Seating',
    titleIt: 'Tavoli Panoramici della Galleria Mezzanino',
    subtitle: 'Exclusive balcony tables with full panoramic theater views',
    subtitleIt: 'Tavoli esclusivi con vista panoramica sul grande schermo',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1400&q=85',
    projectorNote: 'Classic woodcraft and historic cinema memorabilia',
    projectorNoteIt: 'Legno d’epoca e locandine originali del cinema italiano',
  },
  {
    id: 4,
    title: 'Chef Table & Wood-Fired Hearth',
    titleIt: 'Il Tavolo dello Chef & Forno a Legna',
    subtitle: 'Artisan Neapolitan pizzas and handmade pasta prepared live',
    subtitleIt: 'Pizze veraci e pasta fresca tirata a mano a vista',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85',
    projectorNote: 'Fresh ingredients imported directly from Naples and Sicily',
    projectorNoteIt: 'Materie prime D.O.P. in arrivo fresco da Campania e Sicilia',
  },
  {
    id: 5,
    title: 'The Historic Vaulted Wine Cellar',
    titleIt: 'La Cantina Storica a Volte',
    subtitle: 'Hand-carved limestone arches cellaring over 200 Italian vintages',
    subtitleIt: 'Archi in tufo e pietra che custodiscono oltre 200 riserve italiane',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=85',
    projectorNote: 'Private sommelier tastings & rare vertical reserves',
    projectorNoteIt: 'Degustazioni guidate dal sommelier e annate storiche',
  },
  {
    id: 6,
    title: 'The Alfresco Courtyard Terrace',
    titleIt: 'La Terrazza Giardino con Ulivi',
    subtitle: 'Festoon fairy lights and olive trees for romantic summer evenings',
    subtitleIt: 'Luci soffuse, ulivi secolari e brezze romantiche sotto le stelle',
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1400&q=85',
    projectorNote: 'Open-air cinema dining under starlit skies',
    projectorNoteIt: 'Cinema all’aperto e cena sotto il cielo stellato',
  },
  {
    id: 7,
    title: 'Live Pasta Laboratorio',
    titleIt: 'Il Laboratorio della Pasta Fresca',
    subtitle: 'Master sfogline rolling fresh egg pasta from sunrise to dinner service',
    subtitleIt: 'Maestre sfogline all’opera tra farina, uova fresche e mattarello',
    image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1400&q=85',
    projectorNote: 'Bronze-die extruded artisanal tagliolini & ravioli',
    projectorNoteIt: 'Trafilatura al bronzo e ravioli ripieni fatti a mano',
  },
  {
    id: 8,
    title: 'The Cinema Cocktail & Amaro Bar',
    titleIt: 'Il Cinema Cocktail & Amaro Bar',
    subtitle: 'Antique crystal decanters, rare Italian vermouths, and signature Negronis',
    subtitleIt: 'Cristalli d’epoca, vermouth piemontesi e Negroni invecchiati in botte',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1400&q=85',
    projectorNote: 'Live vintage jazz soundtrack on Friday & Saturday nights',
    projectorNoteIt: 'Musica jazz dal vivo ogni venerdì e sabato sera',
  },
];

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mode } = useLanguage();

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = galleryItems[currentIndex];
  const slideTitle = mode === 'en' ? currentItem.title : currentItem.titleIt;
  const slideSubtitle = mode === 'en' ? currentItem.subtitle : currentItem.subtitleIt;
  const slideProjectorNote = mode === 'en' ? currentItem.projectorNote : currentItem.projectorNoteIt;

  return (
    <section
      id="our-gallery"
      className="py-16 md:py-20 bg-[#f8f6f0] relative"
      style={{
        backgroundImage: `radial-gradient(#e2ddd0 0.75px, transparent 0.75px)`,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading - Italian First */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-slab text-3xl sm:text-4xl text-stone-900 tracking-wider uppercase drop-shadow-sm">
            {mode === 'en' ? 'OUR GALLERY' : 'LA NOSTRA GALLERIA'}
          </h2>
          {mode === 'it-first' && (
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-red-700 font-bold mt-1">
              Atmosphere & 35mm Cinema Heritage
            </p>
          )}
          <div className="w-16 h-1 bg-red-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* Gallery Slider Frame */}
        <div className="relative group max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-2 border-stone-300/80 bg-stone-900">
          {/* Main Slide Image */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
            <img
              src={currentItem.image}
              alt={slideTitle}
              className="w-full h-full object-cover transition-all duration-700 select-none"
              decoding="async"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />

            {/* Subtle vintage projector grain & warm theater glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30 pointer-events-none" />

            {/* Vintage Movie Projection simulated screen badge on top right */}
            <div className="absolute top-4 right-4 bg-stone-950/80 border border-stone-700/80 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] text-amber-300 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>PELLICOLA 35MM · THEATRE REEL</span>
            </div>

            {/* Slide Details Overlay at Bottom - Italian First */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white bg-gradient-to-t from-black via-black/70 to-transparent">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-slab text-xl sm:text-2xl tracking-wide text-amber-200">
                    {slideTitle}
                  </h3>
                  {mode === 'it-first' && (
                    <p className="text-[11px] text-amber-300/80 font-mono italic">
                      {currentItem.title}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-md">
                    {slideSubtitle}
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5 italic">
                    {slideProjectorNote}
                  </p>
                </div>

                <button
                  onClick={() => onOpenLightbox(currentIndex)}
                  className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-xs transition-all hover:scale-110 cursor-pointer border border-stone-600 shrink-0 ml-4"
                  title={mode === 'en' ? 'Full Screen View' : 'Schermo Intero / Full Screen'}
                >
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-2.5 rounded-full backdrop-blur-xs transition-all hover:scale-110 cursor-pointer border border-stone-600/60"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-amber-300" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-2.5 rounded-full backdrop-blur-xs transition-all hover:scale-110 cursor-pointer border border-stone-600/60"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-amber-300" />
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="bg-stone-950 py-3 px-4 flex items-center justify-between border-t border-stone-800">
            <span className="text-[11px] text-stone-400 font-mono">
              {mode === 'en' ? 'Scene' : 'Scena'} {currentIndex + 1} / {galleryItems.length}
            </span>
            <div className="flex gap-1.5">
              {galleryItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'bg-red-600 w-6'
                      : 'bg-stone-700 hover:bg-stone-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => onOpenLightbox(currentIndex)}
              className="text-[11px] text-amber-400 hover:text-amber-300 font-mono cursor-pointer flex items-center gap-1"
            >
              <Maximize2 className="w-3 h-3" />
              <span>{mode === 'en' ? 'View HD' : 'Ingrandisci'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
