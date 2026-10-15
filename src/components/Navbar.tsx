import React, { useState } from 'react';
import { Clock, Phone, Menu, X, Facebook, Twitter, Instagram, MessageCircle, Globe } from 'lucide-react';
import { TornEdge } from './TornEdge.tsx';
import { BrandLogo } from './BrandLogo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenDelivery: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenDelivery,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, setMode } = useLanguage();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-40 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-white border-b border-stone-200/80 text-stone-700 py-1.5 px-4 md:px-8 text-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Language Mode Selector (Italian First / Solo IT / EN) */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-stone-500 flex items-center gap-1 hidden sm:inline-flex">
              <Globe className="w-3.5 h-3.5 text-amber-600" />
              <span>Lingua:</span>
            </span>
            <div className="flex items-center bg-stone-100 rounded-full p-0.5 border border-stone-200 text-[11px] font-medium shadow-inner">
              <button
                onClick={() => setMode('it-first')}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                  mode === 'it-first'
                    ? 'bg-red-600 text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Italiano prima, con testo inglese / Italian first, English text"
              >
                <span>🇮🇹 IT</span>
                <span className="text-[9px] opacity-75">+</span>
                <span>🇬🇧 EN</span>
              </button>
              <button
                onClick={() => setMode('it')}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  mode === 'it'
                    ? 'bg-red-600 text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Solo Italiano"
              >
                🇮🇹 IT
              </button>
              <button
                onClick={() => setMode('en')}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  mode === 'en'
                    ? 'bg-red-600 text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="English only"
              >
                🇬🇧 EN
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            {/* Order Food 24/7 in Italian First */}
            <button
              onClick={onOpenDelivery}
              className="flex items-center gap-1.5 text-amber-600 hover:text-amber-700 transition-colors font-medium cursor-pointer"
              title="Ordina Online 24/7 · Order Delivery 24/7"
            >
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[12px] sm:text-[13px] tracking-wide font-medium">
                {mode === 'en' ? (
                  'Order Food 24/7'
                ) : mode === 'it' ? (
                  'Ordina Online 24/7'
                ) : (
                  <span>
                    <strong className="font-semibold text-amber-700">Ordina Online 24/7</strong>{' '}
                    <span className="opacity-75 font-normal hidden sm:inline">· Order Food</span>
                  </span>
                )}
              </span>
            </button>

          {/* Phone */}
          <a
            href="tel:027-463-5236"
            className="flex items-center gap-1.5 text-stone-700 hover:text-red-600 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[13px] tracking-wide font-sans">027-463-5236</span>
          </a>

          {/* Social Icons (Golden circular buttons) */}
          <div className="flex items-center gap-2">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-5 h-5 rounded-full border border-amber-500/80 text-amber-600 hover:bg-amber-500 hover:text-white flex items-center justify-center text-[10px] transition-all font-serif font-bold"
            >
              f
            </a>
            <a
              href="#google"
              aria-label="Google Plus"
              className="w-5 h-5 rounded-full border border-amber-500/80 text-amber-600 hover:bg-amber-500 hover:text-white flex items-center justify-center text-[9px] transition-all font-bold"
            >
              g+
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="w-5 h-5 rounded-full border border-amber-500/80 text-amber-600 hover:bg-amber-500 hover:text-white flex items-center justify-center text-[10px] transition-all"
            >
              <Twitter className="w-2.5 h-2.5" />
            </a>
            <a
              href="#whatsapp"
              aria-label="WhatsApp"
              className="w-5 h-5 rounded-full border border-amber-500/80 text-amber-600 hover:bg-amber-500 hover:text-white flex items-center justify-center text-[10px] transition-all"
            >
              <MessageCircle className="w-2.5 h-2.5" />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-5 h-5 rounded-full border border-amber-500/80 text-amber-600 hover:bg-amber-500 hover:text-white flex items-center justify-center text-[10px] transition-all"
            >
              <Instagram className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center group py-1"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Home"
        >
          {/* User's Uploaded Logo */}
          <div className="transition-transform group-hover:scale-105 duration-200">
            <BrandLogo height={48} className="h-10 sm:h-12 w-auto" />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[12px] xl:text-[13px] font-bold tracking-wider uppercase text-stone-800">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-red-600 hover:text-red-700 font-extrabold cursor-pointer transition-colors flex flex-col items-center leading-tight py-1"
          >
            {mode === 'en' ? (
              'HOME'
            ) : mode === 'it' ? (
              'INIZIO'
            ) : (
              <>
                <span className="font-extrabold text-red-600">INIZIO</span>
                <span className="text-[9px] lowercase font-normal text-stone-400 tracking-normal">home</span>
              </>
            )}
          </button>

          <button
            onClick={() => scrollToSection('about-us')}
            className="hover:text-red-600 cursor-pointer transition-colors flex flex-col items-center leading-tight py-1"
          >
            {mode === 'en' ? (
              'ABOUT'
            ) : mode === 'it' ? (
              'CHI SIAMO'
            ) : (
              <>
                <span>CHI SIAMO</span>
                <span className="text-[9px] lowercase font-normal text-stone-400 tracking-normal">about</span>
              </>
            )}
          </button>

          <button
            onClick={() => scrollToSection('chef-philosophy')}
            className="hover:text-red-600 cursor-pointer transition-colors flex flex-col items-center leading-tight py-1"
          >
            {mode === 'en' ? (
              'CHEF & CRAFT'
            ) : mode === 'it' ? (
              'IL MAESTRO'
            ) : (
              <>
                <span>IL MAESTRO</span>
                <span className="text-[9px] lowercase font-normal text-stone-400 tracking-normal">chef</span>
              </>
            )}
          </button>

          <button
            onClick={() => scrollToSection('culinary-mosaic')}
            className="hover:text-red-600 cursor-pointer transition-colors flex flex-col items-center leading-tight py-1"
          >
            {mode === 'en' ? (
              'DISHES'
            ) : mode === 'it' ? (
              'SPECIALITÀ'
            ) : (
              <>
                <span>SPECIALITÀ</span>
                <span className="text-[9px] lowercase font-normal text-stone-400 tracking-normal">dishes</span>
              </>
            )}
          </button>

          <button
            onClick={() => scrollToSection('our-menu')}
            className="hover:text-red-600 cursor-pointer transition-colors flex flex-col items-center leading-tight py-1"
          >
            {mode === 'en' ? (
              'MENU'
            ) : mode === 'it' ? (
              'IL MENU'
            ) : (
              <>
                <span>IL MENU</span>
                <span className="text-[9px] lowercase font-normal text-stone-400 tracking-normal">menu</span>
              </>
            )}
          </button>

          <button
            onClick={() => scrollToSection('our-gallery')}
            className="hover:text-red-600 cursor-pointer transition-colors flex flex-col items-center leading-tight py-1"
          >
            {mode === 'en' ? (
              'GALLERY'
            ) : mode === 'it' ? (
              'GALLERIA'
            ) : (
              <>
                <span>GALLERIA</span>
                <span className="text-[9px] lowercase font-normal text-stone-400 tracking-normal">gallery</span>
              </>
            )}
          </button>

          <button
            onClick={() => scrollToSection('cantina-bar')}
            className="hover:text-red-600 cursor-pointer transition-colors flex flex-col items-center leading-tight py-1"
          >
            {mode === 'en' ? (
              'CANTINA'
            ) : mode === 'it' ? (
              'CANTINA & BAR'
            ) : (
              <>
                <span>CANTINA</span>
                <span className="text-[9px] lowercase font-normal text-stone-400 tracking-normal">wine bar</span>
              </>
            )}
          </button>

          <button
            onClick={() => scrollToSection('private-events')}
            className="hover:text-red-600 cursor-pointer transition-colors flex flex-col items-center leading-tight py-1"
          >
            {mode === 'en' ? (
              'EVENTS'
            ) : mode === 'it' ? (
              'EVENTI'
            ) : (
              <>
                <span>EVENTI</span>
                <span className="text-[9px] lowercase font-normal text-stone-400 tracking-normal">events</span>
              </>
            )}
          </button>

          {/* CONTACT US Red Button */}
          <button
            onClick={onOpenContact}
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold px-3.5 py-1.5 rounded-md shadow hover:shadow-md transition-all text-xs tracking-wider uppercase cursor-pointer shrink-0 flex flex-col items-center leading-tight"
          >
            {mode === 'en' ? (
              'CONTACT US'
            ) : mode === 'it' ? (
              'CONTATTACI'
            ) : (
              <>
                <span>CONTATTACI</span>
                <span className="text-[9px] opacity-80 font-normal lowercase tracking-normal">contact us</span>
              </>
            )}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenReservation}
            className="bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded uppercase"
          >
            {mode === 'en' ? 'Reserve' : mode === 'it' ? 'Prenota' : 'Prenota / Reserve'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-800 hover:text-red-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-t border-stone-200 px-6 py-4 flex flex-col gap-2.5 font-bold text-sm tracking-wide">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 mb-1 border-b border-stone-200">
            <span className="text-xs text-stone-500 font-medium">Lingua / Language:</span>
            <div className="flex items-center bg-white rounded-full p-0.5 border border-stone-300 text-xs">
              <button
                onClick={() => setMode('it-first')}
                className={`px-2 py-1 rounded-full ${
                  mode === 'it-first' ? 'bg-red-600 text-white font-bold' : 'text-stone-700'
                }`}
              >
                🇮🇹 IT + 🇬🇧 EN
              </button>
              <button
                onClick={() => setMode('it')}
                className={`px-2 py-1 rounded-full ${
                  mode === 'it' ? 'bg-red-600 text-white font-bold' : 'text-stone-700'
                }`}
              >
                🇮🇹 IT
              </button>
              <button
                onClick={() => setMode('en')}
                className={`px-2 py-1 rounded-full ${
                  mode === 'en' ? 'bg-red-600 text-white font-bold' : 'text-stone-700'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="text-left text-red-600 py-1 flex items-baseline justify-between"
          >
            <span>INIZIO</span>
            <span className="text-xs text-stone-400 font-normal">Home</span>
          </button>
          <button
            onClick={() => scrollToSection('about-us')}
            className="text-left text-stone-700 hover:text-red-600 py-1 flex items-baseline justify-between"
          >
            <span>CHI SIAMO</span>
            <span className="text-xs text-stone-400 font-normal">About Us</span>
          </button>
          <button
            onClick={() => scrollToSection('chef-philosophy')}
            className="text-left text-stone-700 hover:text-red-600 py-1 flex items-baseline justify-between"
          >
            <span>IL MAESTRO & CRAFT</span>
            <span className="text-xs text-stone-400 font-normal">Chef & Hearth</span>
          </button>
          <button
            onClick={() => scrollToSection('culinary-mosaic')}
            className="text-left text-stone-700 hover:text-red-600 py-1 flex items-baseline justify-between"
          >
            <span>SPECIALITÀ CULINARIE</span>
            <span className="text-xs text-stone-400 font-normal">Signature Dishes</span>
          </button>
          <button
            onClick={() => scrollToSection('our-menu')}
            className="text-left text-stone-700 hover:text-red-600 py-1 flex items-baseline justify-between"
          >
            <span>IL NOSTRO MENU</span>
            <span className="text-xs text-stone-400 font-normal">Our Menu</span>
          </button>
          <button
            onClick={() => scrollToSection('our-gallery')}
            className="text-left text-stone-700 hover:text-red-600 py-1 flex items-baseline justify-between"
          >
            <span>LA NOSTRA GALLERIA</span>
            <span className="text-xs text-stone-400 font-normal">Cinema Gallery</span>
          </button>
          <button
            onClick={() => scrollToSection('cantina-bar')}
            className="text-left text-stone-700 hover:text-red-600 py-1 flex items-baseline justify-between"
          >
            <span>CANTINA & COCKTAIL BAR</span>
            <span className="text-xs text-stone-400 font-normal">Wine Cellar</span>
          </button>
          <button
            onClick={() => scrollToSection('private-events')}
            className="text-left text-stone-700 hover:text-red-600 py-1 flex items-baseline justify-between"
          >
            <span>EVENTI PRIVATI & CINEMA</span>
            <span className="text-xs text-stone-400 font-normal">Private Screenings</span>
          </button>
          <button
            onClick={() => {
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            className="bg-red-600 text-white py-2.5 rounded text-center font-bold tracking-wider uppercase mt-2 shadow-md flex items-center justify-center gap-1.5"
          >
            <span>CONTATTACI</span>
            <span className="opacity-80 font-normal text-xs lowercase">(contact us)</span>
          </button>
        </div>
      )}

      {/* Signature Torn Paper Bottom Edge */}
      <TornEdge color="#ffffff" position="bottom" className="absolute -bottom-3 left-0 right-0 z-30" />
    </header>
  );
};
