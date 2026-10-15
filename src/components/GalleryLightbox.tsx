import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from './GallerySection.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface GalleryLightboxProps {
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const { mode } = useLanguage();

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen) return null;

  const current = galleryItems[currentIndex];

  const title = mode === 'en' ? current.title : current.titleIt;
  const subtitle = mode === 'en' ? current.subtitle : current.subtitleIt;
  const projectorNote = mode === 'en' ? current.projectorNote : current.projectorNoteIt;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        <div className="relative rounded-lg overflow-hidden max-h-[75vh] w-full flex items-center justify-center bg-black">
          <img
            src={current.image}
            alt={title}
            className="max-h-[75vh] w-auto max-w-full object-contain select-none"
            decoding="async"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />

          {/* Nav arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7 stroke-[3]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7 stroke-[3]" />
          </button>
        </div>

        {/* Caption */}
        <div className="text-center mt-4 max-w-2xl px-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[11px] font-mono uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
              {currentIndex + 1} / {galleryItems.length}
            </span>
          </div>
          <h4 className="font-slab text-xl text-amber-200 tracking-wide uppercase">
            {title}
          </h4>
          {mode === 'it-first' && (
            <p className="text-stone-400 text-xs font-sans italic">{current.title}</p>
          )}
          <p className="text-stone-300 text-xs sm:text-sm mt-1">{subtitle}</p>
          <p className="text-amber-400/80 text-xs font-mono mt-1">📽️ {projectorNote}</p>
        </div>
      </div>
    </div>
  );
};
