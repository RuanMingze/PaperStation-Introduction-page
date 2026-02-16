import { MetadataRoute } from 'next'

const languages = ['zh', 'en', 'ja', 'ko', 'es', 'fr', 'de', 'ru', 'pt', 'ar']
const baseUrl = 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', 'download', 'language']
  
  const entries = languages.flatMap(lang => 
    pages.map(page => ({
      url: `${baseUrl}/${lang}${page ? `/${page}` : ''}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )
  
  return entries
}