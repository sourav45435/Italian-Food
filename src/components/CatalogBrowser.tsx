import React, { useState, useMemo } from 'react';
import { Product, Language, CategoryKey, CertificationType } from '../types/catalog.ts';
import { Search, MapPin, Award, ArrowUpRight, Filter, X } from 'lucide-react';

interface CatalogBrowserProps {
  products: Product[];
  language: Language;
  onSelectProduct: (product: Product) => void;
}

const categories: { key: CategoryKey | 'all'; label: { it: string; en: string } }[] = [
  { key: 'all', label: { it: 'Tutti i Prodotti', en: 'All Products' } },
  { key: 'pasta', label: { it: 'Pasta Artigianale', en: 'Artisanal Pasta' } },
  { key: 'oils', label: { it: 'Oli & Aceti', en: 'Oils & Vinegars' } },
  { key: 'sauces', label: { it: 'Sughi & Condimenti', en: 'Sauces & Condiments' } },
  { key: 'sweets', label: { it: 'Dolci & Pasticceria', en: 'Sweets & Confectionery' } },
  { key: 'preserves', label: { it: 'Conserve', en: 'Preserves' } },
];

const regions = [
  'Tutte le Regioni',
  'Campania',
  'Puglia',
  'Emilia-Romagna',
  'Sicilia',
  'Liguria',
  'Toscana',
  'Piemonte',
];

const certifications: (CertificationType | 'all')[] = ['all', 'DOP', 'IGP', 'BIO'];

