/**
 * i18n Utility Helpers
 * 
 * Common utilities for working with i18n in the application
 */

import { useTranslation } from 'react-i18next';

/**
 * Hook for type-safe translation with namespace support
 */
export function useTypedTranslation() {
  const { t, i18n } = useTranslation();
  
  return {
    t: t as (key: string, options?: any) => string,
    i18n,
    language: i18n.language,
    changeLanguage: (lng: string) => i18n.changeLanguage(lng),
  };
}

/**
 * Format date based on locale
 */
export function formatDate(
  date: Date | string,
  locale: string = 'en',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format number based on locale
 */
export function formatNumber(
  value: number,
  locale: string = 'en',
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

/**
 * Format currency based on locale
 */
export function formatCurrency(
  value: number,
  currency: string = 'USD',
  locale: string = 'en'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

/**
 * Get localized route
 */
export function getLocalizedRoute(path: string, language: string): string {
  // If language is not default (en), prefix path with language code
  if (language !== 'en') {
    return `/${language}${path}`;
  }
  
  return path;
}

/**
 * Get language display name
 */
export function getLanguageName(code: string): string {
  const names: Record<string, string> = {
    en: 'English',
    id: 'Bahasa Indonesia',
  };
  
  return names[code] || code;
}

/**
 * Validate if translation key exists
 */
export function hasTranslation(key: string): boolean {
  const { i18n } = useTranslation();
  return i18n.exists(key);
}

/**
 * Get all supported languages
 */
export function getSupportedLanguages(): Array<{ code: string; name: string }> {
  return [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Bahasa Indonesia' },
  ];
}

/**
 * Detect browser language
 */
export function detectBrowserLanguage(): string {
  const browserLang = navigator.language.split('-')[0];
  const supported = ['en', 'id'];
  
  return supported.includes(browserLang) ? browserLang : 'en';
}
