import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, CheckCircle, Truck, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext.tsx';

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Item {
  id: string;
  name: string;
  nameIt: string;
  category: string;
  price: number;
  description: string;
  descriptionIt: string;
  image: string;
}

const deliveryItems: Item[] = [
  {
    id: 'pizza-margherita',
    name: 'Artisan Margherita Pizza D.O.P.',
    nameIt: 'Pizza Regina Margherita Napoletana D.O.P.',
    category: 'Pizza',
    price: 18.0,
    description: 'San Marzano tomatoes, fresh buffalo mozzarella, fresh basil, extra virgin olive oil.',
    descriptionIt: 'Pomodoro San Marzano dell’Agro Sarnese, mozzarella di bufala campana D.O.P., basilico fresco e olio EVO.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'bruschetta-pugliese',
    name: 'Artisan Bruschetta with Heirloom Tomatoes & Burrata',
    nameIt: 'Bruschetta al Pomodoro e Burrata Pugliese',
    category: 'Antipasti',
    price: 12.5,
    description: 'Charred artisan sourdough with garlic, heirloom tomatoes, creamy burrata and basil.',
    descriptionIt: 'Pane a lievitazione naturale tostato, aglio dolce, datterini confit, burrata pugliese e basilico.',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'arancini-ragu',
    name: 'Sicilian Golden Saffron Arancini with Beef Ragù',
    nameIt: 'Arancini allo Zafferano e Ragù Siciliano',
    category: 'Antipasti',
    price: 13.0,
    description: 'Golden saffron risotto croquettes with slow-cooked ragù, peas and mozzarella.',
    descriptionIt: 'Sfere dorate di riso allo zafferano con cuore di ragù di manzo, piselli e provola filante.',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'asparagus-risotto',
    name: 'Crispy Asparagus & Black Truffle Risotto Cake',
    nameIt: 'Risotto Croccante agli Asparagi e Tartufo',
    category: 'Primi',
    price: 15.5,
    description: 'Creamy carnaroli risotto cake, grilled asparagus tips, parmigiano fondue and black truffle.',
    descriptionIt: 'Tortino croccante di riso carnaroli, punte di asparagi, fonduta di Parmigiano Reggiano e tartufo nero.',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'lobster-pasta',
    name: 'Handmade Tagliolini with Mediterranean Lobster',
    nameIt: 'Tagliolini all’Aragosta e Pomodorini',
    category: 'Secondi',
    price: 32.0,
    description: 'Fresh hand-rolled pasta, succulent lobster tail, cherry tomatoes, white wine and fresh herbs.',
    descriptionIt: 'Pasta fresca all’uovo, polpa d’aragosta, pomodorini dolci, vino bianco e prezzemolo fresco.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'apple-tart',
    name: 'Warm Apple & Almond Tart with Vanilla Gelato',
    nameIt: 'Torta Tiepida di Mele e Mandorle',
    category: 'Dolci',
    price: 11.0,
    description: 'Warm slow-baked honeycrisp apple tart with crunchy almond crumble and vanilla gelato.',
    descriptionIt: 'Crostata tiepida di mele e cannella con mandorle tostate e gelato alla vaniglia bourbon.',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'tiramisu',
    name: 'Classic Venetian Espresso Mascarpone Tiramisù',
    nameIt: 'Tiramisù Tradizionale al Mascarpone',
    category: 'Dolci',
    price: 10.0,
    description: 'Espresso-soaked Savoiardi ladyfingers with sweet mascarpone cream and Dutch cocoa.',
    descriptionIt: 'Savoiardi inzuppati nel caffè espresso della moka, crema al mascarpone e cacao amaro.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=300&q=80',
  },
];

