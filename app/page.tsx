import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { InstallSection } from "@/components/install-section"
import { ContributeSection } from "@/components/contribute-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <TechStackSection />
        <InstallSection />
        <ContributeSection />
      </main>
      <Footer />
    </div>
  )
}
