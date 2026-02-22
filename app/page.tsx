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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <TabsSection />
        <FeaturesSection />
        <ComparisonSection />
        <TechStackSection />
        <SecuritySection />
        <ContributeSection />
        <FAQSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
