import React, { useState } from 'react';
import { Product, Language, CategoryKey, CertificationType } from '../types/catalog.ts';
import {
  Plus,
  ArrowUp,
  ArrowDown,
  Trash2,
  Edit3,
  CheckCircle,
  Eye,
  EyeOff,
  Layers,
  RotateCcw,
  X,
  FileCode,
  Shield,
} from 'lucide-react';

interface BackOfficeManagerProps {
  products: Product[];
  language: Language;
  onUpdateProducts: (newProducts: Product[]) => void;
  onClose: () => void;
  onOpenWordPressKit: () => void;
}

export const BackOfficeManager: React.FC<BackOfficeManagerProps> = ({
  products,
  language,
  onUpdateProducts,
  onClose,
  onOpenWordPressKit,
}) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Reorder product up
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const items = [...products];
    const temp = items[index];
    items[index] = items[index - 1];
    items[index - 1] = temp;
    // update order numbers
    items.forEach((item, idx) => {
      item.order = idx + 1;
    });
    onUpdateProducts(items);
    showNotice(language === 'it' ? 'Ordine aggiornato con successo' : 'Product order updated');
  };

  // Reorder product down
  const handleMoveDown = (index: number) => {
    if (index === products.length - 1) return;
    const items = [...products];
    const temp = items[index];
    items[index] = items[index + 1];
    items[index + 1] = temp;
    items.forEach((item, idx) => {
      item.order = idx + 1;
    });
    onUpdateProducts(items);
    showNotice(language === 'it' ? 'Ordine aggiornato con successo' : 'Product order updated');
  };

  // Toggle status
  const handleToggleStatus = (id: string) => {
    const updated = products.map((p) => {
      if (p.id === id) {
        const nextStatus = p.status === 'published' ? 'draft' : 'published';
        return { ...p, status: nextStatus as 'published' | 'draft' };
      }
      return p;
    });
    onUpdateProducts(updated);
    showNotice(language === 'it' ? 'Stato pubblicazione modificato' : 'Publication status updated');
  };

  // Delete product
  const handleDelete = (id: string, name: string) => {
    if (window.confirm(language === 'it' ? `Eliminare "${name}" dal catalogo?` : `Delete "${name}" from catalog?`)) {
      const updated = products.filter((p) => p.id !== id);
      onUpdateProducts(updated);
      showNotice(language === 'it' ? 'Prodotto eliminato dal catalogo' : 'Product deleted from catalog');
    }
  };

  // Save product (new or edited)
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    if (isAddingNew) {
      const newItems = [...products, { ...editingProduct, order: products.length + 1 }];
      onUpdateProducts(newItems);
      showNotice(language === 'it' ? 'Nuovo prodotto aggiunto con successo!' : 'New product successfully added!');
    } else {
      const updated = products.map((p) => (p.id === editingProduct.id ? editingProduct : p));
      onUpdateProducts(updated);
      showNotice(language === 'it' ? 'Scheda prodotto aggiornata!' : 'Product details saved!');
    }
    setEditingProduct(null);
    setIsAddingNew(false);
  };

  const startAddNew = () => {
    const newTemplate: Product = {
      id: `prod-${Date.now()}`,
      slug: 'nuovo-prodotto-italiano',
      name: {
        it: 'Nuova Eccellenza Artigianale',
        en: 'New Artisanal Excellence',
      },
      category: 'pasta',
      region: 'Toscana',
      subRegion: 'Val d’Orcia (Siena)',
      certification: 'DOP',
      format: '500g',
      shelfLife: '24 mesi',
      yearOrHarvest: '2026',
      order: products.length + 1,
      status: 'published',
      images: ['/src/assets/images/pasta_gragnano_studio_1792039491626.jpg'],
      shortDescription: {
        it: 'Breve descrizione artigianale del prodotto...',
        en: 'Short artisanal description of the product...',
      },
      fullDescription: {
        it: 'Descrizione completa della storia, lavorazione ed eredità gastronomica...',
        en: 'Comprehensive description of history, production method, and gastronomic heritage...',
      },
      originNote: {
        it: 'Note geografiche e terroir d’origine...',
        en: 'Geographical terroir notes and appellation...',
      },
      tastingNotes: {
        it: ['Note olfattive', 'Profilo al palato', 'Persistenza'],
        en: ['Aromas', 'Palate texture', 'Finish'],
      },
      pairings: {
        it: ['Abbinamento 1', 'Abbinamento 2'],
        en: ['Pairing 1', 'Pairing 2'],
      },
      ingredients: {
        it: '100% ingredienti italiani selezionati.',
        en: '100% selected Italian ingredients.',
      },
      seoTitle: {
        it: 'Nuovo Prodotto | Terre d’Italia',
        en: 'New Product | Italian Catalog',
      },
      seoDescription: {
        it: 'Scopri il nuovo prodotto nel catalogo Terre d’Italia.',
        en: 'Discover the new product in the Terre d’Italia catalog.',
      },
    };
    setEditingProduct(newTemplate);
    setIsAddingNew(true);
  };

  return (
    <section className="min-h-screen bg-[#F4EFEA] py-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Back-Office Header Banner */}
        <div className="bg-white p-6 rounded-2xl border border-[#E0D9CB] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9E4733] font-semibold mb-1">
              <Shield className="w-4 h-4" />
              <span>WordPress Custom Post Type Admin Demo</span>
              <span aria-hidden="true">·</span>
              <span>post_type: catalogo_prodotto</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#2C3E2D]">
              {language === 'it' ? 'Gestione Catalogo Prodotti' : 'Product Catalog Back-Office'}
            </h1>
            <p className="text-xs text-stone-500 mt-1 max-w-2xl">
              {language === 'it'
                ? 'Pannello semplificato nativo: aggiungi, ordina, modifica o nascondi prodotti in pochi secondi. Architettura Custom Post Type a zero plugin bloat.'
                : 'Streamlined native management: add, reorder, edit, or toggle products in seconds. Zero-plugin bloat Custom Post Type architecture.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenWordPressKit}
              className="px-4 py-2 text-xs font-semibold text-[#9E4733] bg-[#9E4733]/10 hover:bg-[#9E4733]/20 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileCode className="w-4 h-4" />
              <span>{language === 'it' ? 'Codice PHP Theme' : 'Theme PHP Code'}</span>
            </button>

            <button
              onClick={startAddNew}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#2C3E2D] hover:bg-[#1E2D20] rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>{language === 'it' ? 'Aggiungi Prodotto' : 'Add New Product'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-3 py-2 text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
            >
              {language === 'it' ? 'Esci da Gestione' : 'Close Admin'}
            </button>
          </div>
        </div>

        {/* Live Notification Bar */}
        {notification && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2 animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-2xl border border-[#E0D9CB] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#FBF9F5] border-b border-[#E8E2D5] flex items-center justify-between text-xs text-stone-600">
            <span className="font-semibold text-[#2C3E2D]">
              {products.length} {language === 'it' ? 'Prodotti Registrati' : 'Registered Products'}
            </span>
            <span className="text-[11px] text-stone-500 font-mono">
              Nessun plugin WooCommerce o e-commerce attivo (Catalogo Puro)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-[#FAF7F2] text-[11px] font-semibold text-[#5A5A5A] uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4 w-16">Foto</th>
                  <th className="py-3 px-4">Titolo Prodotto ({language.toUpperCase()})</th>
                  <th className="py-3 px-4">Categoria</th>
                  <th className="py-3 px-4">Regione d'Origine</th>
                  <th className="py-3 px-4">Cert.</th>
                  <th className="py-3 px-4">Stato</th>
                  <th className="py-3 px-4 text-center">Riordina</th>
                  <th className="py-3 px-4 text-right">Azioni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-sans">
                {products.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-[#FDFBF7] transition-colors">
                    {/* Index */}
                    <td className="py-3 px-4 text-center font-mono text-stone-400">
                      {idx + 1}
                    </td>

                    {/* Image Thumbnail */}
                    <td className="py-3 px-4">
                      <img
                        src={item.images[0]}
                        alt={item.name[language]}
                        className="w-10 h-10 rounded object-cover border border-stone-200"
                      />
                    </td>

                    {/* Title & Slug */}
                    <td className="py-3 px-4">
                      <p className="font-semibold text-stone-900 text-xs">
                        {item.name[language]}
                      </p>
                      <p className="text-[10px] text-stone-400 font-mono">
                        /{item.slug}
                      </p>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4 font-medium text-stone-600 capitalize">
                      {item.category}
                    </td>

                    {/* Region */}
                    <td className="py-3 px-4">
                      <span className="text-[#9E4733] font-medium">{item.region}</span>
                      <p className="text-[10px] text-stone-400">{item.subRegion}</p>
                    </td>

                    {/* Certification */}
                    <td className="py-3 px-4">
                      <span className="bg-[#2C3E2D]/10 text-[#2C3E2D] font-mono text-[10px] px-1.5 py-0.5 rounded font-bold">
                        {item.certification}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleToggleStatus(item.id)}
                        className={`inline-flex items-center gap-1 text-[11px] font-medium cursor-pointer ${
                          item.status === 'published'
                            ? 'text-emerald-700'
                            : 'text-stone-400'
                        }`}
                        title="Click to toggle publish status"
                      >
                        {item.status === 'published' ? (
                          <>
                            <Eye className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Pubblicato</span>
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3.5 h-3.5" />
                            <span>Bozza</span>
                          </>
                        )}
                      </button>
                    </td>

                    {/* Reorder Up/Down */}
                    <td className="py-3 px-4 text-center">
                      <div className="inline-flex items-center gap-1">
                        <button
                          disabled={idx === 0}
                          onClick={() => handleMoveUp(idx)}
                          className="p-1 rounded hover:bg-stone-100 disabled:opacity-20 text-stone-600 transition-colors cursor-pointer"
                          title="Sposta in Alto"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          disabled={idx === products.length - 1}
                          onClick={() => handleMoveDown(idx)}
                          className="p-1 rounded hover:bg-stone-100 disabled:opacity-20 text-stone-600 transition-colors cursor-pointer"
                          title="Sposta in Basso"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>

                    {/* Actions: Edit & Delete */}
                    <td className="py-3 px-4 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => {
                            setEditingProduct({ ...item });
                            setIsAddingNew(false);
                          }}
                          className="p-1.5 text-stone-600 hover:text-[#9E4733] hover:bg-stone-100 rounded transition-colors cursor-pointer"
                          title="Modifica scheda prodotto"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id, item.name[language])}
                          className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-stone-100 rounded transition-colors cursor-pointer"
                          title="Elimina"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit / Add Modal */}
        {editingProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-white border border-[#E0D9CB] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
              <div className="p-4 bg-[#FBF9F5] border-b border-[#E8E2D5] flex items-center justify-between">
                <h3 className="font-serif text-lg text-[#2C3E2D]">
                  {isAddingNew
                    ? (language === 'it' ? 'Aggiungi Nuovo Prodotto nel Catalogo' : 'Add New Catalog Product')
                    : (language === 'it' ? 'Modifica Scheda Prodotto' : 'Edit Product Specifications')}
                </h3>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="p-6 overflow-y-auto space-y-4 text-xs">
                {/* Italian & English Titles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Titolo Italiano (Principale) *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.name.it}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          name: { ...editingProduct.name, it: e.target.value },
                        })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-3 py-1.5 rounded text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      English Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.name.en}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          name: { ...editingProduct.name, en: e.target.value },
                        })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-3 py-1.5 rounded text-xs"
                    />
                  </div>
                </div>

                {/* Category & Region */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Categoria CPT
                    </label>
                    <select
                      value={editingProduct.category}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          category: e.target.value as CategoryKey,
                        })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-2.5 py-1.5 rounded text-xs"
                    >
                      <option value="pasta">Pasta</option>
                      <option value="oils">Oli & Aceti</option>
                      <option value="sauces">Sughi</option>
                      <option value="sweets">Dolci</option>
                      <option value="preserves">Conserve</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Regione d'Origine
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.region}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          region: e.target.value,
                        })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-2.5 py-1.5 rounded text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Certificazione
                    </label>
                    <select
                      value={editingProduct.certification}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          certification: e.target.value as CertificationType,
                        })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-2.5 py-1.5 rounded text-xs"
                    >
                      <option value="DOP">DOP</option>
                      <option value="IGP">IGP</option>
                      <option value="BIO">BIO</option>
                      <option value="Presidio Slow Food">Slow Food</option>
                    </select>
                  </div>
                </div>

                {/* SubRegion & Format */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Comune / Terroir (es. Gragnano, Bronte)
                    </label>
                    <input
                      type="text"
                      value={editingProduct.subRegion}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          subRegion: e.target.value,
                        })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-3 py-1.5 rounded text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Formato / Peso (es. 500g, 750ml)
                    </label>
                    <input
                      type="text"
                      value={editingProduct.format}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          format: e.target.value,
                        })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-3 py-1.5 rounded text-xs"
                    />
                  </div>
                </div>

                {/* Short Description IT & EN */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Descrizione Breve (Italiano)
                  </label>
                  <textarea
                    rows={2}
                    value={editingProduct.shortDescription.it}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        shortDescription: {
                          ...editingProduct.shortDescription,
                          it: e.target.value,
                        },
                      })
                    }
                    className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-3 py-1.5 rounded text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Short Description (English)
                  </label>
                  <textarea
                    rows={2}
                    value={editingProduct.shortDescription.en}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        shortDescription: {
                          ...editingProduct.shortDescription,
                          en: e.target.value,
                        },
                      })
                    }
                    className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-3 py-1.5 rounded text-xs"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    URL Immagine Principale
                  </label>
                  <input
                    type="text"
                    value={editingProduct.images[0] || ''}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        images: [e.target.value, ...(editingProduct.images.slice(1) || [])],
                      })
                    }
                    className="w-full bg-[#FAF7F2] border border-[#DCD5C6] px-3 py-1.5 rounded text-xs font-mono"
                  />
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 text-xs text-stone-500 hover:text-stone-800"
                  >
                    Annulla
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#2C3E2D] hover:bg-[#1E2D20] rounded-md transition-colors"
                  >
                    Salva Prodotto
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
