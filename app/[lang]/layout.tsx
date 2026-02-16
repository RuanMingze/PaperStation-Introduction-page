import type { Metadata } from 'next'
import { translations, Language } from '@/lib/i18n-client'

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Language }>
}): Promise<Metadata> {
  const { lang } = await params
  const t = translations[lang]

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    icons: {
      icon: '/images/logo.png',
    },
  }
}

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
