"use client"

import { useState, useEffect, useCallback } from "react"
import { useAnimationStore } from "@/lib/animation-state"
import { Language } from "@/lib/i18n-client"

const wordsZh = ["聪明", "快速", "智能", "丰富", "安全", "高效", "便捷", "稳定", "现代", "强大", "灵活", "优雅", "可靠", "轻量", "专业", "创新"]
const wordsEn = ["smart", "fast", "intelligent", "rich", "secure", "efficient", "convenient", "stable", "modern", "powerful", "flexible", "elegant", "reliable", "lightweight", "professional", "innovative"]
const wordsJa = ["スマート", "高速", "インテリジェント", "豊富", "安全", "効率的", "便利", "安定", "現代的", "強力", "柔軟", "エレガント", "信頼性", "軽量", "プロフェッショナル", "革新的"]
const wordsKo = ["스마트", "빠른", "지능적", "풍부한", "안전한", "효율적인", "편리한", "안정적인", "현대적인", "강력한", "유연한", "우아한", "신뢰할 수 있는", "경량", "전문적인", "혁신적인"]
const wordsEs = ["inteligente", "rápido", "inteligente", "rico", "seguro", "eficiente", "conveniente", "estable", "moderno", "poderoso", "flexible", "elegante", "confiable", "ligero", "profesional", "innovador"]
const wordsFr = ["intelligent", "rapide", "intelligent", "riche", "sécurisé", "efficace", "pratique", "stable", "moderne", "puissant", "flexible", "élégant", "fiable", "léger", "professionnel", "innovant"]
const wordsDe = ["smart", "schnell", "intelligent", "reich", "sicher", "effizient", "bequem", "stabil", "modern", "leistungsstark", "flexibel", "elegant", "zuverlässig", "leicht", "professionell", "innovativ"]
const wordsRu = ["умный", "быстрый", "интеллектуальный", "богатый", "безопасный", "эффективный", "удобный", "стабильный", "современный", "мощный", "гибкий", "элегантный", "надёжный", "лёгкий", "профессиональный", "инновационный"]
const wordsPt = ["inteligente", "rápido", "inteligente", "rico", "seguro", "eficiente", "conveniente", "estável", "moderno", "poderoso", "flexível", "elegante", "confiável", "leve", "profissional", "inovador"]
const wordsAr = ["ذكي", "سريع", "ذكي", "غني", "آمن", "كفء", "مريح", "مستقر", "حديث", "قوي", "مرن", "أنيق", "موثوق", "خفيف", "محترف", "مبتكر"]

export function RotatingText({ lang }: { lang: Language }) {
  const safeLang = lang
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<"in" | "out">("in")
  const { isPaused } = useAnimationStore()
  const words = {
    zh: wordsZh,
    en: wordsEn,
    ja: wordsJa,
    ko: wordsKo,
    es: wordsEs,
    fr: wordsFr,
    de: wordsDe,
    ru: wordsRu,
    pt: wordsPt,
    ar: wordsAr
  }[safeLang] || wordsEn

  const cycle = useCallback(() => {
    if (isPaused) return
    
    setPhase("out")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
      setPhase("in")
    }, 400)
  }, [isPaused])

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(cycle, 2600)
    return () => clearInterval(interval)
  }, [cycle, isPaused])

  return (
    <span className="relative inline min-w-[2.5ch] text-primary">
      <span
        className="inline transition-all duration-400 ease-in-out"
        style={{
          opacity: phase === "in" ? 1 : 0,
          transform: phase === "in" ? "translateY(0)" : "translateY(-20px)",
          filter: phase === "in" ? "blur(0px)" : "blur(4px)",
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}
