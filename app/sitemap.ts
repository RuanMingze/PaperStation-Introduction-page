import { MetadataRoute } from 'next'

const baseUrl = 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', 'download', 'extension-error']
  
  const entries = pages.map(page => ({
    url: `${baseUrl}${page ? `/${page}` : ''}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
  
  return entries
}