import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const { mode } = useLanguage();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2',
    seatingArea: 'Platea Cinema (Vista Schermo)',
    specialNotes: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-[#18181b] border border-stone-700 text-stone-100 rounded-xl shadow-2xl overflow-hidden">
        {/* Modal Header - Italian First */}
        <div className="bg-stone-900 border-b border-stone-800 p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-red-500" />
            <div>
              <h3 className="font-slab text-xl text-white tracking-wide uppercase leading-none">
                {mode === 'en' ? 'Table Reservation' : 'PRENOTAZIONE TAVOLO'}
              </h3>
              {mode === 'it-first' && (
                <span className="text-[11px] text-stone-400 font-sans tracking-normal uppercase">
                  Reserve Your Dining Table
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
            <p className="text-stone-400 text-xs">
              {mode === 'en'
                ? 'Experience authentic Italian cuisine inside our historic cinema theater with live screenings.'
                : mode === 'it'
                ? 'Vivi un’autentica cena italiana all’interno del nostro cinema storico con proiezioni d’epoca.'
                : 'Vivi un’autentica cena italiana all’interno del cinema storico. Experience authentic dining with live screenings.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  {mode === 'en' ? 'Full Name *' : mode === 'it' ? 'Nome e Cognome *' : 'Nome e Cognome / Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Rossi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-red-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  {mode === 'en' ? 'Phone Number *' : mode === 'it' ? 'Numero di Telefono *' : 'Telefono / Phone *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="027-463-5236"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-red-500 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                {mode === 'en' ? 'Email Address *' : mode === 'it' ? 'Indirizzo Email *' : 'Email *'}
              </label>
              <input
                type="email"
                required
                placeholder="nome.cognome@email.it"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-red-500 text-xs"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-red-400" />
                  <span>{mode === 'en' ? 'Date' : 'Data'}</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-2 text-white focus:outline-none focus:border-red-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-red-400" />
                  <span>{mode === 'en' ? 'Time' : 'Ora'}</span>
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-2 text-white focus:outline-none focus:border-red-500 text-xs"
                >
                  <option value="12:00">12:00 (Pranzo)</option>
                  <option value="13:30">13:30 (Film 1)</option>
                  <option value="18:00">18:00 (Aperitivo)</option>
                  <option value="19:30">19:30 (Film 2)</option>
                  <option value="20:30">20:30 (Cena)</option>
                  <option value="21:30">21:30 (Tarda Cena)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-red-400" />
                  <span>{mode === 'en' ? 'Guests' : 'Ospiti'}</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-2 text-white focus:outline-none focus:border-red-500 text-xs"
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Persone</option>
                  <option value="3">3 Persone</option>
                  <option value="4">4 Persone</option>
                  <option value="5">5 Persone</option>
                  <option value="6+">6+ Ospiti (Gruppo)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                {mode === 'en'
                  ? 'Seating Atmosphere Preference'
                  : mode === 'it'
                  ? 'Area del Cinema Preferita'
                  : 'Area Preferita / Seating Preference'}
              </label>
              <select
                value={formData.seatingArea}
                onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-red-500 text-xs"
              >
                <option value="Platea Cinema (Vista Schermo)">
                  Platea Storica (Vista Frontale Schermo 35mm)
                </option>
                <option value="Privée del Mezzanino in Velluto">
                  Salotto in Velluto Mezzanino (Romantico & Riservato)
                </option>
                <option value="Tavolo Vicino al Forno a Legna">
                  Tavolo dello Chef (Di fronte al Forno a Legna)
                </option>
                <option value="Cantina a Volte Sotterranea">
                  Cantina Sotterranea (Tra botti e riserve storiche)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                {mode === 'en'
                  ? 'Special Requests or Dietary Notes (Optional)'
                  : mode === 'it'
                  ? 'Note Particolari o Esigenze Alimentari (Opzionale)'
                  : 'Note Particolari / Dietary Notes (Optional)'}
              </label>
              <input
                type="text"
                placeholder={
                  mode === 'en'
                    ? 'Anniversary, birthday, gluten-free, etc.'
                    : 'Anniversario, compleanno, senza glutine, ecc.'
                }
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-red-500 text-xs"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-stone-400 hover:text-white cursor-pointer"
              >
                {mode === 'en' ? 'Cancel' : 'Annulla'}
              </button>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-slab text-xs uppercase tracking-wider px-6 py-2.5 rounded shadow cursor-pointer font-bold"
              >
                {mode === 'en'
                  ? 'CONFIRM RESERVATION'
                  : mode === 'it'
                  ? 'CONFERMA PRENOTAZIONE'
                  : 'CONFERMA PRENOTAZIONE / CONFIRM'}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto border border-red-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-slab text-2xl text-white uppercase tracking-wider">
              {mode === 'en' ? 'Reservation Confirmed!' : 'Prenotazione Confermata!'}
            </h4>
            <p className="text-stone-300 text-xs leading-relaxed max-w-sm mx-auto">
              Grazie mille, <span className="text-amber-400 font-bold">{formData.name}</span>!
              {mode === 'en'
                ? ` Your table for ${formData.guests} guests on ${formData.date} at ${formData.time} in ${formData.seatingArea} is reserved.`
                : ` Il tuo tavolo per ${formData.guests} persone per il giorno ${formData.date} alle ore ${formData.time} (${formData.seatingArea}) è stato riservato.`}
            </p>
            <div className="bg-stone-900 border border-stone-800 rounded p-3 text-xs font-mono text-stone-400 max-w-xs mx-auto">
              Codice Prenotazione: #CP-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <button
              onClick={handleReset}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-2 rounded font-sans cursor-pointer"
            >
              {mode === 'en' ? 'Close' : 'Chiudi'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
