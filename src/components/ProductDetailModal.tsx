import React, { useState } from 'react';
import { Product, Language } from '../types/catalog.ts';
import {
  X,
  MapPin,
  Award,
  Calendar,
  Sparkles,
  Utensils,
  Share2,
  FileCheck,
  Send,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductDetailModalProps {
  product: Product | null;
  language: Language;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  language,
  onClose,
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'details' | 'seo'>('details');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    company: '',
    email: '',
    notes: '',
  });

  if (!product) return null;

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setInquirySent(false);
      setInquiryOpen(false);
      setInquiryData({ name: '', company: '', email: '', notes: '' });
    }, 4000);
  };

  // Structured Data Schema.org (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name[language],
    image: product.images,
    description: product.shortDescription[language],
    countryOfOrigin: {
      '@type': 'Country',
      name: 'Italy',
    },
    brand: {
      '@type': 'Brand',
      name: "Terre d'Italia",
    },
    category: product.category,
    offers: {
      '@type': 'Demand',
      businessFunction: 'http://purl.org/goodrelations/v1#BusinessToBusiness',
      description: 'Catalog inquiries only. No direct consumer checkout.',
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-[#E0D9CB] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#FBF9F5] border-b border-[#E8E2D5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#5A5A5A]">
            <span className="font-serif font-bold text-[#2C3E2D]">TERRE D'ITALIA</span>
            <span aria-hidden="true">/</span>
            <span className="uppercase text-[#9E4733] font-semibold">{product.category}</span>
            <span aria-hidden="true">/</span>
            <span className="truncate max-w-[200px] text-stone-700">{product.name[language]}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* SEO & Meta preview tab toggle */}
            <button
              onClick={() => setActiveTab(activeTab === 'details' ? 'seo' : 'details')}
              className={`px-3 py-1 text-xs rounded-md font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'seo'
                  ? 'bg-[#2C3E2D] text-white'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900'
              }`}
              title="Inspect SEO Meta & Schema.org JSON-LD"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{activeTab === 'seo' ? 'Chiudi SEO' : 'SEO Meta'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/50 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {activeTab === 'seo' ? (
          /* SEO & Meta Fields Tab */
          <div className="p-6 overflow-y-auto space-y-5 bg-[#1C1C1E] text-stone-200 font-mono text-xs">
            <div>
              <p className="text-amber-400 font-bold uppercase tracking-wider mb-1">
                // SEO Canonical URL & OpenGraph Meta
              </p>
              <div className="bg-stone-900 p-3 rounded border border-stone-800 space-y-1 text-stone-300">
                <p><span className="text-stone-500">URL:</span> https://terreditalia.it/catalogo/{product.slug}/</p>
                <p><span className="text-stone-500">Title ({language}):</span> {product.seoTitle[language]}</p>
                <p><span className="text-stone-500">Meta Description:</span> {product.seoDescription[language]}</p>
                <p><span className="text-stone-500">og:region:</span> {product.region}, IT</p>
              </div>
            </div>

            <div>
              <p className="text-amber-400 font-bold uppercase tracking-wider mb-1">
                // Schema.org Structured Data (JSON-LD for Google Rich Results)
              </p>
              <pre className="bg-stone-900 p-4 rounded border border-stone-800 overflow-x-auto text-[11px] text-emerald-400 leading-relaxed">
                {JSON.stringify(structuredData, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          /* Product Details & Gallery View */
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Striking Image Gallery (6 cols) */}
              <div className="md:col-span-6 space-y-3">
                {/* Main Large Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F4EFEA] border border-[#E0D9CB]">
                  <img
                    src={product.images[selectedImageIdx] || product.images[0]}
                    alt={product.name[language]}
                    className="w-full h-full object-cover transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Certification Tag */}
                  <div className="absolute top-3 left-3 bg-[#2C3E2D] text-white text-xs font-mono px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                    {product.certification}
                  </div>
                </div>

                {/* Thumbnails Row if multiple images */}
                {product.images.length > 1 && (
                  <div className="flex items-center gap-2">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIdx(idx)}
                        className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                          selectedImageIdx === idx
                            ? 'border-[#9E4733] ring-1 ring-[#9E4733]'
                            : 'border-stone-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Region Terroir Card with Map Pin */}
                <div className="p-4 bg-[#FBF9F5] border border-[#E8E2D5] rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#9E4733] uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>{language === 'it' ? 'Regione di Origine & Terroir' : 'Region of Origin & Terroir'}</span>
                  </div>
                  <p className="text-sm font-serif text-[#2C3E2D] font-medium">
                    {product.subRegion} — {product.region}, Italia
                  </p>
                  <p className="text-xs text-[#5A5A5A] leading-relaxed">
                    {product.originNote[language]}
                  </p>
                </div>
              </div>

              {/* Right Column: Descriptions, Specs, & B2B Inquiry (6 cols) */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2C3E2D] font-normal leading-tight">
                    {product.name[language]}
                  </h2>
                  <p className="text-xs text-[#7A7A7A] mt-1 font-mono">
                    {product.format} · {product.yearOrHarvest}
                  </p>
                </div>

                {/* Concise Description */}
                <p className="text-sm text-[#4A4A4A] leading-relaxed font-normal">
                  {product.fullDescription[language]}
                </p>

                {/* Organoleptic Tasting Notes */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9E4733] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === 'it' ? 'Note di Degustazione' : 'Tasting & Sensory Profile'}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#4A4A4A]">
                    {product.tastingNotes[language].map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#9E4733] mt-0.5">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chef Pairings */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2C3E2D] flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5" />
                    <span>{language === 'it' ? 'Abbinamenti Consigliati' : 'Culinary Pairings'}</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-xs text-[#4A4A4A]">
                    {product.pairings[language].map((pair, idx) => (
                      <span
                        key={idx}
                        className="bg-[#EFECE4] px-2.5 py-1 rounded text-[11px] text-[#2C3E2D] font-medium"
                      >
                        {pair}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ingredients & Technical Specs */}
                <div className="p-3 bg-[#FBF9F5] border border-[#E8E2D5] rounded-lg text-xs space-y-1.5 text-[#5A5A5A]">
                  <p>
                    <strong className="text-[#2C3E2D]">{language === 'it' ? 'Ingredienti:' : 'Ingredients:'}</strong>{' '}
                    {product.ingredients[language]}
                  </p>
                  <p>
                    <strong className="text-[#2C3E2D]">{language === 'it' ? 'Conservazione:' : 'Shelf Life:'}</strong>{' '}
                    {product.shelfLife}
                  </p>
                </div>

                {/* Product Inquiry Action (strictly NO cart, NO checkout!) */}
                <div className="pt-2">
                  {!inquiryOpen ? (
                    <button
                      onClick={() => setInquiryOpen(true)}
                      className="w-full py-3 px-4 bg-[#2C3E2D] hover:bg-[#1E2D20] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#C5A059]" />
                      <span>
                        {language === 'it'
                          ? 'Richiedi Scheda Tecnica & Campioni'
                          : 'Request Spec Sheet & B2B Samples'}
                      </span>
                    </button>
                  ) : (
                    /* Inline B2B Inquiry Form */
                    <form
                      onSubmit={handleSendInquiry}
                      className="p-4 bg-[#FBF9F5] border border-[#9E4733]/40 rounded-xl space-y-3"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-[#E8E2D5]">
                        <span className="text-xs font-semibold text-[#9E4733] uppercase">
                          {language === 'it' ? 'Modulo Richiesta Informazioni' : 'Inquiry Form'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setInquiryOpen(false)}
                          className="text-stone-400 hover:text-stone-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {inquirySent ? (
                        <div className="py-4 text-center space-y-1">
                          <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
                          <p className="text-xs font-bold text-[#2C3E2D]">
                            {language === 'it' ? 'Richiesta Inviata con Successo!' : 'Inquiry Dispatched!'}
                          </p>
                          <p className="text-[11px] text-stone-500">
                            {language === 'it'
                              ? 'Il nostro responsabile commerciale ti risponderà entro 24 ore.'
                              : 'Our commercial director will reply with technical docs within 24 hours.'}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              required
                              placeholder={language === 'it' ? 'Tuo Nome *' : 'Your Name *'}
                              value={inquiryData.name}
                              onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                              className="w-full bg-white border border-[#DCD5C6] px-2.5 py-1.5 rounded text-xs focus:outline-none focus:border-[#9E4733]"
                            />
                            <input
                              type="text"
                              placeholder={language === 'it' ? 'Azienda / Ristorante' : 'Company / Restaurant'}
                              value={inquiryData.company}
                              onChange={(e) => setInquiryData({ ...inquiryData, company: e.target.value })}
                              className="w-full bg-white border border-[#DCD5C6] px-2.5 py-1.5 rounded text-xs focus:outline-none focus:border-[#9E4733]"
                            />
                          </div>
                          <input
                            type="email"
                            required
                            placeholder={language === 'it' ? 'Email Aziendale *' : 'Corporate Email *'}
                            value={inquiryData.email}
                            onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                            className="w-full bg-white border border-[#DCD5C6] px-2.5 py-1.5 rounded text-xs focus:outline-none focus:border-[#9E4733]"
                          />
                          <textarea
                            rows={2}
                            placeholder={language === 'it' ? 'Quantitativi previsti, certificazioni richieste...' : 'Estimated volumes, requested specs...'}
                            value={inquiryData.notes}
                            onChange={(e) => setInquiryData({ ...inquiryData, notes: e.target.value })}
                            className="w-full bg-white border border-[#DCD5C6] px-2.5 py-1.5 rounded text-xs focus:outline-none focus:border-[#9E4733] resize-none"
                          />
                          <button
                            type="submit"
                            className="w-full bg-[#9E4733] hover:bg-[#863B2B] text-white text-xs font-semibold py-2 rounded transition-colors cursor-pointer"
                          >
                            {language === 'it' ? 'Invia Richiesta al Produttore' : 'Submit Catalog Inquiry'}
                          </button>
                        </>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