export const CatalogBrowser: React.FC<CatalogBrowserProps> = ({
  products,
  language,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | 'all'>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('Tutte le Regioni');
  const [selectedCertification, setSelectedCertification] = useState<CertificationType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Must be published in storefront view
      if (p.status !== 'published') return false;

      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;

      // Region filter
      if (selectedRegion !== 'Tutte le Regioni' && p.region !== selectedRegion) return false;

      // Certification filter
      if (selectedCertification !== 'all' && p.certification !== selectedCertification) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const nameMatch = p.name[language].toLowerCase().includes(query);
        const descMatch = p.shortDescription[language].toLowerCase().includes(query);
        const regionMatch = p.region.toLowerCase().includes(query) || p.subRegion.toLowerCase().includes(query);
        if (!nameMatch && !descMatch && !regionMatch) return false;
      }

      return true;
    }).sort((a, b) => a.order - b.order);
  }, [products, selectedCategory, selectedRegion, selectedCertification, searchQuery, language]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedRegion('Tutte le Regioni');
    setSelectedCertification('all');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedRegion !== 'Tutte le Regioni' ||
    selectedCertification !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <section id="catalogo" className="py-16 bg-[#FBF9F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8E2D5]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E4733] font-semibold mb-2">
              <span>{language === 'it' ? 'Navigazione Catalogo' : 'Catalog Navigation'}</span>
              <span aria-hidden="true">·</span>
              <span>{filteredProducts.length} {language === 'it' ? 'Eccellenze Selezionate' : 'Curated Items'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C3E2D] font-normal tracking-tight">
              {language === 'it' ? 'Esplora i Prodotti per Categoria & Regione' : 'Explore by Category & Region of Origin'}
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={language === 'it' ? 'Cerca pasta, olio, regione...' : 'Search pasta, oil, region...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-white border border-[#DCD5C6] rounded-md text-xs sm:text-sm text-[#2C3E2D] placeholder-stone-400 focus:outline-none focus:border-[#9E4733] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Toolbar: Category Tabs & Regional Dropdowns */}
        <div className="py-6 space-y-4">
          {/* Interactive Category Tabs (Compliant with segmented control guidelines) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 text-xs sm:text-[13px] font-medium rounded-md whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? 'bg-[#2C3E2D] text-white shadow-xs'
                      : 'bg-white/80 text-[#5A5A5A] hover:bg-white hover:text-[#2C3E2D] border border-[#E2DBD0]'
                  }`}
                >
                  {cat.label[language]}
                </button>
              );
            })}
          </div>

          {/* Secondary Quick Filters: Region & Certifications */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {/* Region Select */}
            <div className="flex items-center gap-1.5 bg-white border border-[#DCD5C6] px-3 py-1.5 rounded-md text-[#2C3E2D]">
              <MapPin className="w-3.5 h-3.5 text-[#9E4733]" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-transparent text-xs font-medium focus:outline-none cursor-pointer pr-2"
              >
                {regions.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg === 'Tutte le Regioni'
                      ? (language === 'it' ? 'Tutte le Regioni d’Italia' : 'All Italian Regions')
                      : reg}
                  </option>
                ))}
              </select>
            </div>

            {/* Certifications Quick Filter */}
            <div className="flex items-center gap-1 bg-[#EFECE4] p-0.5 rounded-md">
              {certifications.map((cert) => {
                const active = selectedCertification === cert;
                return (
                  <button
                    key={cert}
                    onClick={() => setSelectedCertification(cert)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#9E4733] text-white'
                        : 'text-[#6B6B6B] hover:text-[#2C3E2D]'
                    }`}
                  >
                    {cert === 'all'
                      ? (language === 'it' ? 'Tutte Cert.' : 'All Cert.')
                      : cert}
                  </button>
                );
              })}
            </div>

            {/* Reset Filters button */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#9E4733] hover:underline flex items-center gap-1 ml-auto cursor-pointer"
              >
                <X className="w-3 h-3" />
                <span>{language === 'it' ? 'Azzera filtri' : 'Reset filters'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid: 3-column desktop, 2-column tablet, 1-column mobile */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-xl border border-[#E8E2D5] p-8 max-w-lg mx-auto my-8">
            <Filter className="w-10 h-10 text-[#9E4733] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl text-[#2C3E2D] font-normal">
              {language === 'it' ? 'Nessun prodotto trovato' : 'No products found'}
            </h3>
            <p className="text-xs text-stone-500 mt-2 max-w-sm mx-auto">
              {language === 'it'
                ? 'Nessun articolo corrisponde ai filtri selezionati. Prova a modificare la regione o la categoria di ricerca.'
                : 'No items match your selected filter criteria. Try resetting region or category.'}
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-[#2C3E2D] text-white rounded-md hover:bg-[#1E2D20] cursor-pointer"
            >
              {language === 'it' ? 'Mostra tutti i prodotti' : 'Show all products'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              return (
                <article
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-white rounded-xl border border-[#E0D9CB] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
                >
                  {/* Product Photography (Takes ~65-70% visual height on neutral stone surface) */}
                  <div className="relative aspect-[4/3] w-full bg-[#F4EFEA] overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name[language]}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Provenance & Certification Stamp */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="bg-[#2C3E2D]/90 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-sm tracking-wider uppercase">
                        {product.certification}
                      </span>
                      <span className="bg-white/90 backdrop-blur-xs text-[#2C3E2D] text-[11px] font-sans font-medium px-2 py-0.5 rounded-sm shadow-2xs">
                        {product.format}
                      </span>
                    </div>

                    {/* View Details hover indicator */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#2C3E2D] p-2 rounded-full shadow-md">
                      <ArrowUpRight className="w-4 h-4 text-[#9E4733]" />
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                    <div>
                      {/* Region & Origin note as quiet unboxed text (Zero-Pill compliant) */}
                      <div className="flex items-center gap-1.5 text-xs text-[#9E4733] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{product.subRegion}</span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span className="text-[#6B6B6B]">{product.region}</span>
                      </div>

                      {/* Product Title */}
                      <h3 className="font-serif text-lg text-[#2C3E2D] font-normal leading-snug group-hover:text-[#9E4733] transition-colors">
                        {product.name[language]}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-[#5A5A5A] leading-relaxed mt-2 line-clamp-2">
                        {product.shortDescription[language]}
                      </p>
                    </div>

                    {/* Footer Row: Tasting profile cue & Action link */}
                    <div className="pt-3 border-t border-[#F0ECE1] flex items-center justify-between text-xs">
                      <div className="text-[11px] text-[#7A7A7A] italic truncate max-w-[65%]">
                        {product.tastingNotes[language][0]}
                      </div>
                      <span className="text-xs font-semibold text-[#9E4733] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                        <span>{language === 'it' ? 'Scheda Tecnica' : 'Product Profile'}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
