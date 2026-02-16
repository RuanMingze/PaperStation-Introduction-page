import { translations, Language } from '@/lib/i18n-client'
import Link from 'next/link'
import { ArrowLeft, Mail, Globe } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const languages: { code: Language; name: string; flag: string; gradient: string }[] = [
  { code: 'zh', name: '中文', flag: '🇨🇳', gradient: 'from-red-500 to-red-600' },
  { code: 'en', name: 'English', flag: '🇬🇧', gradient: 'from-blue-500 to-blue-600' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', gradient: 'from-pink-500 to-pink-600' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', gradient: 'from-purple-500 to-purple-600' },
  { code: 'es', name: 'Español', flag: '🇪🇸', gradient: 'from-orange-500 to-orange-600' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', gradient: 'from-indigo-500 to-indigo-600' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', gradient: 'from-yellow-500 to-yellow-600' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', gradient: 'from-teal-500 to-teal-600' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', gradient: 'from-green-500 to-green-600' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', gradient: 'from-emerald-500 to-emerald-600' }
]

export async function generateStaticParams() {
  return languages.map(lang => ({ lang: lang.code }))
}

export default async function LanguagePage({
  params
}: {
  params: Promise<{ lang: Language }>
}) {
  const { lang } = await params
  const t = translations[lang]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} />
      <section className="relative flex-1 overflow-hidden bg-[hsl(var(--hero-bg))]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              data-aos="fade-up"
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {t.language.title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-4 text-lg text-muted-foreground"
            >
              {t.language.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mb-12 rounded-2xl bg-card border border-border p-8 shadow-xl"
            >
              <h2 className="mb-6 text-2xl font-semibold text-foreground">
                {t.language.currentLanguage}
              </h2>
              <div className="rounded-xl bg-primary/10 p-6">
                <p className="text-2xl font-bold text-primary">
                  {languages.find(l => l.code === lang)?.name}
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mb-12 rounded-2xl bg-card border border-border p-8 shadow-xl"
            >
              <h2 className="mb-8 text-2xl font-semibold text-foreground">
                {t.language.availableLanguages}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {languages
                  .filter(l => l.code !== lang)
                  .map((language, index) => (
                    <Link
                      key={language.code}
                      href={`/${language.code}`}
                      data-aos="fade-up"
                      data-aos-delay={300 + index * 50}
                      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${language.gradient} p-8 text-white transition-all hover:scale-105 hover:shadow-2xl`}
                    >
                      <div className="relative z-10">
                        <div className="mb-4 text-5xl">{language.flag}</div>
                        <h3 className="mb-2 text-2xl font-bold">{language.name}</h3>
                        <p className="text-lg opacity-90">{t.language.switchTo} {language.name}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="rounded-2xl bg-card border border-border p-8 shadow-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {t.language.requestLanguage}
                </h2>
              </div>
              <p className="mb-8 text-lg text-muted-foreground">
                {t.language.requestLanguageDesc}
              </p>
              <a
                href="mailto:xmt20160124@outlook.com?subject=Request%20More%20Languages%20for%20PaperStation%20Browser"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-primary/90 hover:to-primary/70 hover:scale-105 hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                {t.language.sendEmail}
              </a>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="900"
              className="mt-12 text-center"
            >
              <Link
                href={`/${lang}`}
                className="inline-flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-5 w-5" />
                {t.language.back}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer lang={lang} />
    </div>
  )
}
