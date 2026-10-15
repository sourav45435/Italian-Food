import React from 'react';
import { BlackTornDivider } from './TornEdge.tsx';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface MenuItem {
  name: string;
  nameIt: string;
  price: string;
  description: string;
  descriptionIt: string;
  featured?: boolean;
}

interface MenuSectionProps {
  onSelectItem?: (name: string, price: string) => void;
}

const appetizers: MenuItem[] = [
  {
    name: 'Crispy Asparagus & Black Truffle Risotto Cake',
    nameIt: 'Risotto Croccante agli Asparagi e Tartufo',
    price: '$15.50',
    description: 'Crispy carnaroli risotto cake, grilled asparagus tips, parmigiano reggiano fondue and aromatic black truffle oil.',
    descriptionIt: 'Tortino croccante di riso carnaroli, punte di asparagi spadellate, fonduta vellutata di Parmigiano Reggiano e olio al tartufo nero pregiato.',
    featured: true,
  },
  {
    name: 'Artisan Bruschetta with Heirloom Tomatoes & Burrata',
    nameIt: 'Bruschetta al Pomodoro e Burrata Pugliese',
    price: '$12.50',
    description: 'Charred artisan sourdough rubbed with roasted garlic, heirloom cherry tomatoes, creamy burrata and fresh basil leaves.',
    descriptionIt: 'Pane a lievitazione naturale tostato, sfregato con aglio dolce, pomodorini datterini confit, burrata pugliese e foglie di basilico fresco.',
  },
  {
    name: 'Sicilian Golden Saffron Arancini with Beef Ragù',
    nameIt: 'Arancini allo Zafferano e Ragù Siciliano',
    price: '$13.00',
    description: 'Crispy golden saffron risotto spheres filled with slow-braised beef ragù, sweet peas and melted buffalo mozzarella.',
    descriptionIt: 'Sfere dorate di riso allo zafferano con cuore di ragù di manzo a lenta cottura, piselli dolci e provola affumicata filante.',
  },
  {
    name: 'Prime Beef Tenderloin Carpaccio & Artichokes',
    nameIt: 'Carpaccio di Manzo con Carciofi Romani',
    price: '$16.00',
    description: 'Paper-thin prime beef tenderloin, shaved Roman artichokes, baby wild arugula, aged pecorino and citrus emulsion.',
    descriptionIt: 'Fettine finissime di filetto di manzo, carciofi romani a lamelle sottili, rucola selvatica, scaglie di pecorino e citronette agli agrumi.',
  },
];

const mainCourses: MenuItem[] = [
  {
    name: 'Hand-Rolled Tagliolini with Mediterranean Lobster',
    nameIt: 'Tagliolini all’Aragosta e Pomodorini',
    price: '$32.00',
    description: 'Fresh hand-rolled ribbon pasta, succulent Mediterranean lobster tail, sweet cherry tomatoes, white wine, garlic and fresh herbs.',
    descriptionIt: 'Pasta fresca all’uovo fatta a mano, polpa di aragosta del Mediterraneo, pomodorini ciliegini dolci, vino bianco e prezzemolo fresco.',
    featured: true,
  },
  {
    name: 'Tuscan-Cut Prime Bistecca with Fresh Rosemary',
    nameIt: 'Bistecca alla Fiorentina al Rosmarino',
    price: '$36.50',
    description: 'Dry-aged prime Tuscan-cut beef steak seared with fresh rosemary sprigs, flaky sea salt and roasted rosemary potatoes.',
    descriptionIt: 'Costata di manzo frollata scottata su fiamma viva, sale marino integrale a scaglie, rametti di rosmarino e patate novelle al forno.',
  },
  {
    name: 'Pan-Roasted Sea Bass in Golden Potato Crust',
    nameIt: 'Filetto di Spigola in Crosta di Patate',
    price: '$28.50',
    description: 'Pan-roasted wild Mediterranean sea bass in a crisp golden potato crust, braised baby fennel and saffron citrus broth.',
    descriptionIt: 'Spigola nostrana avvolta in sottili lamelle di patate dorate, finocchietto brasato e delicato guazzetto allo zafferano.',
  },
  {
    name: 'Slow-Braised Milanese Ossobuco with Saffron Risotto',
    nameIt: 'Ossobuco alla Milanese con Gremolata',
    price: '$34.00',
    description: 'Tender slow-braised veal shank in rich aromatic reduction, paired with saffron risotto and lemon-herb gremolata.',
    descriptionIt: 'Tenero stinco di vitello brasato nel suo fondo ristretto, servito con classico risotto giallo allo zafferano e gremolata agli agrumi.',
  },
];

