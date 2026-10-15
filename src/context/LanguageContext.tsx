import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LanguageMode = 'it-first' | 'it' | 'en';

interface LanguageContextType {
  mode: LanguageMode;
  setMode: (mode: LanguageMode) => void;
  isItFirst: boolean;
  isItOnly: boolean;
  isEnOnly: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'noi_la_qualita_lang_mode';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default to 'it-first' as specifically requested ("Italian first, english text")
  const [mode, setModeState] = useState<LanguageMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'it-first' || saved === 'it' || saved === 'en') {
        return saved;
      }
    } catch {
      // ignore localStorage errors
    }
    return 'it-first';
  });

  const setMode = (newMode: LanguageMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem(STORAGE_KEY, newMode);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = mode === 'en' ? 'en' : 'it';
  }, [mode]);

  const value: LanguageContextType = {
    mode,
    setMode,
    isItFirst: mode === 'it-first',
    isItOnly: mode === 'it',
    isEnOnly: mode === 'en',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * Reusable component to render bilingual text with Italian first and English text
 */
interface BilingualTextProps {
  it: string;
  en: string;
  className?: string;
  itClassName?: string;
  enClassName?: string;
  separator?: string;
  layout?: 'stacked' | 'inline' | 'slash';
}

export const BilingualText: React.FC<BilingualTextProps> = ({
  it,
  en,
  className = '',
  itClassName = '',
  enClassName = '',
  separator = ' · ',
  layout = 'stacked',
}) => {
  const { mode } = useLanguage();

  if (mode === 'it') {
    return <span className={`${itClassName} ${className}`}>{it}</span>;
  }

  if (mode === 'en') {
    return <span className={`${enClassName} ${className}`}>{en}</span>;
  }

  // mode === 'it-first'
  if (layout === 'inline') {
    return (
      <span className={className}>
        <span className={itClassName}>{it}</span>
        <span className="text-stone-400 mx-1">{separator}</span>
        <span className={`text-stone-500 font-normal ${enClassName}`}>{en}</span>
      </span>
    );
  }

  if (layout === 'slash') {
    return (
      <span className={className}>
        <span className={itClassName}>{it}</span>
        <span className="opacity-50 mx-1 font-light">/</span>
        <span className={`opacity-80 font-normal ${enClassName}`}>{en}</span>
      </span>
    );
  }

  // layout === 'stacked'
  return (
    <div className={`flex flex-col ${className}`}>
      <span className={itClassName}>{it}</span>
      <span className={`text-xs opacity-80 mt-0.5 font-normal tracking-normal italic ${enClassName}`}>
        {en}
      </span>
    </div>
  );
};
