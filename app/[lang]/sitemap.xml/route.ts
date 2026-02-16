import { Language } from '@/lib/i18n'

const languages = ['zh', 'en', 'ja', 'ko', 'es', 'fr', 'de', 'ru', 'pt', 'ar']
const baseUrl = 'http://localhost:3000'

export async function generateStaticParams() {
  return languages.map(lang => ({ lang }))
}

export async function GET(request: Request, { params }: { params: { lang: Language } }) {
  const { lang } = params
  
  // 生成XML内容，使用正确的XSLT路径
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/${lang}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/${lang}/download</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/${lang}/language</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`
  
  // 设置响应头为XML
  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}