const desserts: MenuItem[] = [
  {
    name: 'Warm Apple & Toasted Almond Tart with Vanilla Gelato',
    nameIt: 'Torta Tiepida di Mele e Mandorle',
    price: '$11.00',
    description: 'Warm slow-baked spiced honeycrisp apple tart with crunchy toasted almond crumble, served with artisanal vanilla bean gelato.',
    descriptionIt: 'Crostata tiepida di mele speziate alla cannella con granella di mandorle tostate, accompagnata da gelato artigianale alla vaniglia bourbon.',
    featured: true,
  },
  {
    name: 'Classic Venetian Espresso Mascarpone Tiramisù',
    nameIt: 'Tiramisù Tradizionale al Mascarpone',
    price: '$10.00',
    description: 'Espresso-soaked Savoiardi ladyfingers layered with velvety sweet mascarpone cream, Dutch cocoa powder and shaved dark chocolate.',
    descriptionIt: 'Biscotti savoiardi inzuppati nel caffè espresso della moka, crema soffice al mascarpone fresco e abbondante cacao amaro.',
  },
  {
    name: 'Bourbon Vanilla Panna Cotta with Forest Berries',
    nameIt: 'Panna Cotta alla Vaniglia e Frutti di Bosco',
    price: '$9.50',
    description: 'Silky Bourbon vanilla bean panna cotta topped with sweet-tart wild forest berry compote and fresh garden mint.',
    descriptionIt: 'Vellutata panna cotta alla vaniglia naturale del Madagascar, coulis di more, lamponi e mirtilli di bosco con mentuccia.',
  },
  {
    name: 'Artisan Sicilian Cannoli with Ricotta & Pistachio',
    nameIt: 'Cannoli Artigianali alla Ricotta e Pistacchio',
    price: '$9.00',
    description: 'Crisp handcrafted Sicilian pastry rolls filled with whipped sheep ricotta cream, candied orange zest and crushed Bronte pistachios.',
    descriptionIt: 'Cialda croccante lavorata a mano con ripieno di ricotta fresca vaccina e di pecora, gocce di fondente e pistacchio di Bronte.',
  },
];

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const { mode } = useLanguage();

  const renderSectionHeader = (itTitle: string, enTitle: string) => {
    if (mode === 'en') {
      return (
        <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
          <h3 className="font-slab text-2xl sm:text-3xl text-stone-900 tracking-wider uppercase">
            {enTitle}
          </h3>
          <div className="w-2 h-7 bg-stone-900 rounded-sm" />
        </div>
      );
    }
    if (mode === 'it') {
      return (
        <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
          <h3 className="font-slab text-2xl sm:text-3xl text-stone-900 tracking-wider uppercase">
            {itTitle}
          </h3>
          <div className="w-2 h-7 bg-stone-900 rounded-sm" />
        </div>
      );
    }
    // mode === 'it-first'
    return (
      <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
        <div>
          <h3 className="font-slab text-2xl sm:text-3xl text-stone-900 tracking-wider uppercase leading-none">
            {itTitle}
          </h3>
          <span className="text-xs text-stone-500 font-sans uppercase font-medium tracking-wider mt-1 block">
            {enTitle}
          </span>
        </div>
        <div className="w-2 h-7 bg-stone-900 rounded-sm" />
      </div>
    );
  };

  const renderDishList = (items: MenuItem[]) => (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const title = mode === 'en' ? item.name : item.nameIt;
        const subTitle = mode === 'it-first' ? item.name : null;

        return (
          <div
            key={item.nameIt}
            onClick={() => onSelectItem?.(title, item.price)}
            className={`group cursor-pointer transition-all ${
              idx > 0 ? 'border-t border-stone-100 pt-3' : ''
            }`}
          >
            <div className="flex justify-between items-baseline gap-2">
              <div className="flex flex-col">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-red-600 transition-colors flex items-center gap-1.5">
                  {title}
                  {item.featured && (
                    <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-mono font-medium uppercase tracking-tight">
                      {mode === 'en' ? 'Pictured' : 'In Foto'}
                    </span>
                  )}
                </h4>
                {subTitle && (
                  <span className="text-[11px] text-stone-500 font-sans italic font-normal">
                    {subTitle}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-red-600 shrink-0 font-mono">
                {item.price}
              </span>
            </div>

            {/* Description: Italian first, then English */}
            <div className="mt-1 leading-relaxed">
              {mode === 'en' ? (
                <p className="text-xs text-stone-600">{item.description}</p>
              ) : mode === 'it' ? (
                <p className="text-xs text-stone-700">{item.descriptionIt}</p>
              ) : (
                <div className="space-y-0.5">
                  <p className="text-xs text-stone-700 font-normal">{item.descriptionIt}</p>
                  <p className="text-[11px] text-stone-500 italic">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="our-menu" className="relative bg-[#0c0a09] text-white pt-0 pb-20 overflow-hidden">
      {/* Black Torn Paper Transition into Dark Menu */}
      <BlackTornDivider className="relative -top-1" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="font-slab text-3xl sm:text-4xl md:text-5xl tracking-widest uppercase text-stone-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {mode === 'en' ? 'OUR MENU' : 'IL NOSTRO MENU'}
          </h2>
          {mode === 'it-first' && (
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-amber-400 font-semibold mt-1">
              Our Handcrafted Italian Menu
            </p>
          )}
          <div className="w-16 h-1 bg-red-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Menu Blocks Container */}
        <div className="space-y-12 sm:space-y-16">
          {/* ================= Row 1: ANTIPASTI / APPETIZER ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Left: Plated Appetizer Photo (Risotto with Asparagus) */}
            <div className="relative group overflow-hidden rounded-md shadow-2xl bg-white p-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded relative">
                <img
                  src="https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=85"
                  alt="Appetizer - Truffle Risotto with Grilled Asparagus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-xs text-amber-300 text-[11px] font-slab px-2.5 py-1 rounded flex items-center gap-1.5 shadow">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>
                    {mode === 'en' ? "Chef's Signature" : "Specialità dello Chef"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: White Card for ANTIPASTI */}
            <div className="bg-white text-stone-900 p-6 sm:p-8 rounded-md shadow-2xl border-l-4 border-red-600">
              {renderSectionHeader('ANTIPASTI', 'Appetizers')}
              {renderDishList(appetizers)}
            </div>
          </div>

          {/* ================= Row 2: SECONDI PIATTI / MAIN COURSE ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Left: White Card for SECONDI (order 2 on mobile, order 1 on md) */}
            <div className="order-2 md:order-1 bg-white text-stone-900 p-6 sm:p-8 rounded-md shadow-2xl border-l-4 border-red-600">
              {renderSectionHeader('PIATTI PRINCIPALI', 'Main Courses')}
              {renderDishList(mainCourses)}
            </div>

            {/* Right: Plated Main Course Photo (Lobster Pasta) */}
            <div className="order-1 md:order-2 relative group overflow-hidden rounded-md shadow-2xl bg-white p-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded relative">
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=85"
                  alt="Main Course - Seafood Lobster Pasta with Cherry Tomatoes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-xs text-amber-300 text-[11px] font-slab px-2.5 py-1 rounded flex items-center gap-1.5 shadow">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>
                    {mode === 'en' ? "Chef's Signature" : "Piatto d'Autore"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Row 3: I NOSTRI DOLCI / DESSERTS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Left: Plated Dessert Photo (Warm Apple Crumble Tart) */}
            <div className="relative group overflow-hidden rounded-md shadow-2xl bg-white p-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded relative">
                <img
                  src="https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=85"
                  alt="Dessert - Fresh Baked Apple Almond Crumble"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-xs text-amber-300 text-[11px] font-slab px-2.5 py-1 rounded flex items-center gap-1.5 shadow">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>
                    {mode === 'en' ? 'Freshly Baked' : 'Appena Sfornato'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: White Card for DESSERTS */}
            <div className="bg-white text-stone-900 p-6 sm:p-8 rounded-md shadow-2xl border-l-4 border-red-600">
              {renderSectionHeader('I NOSTRI DOLCI', 'Artisan Desserts')}
              {renderDishList(desserts)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
