import { Navbar } from "@/components/navbar"
import { HeroSection, TabsSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { SecuritySection } from "@/components/security-section"
import { DownloadSection } from "@/components/download-section"
import { ContributeSection } from "@/components/contribute-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Language } from "@/lib/i18n-client"

export async function generateStaticParams() {
  return [
    { lang: 'zh' },
    { lang: 'en' },
    { lang: 'ja' },
    { lang: 'ko' },
    { lang: 'es' },
    { lang: 'fr' },
    { lang: 'de' },
    { lang: 'ru' },
    { lang: 'pt' },
    { lang: 'ar' }
  ]
}

export default async function HomePage({
  params
}: {
  params: Promise<{ lang: Language }>
}) {
  const { lang } = await params

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar lang={lang} />
      <main>
        <HeroSection lang={lang} />
        <TabsSection lang={lang} />
        <FeaturesSection lang={lang} />
        <ComparisonSection lang={lang} />
        <TechStackSection lang={lang} />
        <SecuritySection lang={lang} />
        <ContributeSection lang={lang} />
        <FAQSection lang={lang} />
        <DownloadSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}