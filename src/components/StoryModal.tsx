import React, { useEffect } from 'react';
import { X, Film, Award, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onOpenReservation }) => {
  const { mode } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#1a1918] border border-stone-700 text-stone-200 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-stone-900 border-b border-stone-800 p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-red-500" />
            <div>
              <h3 className="font-slab text-xl text-white tracking-wide uppercase">
                {mode === 'en' ? 'Our Historic Theatre Story' : 'La Nostra Storia nel Cinema d’Epoca'}
              </h3>
              {mode === 'it-first' && (
                <span className="text-[11px] text-stone-400 font-sans tracking-normal uppercase block">
                  Our Historic Cinema Restaurant Story
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
          <div className="relative rounded-lg overflow-hidden h-44 sm:h-52 mb-4 border border-stone-700">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Historic Cinema Restaurant Interior"
              className="w-full h-full object-cover"
              decoding="async"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-amber-300 font-slab text-sm">
                {mode === 'en'
                  ? 'Est. 1954 in the Historic Rialto Picture Palace'
                  : 'Fondata nel 1954 nell’Antico Cinema Teatro Rialto'}
              </span>
            </div>
          </div>

          {mode === 'en' ? (
            <>
              <p>
                Our restaurant was born from a deep love for two Italian treasures: cinematographic
                storytelling and heartfelt rustic gastronomy. In the late 1950s, this venue was a
                beloved neighborhood single-screen theatre where patrons gathered to watch the golden
                age of cinema—from Fellini to Rossellini.
              </p>
              <p>
                When the theatre closed its doors decades later, our founding chefs and film enthusiasts
                saw an opportunity to preserve its majestic spirit. Rather than gutting the historic
                interior, we preserved the authentic projection booth, restored the original velvet
                theatre curtains, polished the vintage brick walls, and turned the auditorium into an
                unforgettable dining sanctuary.
              </p>
            </>
          ) : mode === 'it' ? (
            <>
              <p>
                Il nostro ristorante nasce dall'amore profondo per due grandi eccellenze italiane: la
                magia narrativa della cinematografia d’autore e il calore della cucina autentica. Alla fine
                degli anni '50, questa sala accoglieva il pubblico di quartiere per le prime visioni dei capolavori
                di Fellini, De Sica e Rossellini.
              </p>
              <p>
                Quando la sala proiezioni chiuse i battenti, i nostri chef fondatori hanno scelto di custodire
                questa memoria preziosa. Abbiamo restaurato la cabina del proiezionista, recuperato i tendaggi
                in velluto granata e valorizzato i mattoni a vista, trasformando la platea in un tempio del gusto.
              </p>
            </>
          ) : (
            <>
              <div>
                <p className="text-white font-medium">
                  Il nostro ristorante nasce dall'amore profondo per la cinematografia d’autore e la vera cucina italiana.
                  Negli anni '50 questo spazio accoglieva le proiezioni dei maestri Fellini e Rossellini.
                </p>
                <p className="text-stone-400 text-xs mt-1">
                  Our restaurant was born from a deep love for cinematographic storytelling and authentic rustic gastronomy.
                </p>
              </div>
              <div className="pt-2">
                <p className="text-white font-medium">
                  Abbiamo restaurato la cabina del proiezionista e i tendaggi in velluto, trasformando la platea in una
                  straordinaria oasi di gusto e cultura.
                </p>
                <p className="text-stone-400 text-xs mt-1">
                  We preserved the authentic projection booth and velvet curtains, turning the auditorium into an unforgettable dining sanctuary.
                </p>
              </div>
            </>
          )}

          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="bg-stone-900 border border-stone-800 p-3 rounded flex items-center gap-3">
              <Award className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <p className="font-bold text-xs text-white">
                  {mode === 'en' ? 'Daily Screenings' : 'Proiezioni Quotidiane'}
                </p>
                <p className="text-[11px] text-stone-400">
                  {mode === 'en' ? 'Classics with every dinner service' : 'Grandi classici a ogni cena'}
                </p>
              </div>
            </div>
            <div className="bg-stone-900 border border-stone-800 p-3 rounded flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500 shrink-0" />
              <div>
                <p className="font-bold text-xs text-white">
                  {mode === 'en' ? '100% Italian Sourced' : '100% Filiera Italiana'}
                </p>
                <p className="text-[11px] text-stone-400">
                  {mode === 'en' ? 'Direct from Emilia & Campania' : 'Dalla Campania e dall’Emilia'}
                </p>
              </div>
            </div>
          </div>

          <p className="italic text-amber-200/90 text-xs">
            {mode === 'en'
              ? 'Today, guests can recline in comfortable velvet booths, sip vintage Chianti, and savor freshly wood-fired Neapolitan pizzas and handmade pastas while classic Italian motion pictures flicker on the original auditorium wall.'
              : 'Oggi i nostri ospiti possono accomodarsi nei divanetti in velluto, degustare grandi riserve di Chianti e assaporare pizza a legna e pasta fresca mentre le pellicole d’autore scorrono sullo schermo originario.'}
          </p>
        </div>

        {/* Footer actions */}
        <div className="bg-stone-900 border-t border-stone-800 p-4 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-stone-400 hover:text-white cursor-pointer"
          >
            {mode === 'en' ? 'Close' : 'Chiudi'}
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenReservation();
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-slab text-xs uppercase tracking-wider px-5 py-2 rounded font-bold cursor-pointer transition-colors shadow-md hover:shadow-red-900/50"
          >
            {mode === 'en' ? 'BOOK A TABLE' : mode === 'it' ? 'PRENOTA UN TAVOLO' : 'PRENOTA / BOOK A TABLE'}
          </button>
        </div>
      </div>
    </div>
  );
};
