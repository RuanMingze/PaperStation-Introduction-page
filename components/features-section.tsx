'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Brain,
  FileText,
  Search,
  Zap,
  Bookmark,
  Keyboard,
  Moon,
  Shield,
  LayoutGrid,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Language, translations } from "@/lib/i18n-client"

function FeatureCard({ feature, idx }: { feature: any; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isDark = mounted && theme === 'dark'

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      setMousePosition({ x, y })
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseenter', () => setIsHovered(true))
      card.addEventListener('mouseleave', () => setIsHovered(false))
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseenter', () => setIsHovered(true))
        card.removeEventListener('mouseleave', () => setIsHovered(false))
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      key={feature.title}
      data-aos="fade-up"
      data-aos-delay={idx * 100}
      className="relative group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(224, 112, 32, 0.15), transparent 60%)`,
            opacity: 1
          }}
        />
      )}
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${isDark ? 'bg-muted' : feature.bg}`}
      >
        <feature.icon className={`h-6 w-6 ${isDark ? 'text-muted-foreground' : feature.color}`} />
      </div>
      <h3 className="text-xl font-semibold text-foreground">
        {feature.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  )
}

function SubFeatureCard({ feature, idx }: { feature: any; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isDark = mounted && theme === 'dark'

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      setMousePosition({ x, y })
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseenter', () => setIsHovered(true))
      card.addEventListener('mouseleave', () => setIsHovered(false))
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseenter', () => setIsHovered(true))
        card.removeEventListener('mouseleave', () => setIsHovered(false))
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      key={feature.title}
      data-aos="fade-up"
      data-aos-delay={idx * 80}
      className="relative flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20"
    >
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(224, 112, 32, 0.15), transparent 60%)`,
            opacity: 1
          }}
        />
      )}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
        <feature.icon className="h-5 w-5 text-muted-foreground" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground">
          {feature.title}
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export function FeaturesSection({ lang }: { lang: Language }) {
  const safeLang = lang || 'en'
  const t = translations[safeLang]?.features || translations['en'].features
  const icons = {
    capture: Brain,
    summary: FileText,
    export: LayoutGrid,
    search: Search,
    launch: Zap,
    bookmark: Bookmark,
    darkMode: Moon,
    privacy: Shield,
    shortcuts: Keyboard
  }
  const mainFeatures = t.mainFeatures.map((feature, idx) => ({
    ...feature,
    icon: [Brain, FileText, LayoutGrid][idx]
  }))
  const subFeatures = t.subFeatures.map((feature, idx) => ({
    ...feature,
    icon: [Search, Zap, Bookmark, Moon, Shield, Keyboard][idx]
  }))

  return (
    <section id="features" className="bg-[hsl(var(--feature-bg))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.title}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {t.subtitle2}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.subtitle3}
          </p>
        </div>

        {/* Main 3 features */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {mainFeatures.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} idx={idx} />
          ))}
        </div>

        {/* Sub features grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subFeatures.map((feature, idx) => (
            <SubFeatureCard key={feature.title} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
