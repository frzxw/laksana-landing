import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import id from './locales/id';
import type { Translations } from './types';

// Type-safe i18n configuration
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: Translations;
    };
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    // Enhanced debugging in development
    debug: import.meta.env.DEV,
    // Return key if translation is missing
    saveMissing: import.meta.env.DEV,
    // Callback for missing keys (useful for development)
    missingKeyHandler: (lngs, ns, key) => {
      if (import.meta.env.DEV) {
        console.warn(`Missing translation key: ${key} for languages: ${lngs.join(', ')}`);
      }
    }
  });

// Store language preference
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
  document.documentElement.lang = lng;
});

// Set initial lang attribute
document.documentElement.lang = i18n.language;

export default i18n;