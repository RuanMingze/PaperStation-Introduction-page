'use client'

import { useState, useEffect, useRef } from 'react'
import { Download } from 'lucide-react'
import { Language, translations } from '@/lib/i18n'

export function DownloadSection({ lang }: { lang: Language }) {
  const safeLang = (lang === 'zh' || lang === 'en') ? lang : 'zh'
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const t = translations[safeLang].download

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
    <section className="py-24" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6">
        <div 
          ref={cardRef}
          className="relative mx-auto max-w-3xl text-center bg-[hsl(var(--feature-bg))] rounded-2xl shadow-lg p-12"
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
          <div className="mb-8 flex justify-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="p-4 bg-primary/10 rounded-full">
              <Download className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-6" data-aos="fade-up" data-aos-delay="200">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-aos="fade-up" data-aos-delay="300">
            {t.description}
          </p>
          <a
            href={`/${safeLang}/download`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
            data-aos="fade-up" data-aos-delay="400"
          >
            <Download className="h-5 w-5" />
            {t.button}
          </a>
        </div>
      </div>
    </section>
  )
}
