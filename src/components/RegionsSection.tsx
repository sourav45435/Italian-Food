import React from 'react';
import { Language } from '../types/catalog.ts';
import { MapPin, ArrowRight } from 'lucide-react';

interface RegionsSectionProps {
  language: Language;
  onSelectRegion: (region: string) => void;
}

const regionsData = [
  {
    name: 'Campania',
    terroir: 'Gragnano, Monti Lattari, Vesuvio',
    specialty: { it: 'Pasta trafilata al bronzo & Pomodoro del Piennolo', en: 'Bronze-drawn pasta & volcanic cherry tomatoes' },
    accent: '#9E4733',
  },
  {
    name: 'Puglia',
    terroir: 'Murge Baresi, Valle d’Itria, Salento',
    specialty: { it: 'Olio Monocultivar Coratina & Peranzana', en: 'Single-varietal Coratina & Peranzana olive oils' },
    accent: '#2C3E2D',
  },
  {
    name: 'Emilia-Romagna',
    terroir: 'Modena, Colline Emiliane, Parma',
    specialty: { it: 'Aceto Balsamico Tradizionale & Parmigiano Reggiano', en: 'Traditional aged balsamic vinegar & cured cheeses' },
    accent: '#8B4513',
  },
  {
    name: 'Sicilia',
    terroir: 'Bronte (Etna), Pachino, Val di Noto',
    specialty: { it: 'Pistacchio Verde dell’Etna & Pomodoro Ciliegino', en: 'Volcanic emerald pistachios & sun-drenched tomatoes' },
    accent: '#B8860B',
  },
  {
    name: 'Liguria',
    terroir: 'Prà, Riviera di Ponente, Cinque Terre',
    specialty: { it: 'Basilico Genovese DOP a foglia piccola & Olio Taggiasco', en: 'Small-leaf Genoese basil & delicate Taggiasca oil' },
    accent: '#2E8B57',
  },
  {
    name: 'Toscana',
    terroir: 'Chianti, Val d’Orcia, Maremma',
    specialty: { it: 'Cantuccini alle Mandorle IGP & Olio Toscano IGP', en: 'Almond Cantuccini & green Tuscan IGP olive oils' },
    accent: '#A0522D',
  },
];

export const RegionsSection: React.FC<RegionsSectionProps> = ({ language, onSelectRegion }) => {
  return (
    <section id="regioni" className="py-16 bg-[#F4EFEA] border-t border-[#E8E2D5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E4733] font-semibold mb-2">
              <span>{language === 'it' ? 'Territori & Microclimi' : 'Terroirs & Microclimates'}</span>
              <span aria-hidden="true">·</span>
              <span>100% Filiera Italiana Tracciata</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C3E2D] font-normal tracking-tight">
              {language === 'it' ? 'I Territori Gastronomici d’Origine' : 'The Sacred Gastronomic Terroirs'}
            </h2>
          </div>
          <p className="text-xs text-[#5A5A5A] max-w-md">
            {language === 'it'
              ? 'Dalle colline modenesi alle terrazze liguri, ogni lotto è espressione pura del suo microclima e della sapienza secolare.'
              : 'From the hills of Modena to the coastal terraces of Liguria, each lot is a pure expression of its indigenous microclimate.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regionsData.map((reg) => (
            <div
              key={reg.name}
              onClick={() => onSelectRegion(reg.name)}
              className="bg-white p-6 rounded-xl border border-[#E0D9CB] shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9E4733]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{reg.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 group-hover:text-[#9E4733] transition-colors">
                    DOP / IGP
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#2C3E2D] group-hover:text-[#9E4733] transition-colors">
                  {reg.name}
                </h3>
                <p className="text-[11px] text-stone-400 font-mono mt-0.5">{reg.terroir}</p>

                <p className="text-xs text-[#5A5A5A] mt-3 leading-relaxed">
                  {reg.specialty[language]}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#9E4733] font-semibold">
                <span>{language === 'it' ? 'Vedi prodotti della regione' : 'View regional products'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
