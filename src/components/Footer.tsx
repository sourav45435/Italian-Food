import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Twitter, MessageCircle, Instagram, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FooterProps {
  onSuccess?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { mode } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }, 600);
  };

  return (
    <footer
      id="contact-section"
      className="bg-[#141414] text-stone-300 pt-14 pb-12 border-t border-stone-800 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(#262626 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Brand Logo Header in Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-10 border-b border-stone-800/90 gap-5">
          <div className="flex items-center gap-3.5">
            <div className="p-2 rounded-lg bg-stone-900/70 border border-stone-800">
              <BrandLogo variant="dark" height={52} className="h-11 sm:h-14 w-auto" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400 font-medium">
              {mode === 'en'
                ? 'Order Delivery 24/7:'
                : mode === 'it'
                ? 'Ordina a Domicilio 24/7:'
                : 'Ordina a Domicilio / Delivery 24/7:'}
            </span>
            <span className="text-xs font-mono font-bold text-amber-400 bg-stone-900 border border-stone-800 px-2.5 py-1 rounded">
              027-463-5236
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Column 1: OUR LOCATION - Italian First */}
          <div className="flex flex-col items-start space-y-3">
            <div>
              <h3 className="font-slab text-xl text-white tracking-wider uppercase">
                {mode === 'en' ? 'OUR LOCATION' : 'DOVE SIAMO'}
              </h3>
              {mode === 'it-first' && (
                <span className="text-[11px] font-sans text-stone-500 uppercase tracking-wider block">
                  Our Location & Theatre Hall
                </span>
              )}
            </div>

            <div className="text-xs sm:text-[13px] text-stone-400 leading-relaxed font-sans space-y-1">
              <p className="text-stone-300 font-medium">Via Roma 1954 (Cinema Hall)</p>
              <p>Centro Storico & Cinema Arts District</p>
              <p>Firenze / Milano Cuisine</p>
              <p className="pt-2 text-stone-300">
                <span className="text-stone-400">({mode === 'en' ? 'phone' : 'telefono'})</span>{' '}
                <a href="tel:027-463-5236" className="hover:text-red-500 transition-colors">
                  027-463-5236
                </a>
              </p>
              <p>
                <span className="text-stone-400">[e-mail]</span>{' '}
                <a
                  href="mailto:support@courtyardpizza.com"
                  className="hover:text-red-500 transition-colors"
                >
                  support@courtyardpizza.com
                </a>
              </p>
            </div>

            {/* Social Icons in Gold */}
            <div className="flex items-center gap-2 pt-4">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full border border-amber-500/80 text-amber-500 hover:bg-amber-500 hover:text-black flex items-center justify-center text-xs transition-all font-serif font-bold"
              >
                f
              </a>
              <a
                href="#google"
                aria-label="Google Plus"
                className="w-6 h-6 rounded-full border border-amber-500/80 text-amber-500 hover:bg-amber-500 hover:text-black flex items-center justify-center text-[10px] transition-all font-bold"
              >
                g+
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-6 h-6 rounded-full border border-amber-500/80 text-amber-500 hover:bg-amber-500 hover:text-black flex items-center justify-center text-xs transition-all"
              >
                <Twitter className="w-3 h-3" />
              </a>
              <a
                href="#whatsapp"
                aria-label="WhatsApp"
                className="w-6 h-6 rounded-full border border-amber-500/80 text-amber-500 hover:bg-amber-500 hover:text-black flex items-center justify-center text-xs transition-all"
              >
                <MessageCircle className="w-3 h-3" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-6 h-6 rounded-full border border-amber-500/80 text-amber-500 hover:bg-amber-500 hover:text-black flex items-center justify-center text-xs transition-all"
              >
                <Instagram className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: WORKING HOURS - Italian First */}
          <div className="flex flex-col items-start space-y-3">
            <div>
              <h3 className="font-slab text-xl text-white tracking-wider uppercase">
                {mode === 'en' ? 'WORKING HOURS' : 'ORARI DI APERTURA'}
              </h3>
              {mode === 'it-first' && (
                <span className="text-[11px] font-sans text-stone-500 uppercase tracking-wider block">
                  Opening Hours & Screenings
                </span>
              )}
            </div>

            <div className="text-xs sm:text-[13px] text-stone-400 leading-relaxed font-sans space-y-2">
              <p className="font-semibold text-stone-200">
                {mode === 'en'
                  ? 'Daily Service: 9:00 AM – 10:00 PM'
                  : 'Lunedì – Domenica: 09:00 – 22:00'}
              </p>
              <p>
                {mode === 'en'
                  ? 'Friday: Kitchen pause from 10:00 AM – 2:00 PM'
                  : 'Venerdì: Chiusura tecnica 10:00 – 14:00'}
              </p>
              <p className="text-amber-400 font-medium">
                {mode === 'en' ? 'Delivery Online: 24/7 Active' : 'Servizio a Domicilio: 24/7 Sempre Attivo'}
              </p>

              <div className="pt-4 border-t border-stone-800/80 mt-4">
                <p className="text-[11px] text-stone-500 uppercase tracking-widest font-mono">
                  {mode === 'en' ? 'Vintage Cinema Screenings' : 'Proiezioni Cinema 35mm'}
                </p>
                <p className="text-xs text-amber-400 mt-1">
                  {mode === 'en'
                    ? 'Classic Italian films showing daily at 1:00 PM & 7:30 PM'
                    : 'Capolavori del cinema italiano in proiezione ogni giorno alle 13:00 e 19:30'}
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: CONTACT US - Italian First */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="font-slab text-xl text-white tracking-wider uppercase mb-1">
                {mode === 'en' ? 'CONTACT US' : 'CONTATTACI'}
              </h3>
              {mode === 'it-first' && (
                <span className="text-[11px] font-sans text-stone-500 uppercase tracking-wider mb-3 block">
                  Send Us a Message
                </span>
              )}
            </div>

            {submitted ? (
              <div className="w-full bg-stone-900 border border-green-800/60 p-4 rounded text-center my-auto">
                <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">
                  {mode === 'en'
                    ? 'Thank you for reaching out!'
                    : 'Grazie per averci contattato!'}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  {mode === 'en'
                    ? 'We have received your message and will respond shortly.'
                    : 'Abbiamo ricevuto la tua richiesta e ti risponderemo a breve.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-2.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={
                      mode === 'en'
                        ? 'Full Name'
                        : mode === 'it'
                        ? 'Nome e Cognome'
                        : 'Nome / Full Name'
                    }
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#202020] border border-stone-700/80 px-3 py-1.5 rounded text-xs text-white placeholder-stone-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder={
                      mode === 'en'
                        ? 'Email Address'
                        : mode === 'it'
                        ? 'Indirizzo Email'
                        : 'Email'
                    }
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#202020] border border-stone-700/80 px-3 py-1.5 rounded text-xs text-white placeholder-stone-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={
                      mode === 'en'
                        ? 'Phone Number'
                        : mode === 'it'
                        ? 'Numero di Telefono'
                        : 'Telefono / Phone'
                    }
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#202020] border border-stone-700/80 px-3 py-1.5 rounded text-xs text-white placeholder-stone-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder={
                      mode === 'en'
                        ? 'Your message or special request...'
                        : mode === 'it'
                        ? 'Il tuo messaggio o richiesta speciale...'
                        : 'Messaggio / Your message...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#202020] border border-stone-700/80 px-3 py-1.5 rounded text-xs text-white placeholder-stone-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-widest px-6 py-2 rounded shadow transition-all cursor-pointer font-sans"
                >
                  {loading
                    ? (mode === 'en' ? 'SENDING...' : 'INVIO IN CORSO...')
                    : (mode === 'en'
                        ? 'SUBMIT MESSAGE'
                        : mode === 'it'
                        ? 'INVIA IL MESSAGGIO'
                        : 'INVIA / SUBMIT')}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-6 border-t border-stone-800 text-center text-[11px] text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Noi, la qualità. Tutti i diritti riservati / All Rights Reserved.</span>
          <span className="text-stone-400 font-medium">Autentica Cucina Italiana Tradizionale</span>
        </div>
      </div>
    </footer>
  );
};
