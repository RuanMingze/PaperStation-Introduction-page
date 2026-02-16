import fs from 'fs'
import path from 'path'

const localesPath = path.join(process.cwd(), 'locales')

function loadLocale(locale: string) {
  const filePath = path.join(localesPath, `${locale}.json`)
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
  }
  return null
}

export const translations = {
  zh: loadLocale('zh') || {},
  en: loadLocale('en') || {},
  ja: loadLocale('ja') || {},
  ko: loadLocale('ko') || {},
  es: loadLocale('es') || {},
  fr: loadLocale('fr') || {},
  de: loadLocale('de') || {},
  ru: loadLocale('ru') || {},
  pt: loadLocale('pt') || {},
  ar: loadLocale('ar') || {}
}

export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'ru' | 'pt' | 'ar'
export type TranslationKey = keyof typeof translations.zh