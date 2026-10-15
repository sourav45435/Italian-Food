import React from 'react';
import { Language } from '../types/catalog.ts';
import { X, Download, BookOpen, ExternalLink, Printer } from 'lucide-react';

interface PrintCatalogModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const PrintCatalogModal: React.FC<PrintCatalogModalProps> = ({
  isOpen,
  language,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    alert(
      language === 'it'
        ? 'Download in corso: Catalogo_Terre_dItalia_2026_HighRes.pdf'
        : 'Downloading: Terre_dItalia_Catalog_2026_HighRes.pdf'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FBF9F5] border border-[#E0D9CB] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-[#E8E2D5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#9E4733]" />
            <h3 className="font-serif text-lg text-[#2C3E2D]">
              {language === 'it' ? 'Catalogo Stampato Ufficiale — Edizione 2026' : 'Official Print Catalog — 2026 Edition'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 p-1 rounded-full hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Flipbook Preview */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#4A4A4A]">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#9E4733] font-semibold">
              {language === 'it' ? 'Versione Tipografica per Distributori & Buyer' : 'Print Edition for Distributors & Buyers'}
            </p>
            <h4 className="font-serif text-xl sm:text-2xl text-[#2C3E2D]">
              Terre d'Italia: Selezione Enogastronomica d’Eccellenza
            </h4>
            <p className="text-xs text-stone-600">
              {language === 'it'
                ? 'Sfoglia le schede tecniche dei lotti, i disciplinari di produzione DOP/IGP e le tabelle di conservazione per l’esportazione.'
                : 'Browse batch technical sheets, official PDO/PGI production specifications, and international export guidelines.'}
            </p>
          </div>

          {/* Interactive Catalog Cover & Spreads Mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#E0D9CB] shadow-xs space-y-3">
              <div className="aspect-[3/4] bg-[#F4EFEA] rounded-lg overflow-hidden border border-stone-200 relative group flex items-center justify-center p-6 text-center">
                <img
                  src="/src/assets/images/pasta_gragnano_studio_1792039491626.jpg"
                  alt="Copertina Catalogo"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E4733]">Collezione 2026</span>
                  <h5 className="font-serif text-xl text-[#2C3E2D] font-normal">
                    TERRE D'ITALIA
                  </h5>
                  <div className="w-8 h-0.5 bg-[#9E4733] mx-auto" />
                  <p className="text-[11px] text-stone-600 italic">Catalogo Generale dei Prodotti di Origine Protetta</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span>Formato: A4 Verticale (148 pp.)</span>
                <span>Carta: Fedrigoni Materica</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E0D9CB] shadow-xs flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <h5 className="font-serif text-base text-[#2C3E2D] font-bold">
                  {language === 'it' ? 'Indice dei Capitoli' : 'Catalog Chapters'}
                </h5>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex justify-between border-b border-stone-100 pb-1">
                    <span>01. Pasta Secca & Lenta Essiccazione (Gragnano)</span>
                    <span className="font-mono text-stone-400">pp. 12-38</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-1">
                    <span>02. Oli Extra Vergini Monocultivar & DOP</span>
                    <span className="font-mono text-stone-400">pp. 40-66</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-1">
                    <span>03. Aceti Balsamici Tradizionali (Modena)</span>
                    <span className="font-mono text-stone-400">pp. 68-88</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-1">
                    <span>04. Sughi, Pesti Freschi & Conserve</span>
                    <span className="font-mono text-stone-400">pp. 90-120</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-1">
                    <span>05. Dolci Tipici & Pasticceria d’Autore</span>
                    <span className="font-mono text-stone-400">pp. 122-146</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-2">
                <button
                  onClick={handleDownload}
                  className="w-full py-2.5 bg-[#9E4733] hover:bg-[#863B2B] text-white font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>{language === 'it' ? 'Scarica PDF ad Alta Risoluzione (18 MB)' : 'Download High-Res PDF (18 MB)'}</span>
                </button>
                <p className="text-[10px] text-stone-400 text-center">
                  Aggiornato a Ottobre 2026 · Certificato ISO / HACCP allegato
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
