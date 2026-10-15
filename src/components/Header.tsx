import React from 'react';
import { Language } from '../types/catalog.ts';
import { FileText, Settings, Globe, ChevronRight } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isBackOffice: boolean;
  onToggleBackOffice: () => void;
  onOpenPrintCatalog: () => void;
  onOpenWordPressKit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  isBackOffice,
  onToggleBackOffice,
  onOpenPrintCatalog,
  onOpenWordPressKit,
}) => {
  const scrollTo = (id: string) => {
    if (isBackOffice) {
      onToggleBackOffice();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-colors">
      {/* Top 3-Zone Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-baseline gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
        >
          <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-[#2C3E2D] group-hover:text-[#9E4733] transition-colors">
            TERRE D'ITALIA
          </span>
          <span className="hidden sm:inline-block text-[11px] font-sans font-medium tracking-widest uppercase text-[#9E4733]">
            {language === 'it' ? 'ECCELLENZE GASTRONOMICHE' : 'CULINARY EXCELLENCE'}
          </span>
        </a>

        {/* Zone 2: Clean 4–5 Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wider text-[#4A4A4A]">
          <button
            onClick={() => scrollTo('catalogo')}
            className="hover:text-[#9E4733] transition-colors whitespace-nowrap cursor-pointer uppercase font-sans"
          >
            {language === 'it' ? 'Catalogo Prodotti' : 'Product Catalog'}
          </button>
          <button
            onClick={() => scrollTo('regioni')}
            className="hover:text-[#9E4733] transition-colors whitespace-nowrap cursor-pointer uppercase font-sans"
          >
            {language === 'it' ? 'Regioni d’Origine' : 'Regions of Origin'}
          </button>
          <button
            onClick={() => scrollTo('filosofia')}
            className="hover:text-[#9E4733] transition-colors whitespace-nowrap cursor-pointer uppercase font-sans"
          >
            {language === 'it' ? 'Disciplinari & DOP' : 'Certifications'}
          </button>
          <button
            onClick={onOpenWordPressKit}
            className="text-[#9E4733] hover:text-[#7C3525] font-semibold transition-colors whitespace-nowrap cursor-pointer uppercase font-sans flex items-center gap-1.5"
          >
            <span>WordPress Kit</span>
            <span className="text-[10px] bg-[#9E4733]/10 px-1.5 py-0.5 rounded text-[#9E4733]">Lean CPT</span>
          </button>
        </nav>

        {/* Zone 3: Language Switcher & Primary Action */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Bilingual Switcher (Italian first, English next) */}
          <div className="flex items-center bg-[#EFECE4] p-1 rounded-md text-xs font-semibold">
            <button
              onClick={() => onLanguageChange('it')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                language === 'it'
                  ? 'bg-white text-[#2C3E2D] shadow-xs'
                  : 'text-[#6B6B6B] hover:text-[#2C3E2D]'
              }`}
              title="Italiano (Lingua Principale)"
            >
              IT
            </button>
            <span className="text-stone-300 text-[10px] select-none">/</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#2C3E2D] shadow-xs'
                  : 'text-[#6B6B6B] hover:text-[#2C3E2D]'
              }`}
              title="English Translation"
            >
              EN
            </button>
          </div>

          {/* Print Catalog PDF Modal Trigger */}
          <button
            onClick={onOpenPrintCatalog}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2C3E2D] hover:text-[#9E4733] border border-[#DCD5C6] rounded-md hover:border-[#9E4733] transition-colors whitespace-nowrap cursor-pointer"
            title={language === 'it' ? 'Scarica o sfoglia il catalogo cartaceo in PDF' : 'Browse or download print catalog PDF'}
          >
            <FileText className="w-3.5 h-3.5 text-[#9E4733]" />
            <span>{language === 'it' ? 'Catalogo Stampa PDF' : 'Print Catalog PDF'}</span>
          </button>

          {/* Back-Office Toggle (Simulates WordPress Custom Post Type Admin) */}
          <button
            onClick={onToggleBackOffice}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              isBackOffice
                ? 'bg-[#9E4733] text-white hover:bg-[#863B2B]'
                : 'bg-[#2C3E2D] text-white hover:bg-[#202E21]'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isBackOffice
                ? (language === 'it' ? 'Torna al Catalogo' : 'Back to Storefront')
                : (language === 'it' ? 'Gestione WP' : 'WP Admin')}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
