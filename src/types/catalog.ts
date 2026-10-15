export type Language = 'it' | 'en';

export type CategoryKey = 'pasta' | 'oils' | 'sauces' | 'sweets' | 'preserves';

export type CertificationType = 'DOP' | 'IGP' | 'BIO' | 'Presidio Slow Food';

export interface Product {
  id: string;
  slug: string;
  name: {
    it: string;
    en: string;
  };
  category: CategoryKey;
  region: string;
  subRegion: string;
  certification: CertificationType;
  shortDescription: {
    it: string;
    en: string;
  };
  fullDescription: {
    it: string;
    en: string;
  };
  originNote: {
    it: string;
    en: string;
  };
  tastingNotes: {
    it: string[];
    en: string[];
  };
  pairings: {
    it: string[];
    en: string[];
  };
  ingredients: {
    it: string;
    en: string;
  };
  format: string;
  shelfLife: string;
  images: string[];
  status: 'published' | 'draft';
  order: number;
  yearOrHarvest: string;
  seoTitle: {
    it: string;
    en: string;
  };
  seoDescription: {
    it: string;
    en: string;
  };
}
