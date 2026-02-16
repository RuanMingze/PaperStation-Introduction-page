import zhTranslations from '@/locales/zh.json'
import enTranslations from '@/locales/en.json'
import jaTranslations from '@/locales/ja.json'
import koTranslations from '@/locales/ko.json'
import esTranslations from '@/locales/es.json'
import frTranslations from '@/locales/fr.json'
import deTranslations from '@/locales/de.json'
import ruTranslations from '@/locales/ru.json'
import ptTranslations from '@/locales/pt.json'
import arTranslations from '@/locales/ar.json'

export const translations = {
  zh: zhTranslations,
  en: enTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  ru: ruTranslations,
  pt: ptTranslations,
  ar: arTranslations
}

export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'ru' | 'pt' | 'ar'
export type TranslationKey = keyof typeof translations.zh