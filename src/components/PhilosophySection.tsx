import React from 'react';
import { Language } from '../types/catalog.ts';
import { ShieldCheck, Award, Leaf, Compass } from 'lucide-react';

interface PhilosophySectionProps {
  language: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ language }) => {
  return (
    <section id="filosofia" className="py-16 bg-[#FBF9F5] border-t border-[#E8E2D5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#9E4733] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>{language === 'it' ? 'Garanzie di Origine & Qualità' : 'Guarantees of Origin & Quality'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C3E2D] font-normal tracking-tight">
            {language === 'it'
              ? 'I Disciplinari di Tutela e le Certificazioni Europee'
              : 'European Protected Designations & Standards'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
            {language === 'it'
              ? 'Tutti i prodotti del nostro catalogo sono certificati da enti terzi e protetti da consorzi di tutela statali. Nessun surrogato, nessuna produzione intensiva industriale.'
              : 'All products in our catalog are certified by third-party bodies and governed by official protection consortia. No mass-market imitations, strictly authentic origins.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E0D9CB] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#2C3E2D]/10 text-[#2C3E2D] flex items-center justify-center font-bold font-mono text-sm">
              DOP
            </div>
            <h3 className="font-serif text-lg text-[#2C3E2D]">
              {language === 'it' ? 'Denominazione di Origine Protetta' : 'Protected Designation of Origin'}
            </h3>
            <p className="text-xs text-[#5A5A5A] leading-relaxed">
              {language === 'it'
                ? 'L’intero ciclo di produzione, trasformazione ed elaborazione deve avvenire esclusivamente nell’area geografica delimitata (es. Balsamico Tradizionale di Modena).'
                : 'Every phase of production, harvesting, and transformation occurs strictly within the delimited geographic territory.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E0D9CB] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#9E4733]/10 text-[#9E4733] flex items-center justify-center font-bold font-mono text-sm">
              IGP
            </div>
            <h3 className="font-serif text-lg text-[#2C3E2D]">
              {language === 'it' ? 'Indicazione Geografica Protetta' : 'Protected Geographical Indication'}
            </h3>
            <p className="text-xs text-[#5A5A5A] leading-relaxed">
              {language === 'it'
                ? 'Attesta che una determinata qualità, reputazione o caratteristica deriva dall’origine geografica (es. Pasta di Gragnano, Pomodoro di Pachino).'
                : 'Guarantees that a specific reputation or recipe stems directly from traditional regional craft.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E0D9CB] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold font-mono text-sm">
              BIO
            </div>
            <h3 className="font-serif text-lg text-[#2C3E2D]">
              {language === 'it' ? 'Agricoltura Biologica & Sostenibile' : 'Certified Organic & Slow Food'}
            </h3>
            <p className="text-xs text-[#5A5A5A] leading-relaxed">
              {language === 'it'
                ? 'Coltivazione senza pesticidi di sintesi, rispetto dei ritmi stagionali del terreno e salvaguardia della biodiversità agraria italiana.'
                : 'Free from synthetic fertilizers and pesticides, preserving indigenous plant varieties and soil fertility.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