export const DeliveryModal: React.FC<DeliveryModalProps> = ({ isOpen, onClose }) => {
  const { mode } = useLanguage();
  const [cart, setCart] = useState<{ [id: string]: number }>({
    'pizza-margherita': 1,
    'asparagus-risotto': 1,
  });
  const [address, setAddress] = useState('');
  const [ordered, setOrdered] = useState(false);

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

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = deliveryItems.find((i) => i.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#1a1a1a] border border-stone-700 text-stone-100 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header - Italian First */}
        <div className="bg-stone-900 border-b border-stone-800 p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="font-slab text-lg sm:text-xl text-white tracking-wide uppercase leading-none">
                {mode === 'en'
                  ? 'Order Delivery 24/7'
                  : 'CONSEGNA A DOMICILIO 24/7'}
              </h3>
              <p className="text-[11px] text-amber-400 flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3" />
                <span>
                  {mode === 'en'
                    ? 'Average arrival: 30-40 mins'
                    : 'Tempo stimato di consegna: 30-40 min (Imballo termico)'}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!ordered ? (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-stone-400 mb-3">
                {mode === 'en' ? 'Dishes for Delivery' : 'I Nostri Piatti per la Consegna a Domicilio'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliveryItems.map((item) => {
                  const qty = cart[item.id] || 0;
                  const title = mode === 'en' ? item.name : item.nameIt;
                  const subtitle = mode === 'it-first' ? item.name : null;
                  const desc = mode === 'en' ? item.description : item.descriptionIt;

                  return (
                    <div
                      key={item.id}
                      className="bg-stone-900 border border-stone-800 rounded-lg p-3 flex gap-3 items-center hover:border-stone-700 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={title}
                        className="w-16 h-16 rounded object-cover shrink-0"
                        decoding="async"
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-xs text-white truncate">{title}</h5>
                        {subtitle && (
                          <p className="text-[10px] text-stone-400 italic truncate">{subtitle}</p>
                        )}
                        <p className="text-[11px] text-stone-400 line-clamp-1 mt-0.5">{desc}</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-xs font-bold text-red-500 font-mono">
                            ${item.price.toFixed(2)}
                          </span>
                          <div className="flex items-center gap-1.5 bg-stone-800 rounded px-1.5 py-0.5">
                            {qty > 0 && (
                              <>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="text-stone-400 hover:text-white cursor-pointer"
                                  aria-label="Decrease"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs font-mono font-bold px-1">{qty}</span>
                              </>
                            )}
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-amber-400 hover:text-white cursor-pointer"
                              aria-label="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery Form */}
            <form onSubmit={handleCheckout} className="border-t border-stone-800 pt-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  {mode === 'en'
                    ? 'Delivery Address *'
                    : mode === 'it'
                    ? 'Indirizzo di Consegna *'
                    : 'Indirizzo di Consegna / Delivery Address *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    mode === 'en'
                      ? 'Street Address, Apt / Suite, City'
                      : 'Via / Piazza, Civico, Scala, Piano, Città'
                  }
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="flex items-center justify-between py-2 border-t border-stone-800/80">
                <div className="flex items-center gap-2 text-stone-400 text-xs">
                  <ShoppingBag className="w-4 h-4 text-red-500" />
                  <span>
                    {mode === 'en'
                      ? 'Subtotal + Delivery Free'
                      : 'Totale Piatti + Consegna Gratuita'}
                  </span>
                </div>
                <div className="text-base font-slab text-white font-mono">${total.toFixed(2)}</div>
              </div>

              <button
                type="submit"
                disabled={total === 0 || !address}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-slab text-xs uppercase tracking-wider py-3 rounded-md transition-all cursor-pointer font-bold shadow-lg"
              >
                {mode === 'en'
                  ? `PLACE ORDER ($${total.toFixed(2)})`
                  : mode === 'it'
                  ? `CONFERMA ORDINE ($${total.toFixed(2)})`
                  : `CONFERMA ORDINE / PLACE ORDER ($${total.toFixed(2)})`}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-4 my-auto">
            <div className="w-14 h-14 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto border border-red-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-slab text-2xl text-white uppercase tracking-wider">
              {mode === 'en' ? 'Order Dispatched!' : 'Ordine Ricevuto con Successo!'}
            </h4>
            <p className="text-stone-300 text-xs max-w-sm mx-auto leading-relaxed">
              {mode === 'en' ? (
                <>
                  Your gourmet Italian order has been received. Our chef is preparing your dishes and our courier is en route to <span className="text-amber-400 font-bold">{address}</span>.
                </>
              ) : (
                <>
                  Il tuo ordine gourmet è in lavorazione. I nostri chef stanno preparando i piatti nel forno a legna e il corriere consegnerà caldo a <span className="text-amber-400 font-bold">{address}</span>.
                </>
              )}
            </p>
            <div className="bg-stone-900 border border-stone-800 rounded p-2.5 text-xs font-mono text-stone-400 max-w-xs mx-auto">
              {mode === 'en' ? 'Estimated Delivery: ~35 mins' : 'Tempo Stimato: ~35 min'}
            </div>
            <button
              onClick={() => {
                setOrdered(false);
                onClose();
              }}
              className="mt-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-6 py-2 rounded cursor-pointer"
            >
              {mode === 'en' ? 'Done' : 'Perfetto'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
