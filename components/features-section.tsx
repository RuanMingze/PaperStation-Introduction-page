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
import { Language, translations } from "@/lib/i18n"

const mainFeaturesZh = [
  {
    icon: Brain,
    title: "知识捕获",
    description:
      "浏览网页时自动提取关键信息，智能分类并建立知识点之间的逻辑联系，所有数据保存在本地确保隐私安全。",
    color: "text-primary",
    bg: "bg-accent",
  },
  {
    icon: FileText,
    title: "智能总结",
    description:
      "一键生成页面核心内容摘要，自动提取 5 个核心要点、3 个关键术语解释和 2 个实际应用案例。",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: LayoutGrid,
    title: "结构化导出",
    description:
      "支持导出为 PDF、HTML 等格式，自动生成目录导航和精美排版，支持多种可定制模板。",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
]

const mainFeaturesEn = [
  {
    icon: Brain,
    title: "Knowledge Capture",
    description:
      "Automatically extract key information while browsing, intelligently categorize and establish logical connections between knowledge points, all data stored locally to ensure privacy and security.",
    color: "text-primary",
    bg: "bg-accent",
  },
  {
    icon: FileText,
    title: "Smart Summarization",
    description:
      "Generate core content summaries with one click, automatically extract 5 key points, 3 key term explanations, and 2 practical application cases.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: LayoutGrid,
    title: "Structured Export",
    description:
      "Support export to PDF, HTML and other formats, automatically generate directory navigation and beautiful layout, support multiple customizable templates.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
]

const subFeaturesZh = [
  {
    icon: Search,
    title: "ChickRubGo 搜索",
    description: "集成本土化搜索引擎，更符合中文用户需求",
  },
  {
    icon: Zap,
    title: "快速启动",
    description: "优化启动速度，秒开浏览器",
  },
  {
    icon: Bookmark,
    title: "书签管理",
    description: "便捷的书签管理和快速访问",
  },
  {
    icon: Moon,
    title: "深色模式",
    description: "内置深色模式，保护你的视力",
  },
  {
    icon: Shield,
    title: "隐私优先",
    description: "隐私优先设计，数据本地存储",
  },
  {
    icon: Keyboard,
    title: "快捷键支持",
    description: "丰富的快捷键支持，提升操作效率",
  },
]

const subFeaturesEn = [
  {
    icon: Search,
    title: "ChickRubGo Search",
    description: "Integrated localized search engine, better suited for Chinese users",
  },
  {
    icon: Zap,
    title: "Fast Launch",
    description: "Optimized launch speed, open browser in seconds",
  },
  {
    icon: Bookmark,
    title: "Bookmark Management",
    description: "Convenient bookmark management and quick access",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Built-in dark mode to protect your eyes",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Privacy-first design, local data storage",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description: "Rich keyboard shortcuts to improve efficiency",
  },
]

function FeatureCard({ feature, idx }: { feature: any; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

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
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}
      >
        <feature.icon className={`h-6 w-6 ${feature.color}`} />
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
  const safeLang = (lang === 'zh' || lang === 'en') ? lang : 'zh'
  const mainFeatures = safeLang === 'zh' ? mainFeaturesZh : mainFeaturesEn
  const subFeatures = safeLang === 'zh' ? subFeaturesZh : subFeaturesEn
  const t = translations[safeLang].features

  return (
    <section id="features" className="bg-[hsl(var(--feature-bg))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.title}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {safeLang === 'zh' ? '不只是浏览器，更是你的知识助手' : 'More than a browser, your knowledge assistant'}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {safeLang === 'zh' ? '三大核心功能，将碎片化浏览转化为系统化知识' : 'Three core features to transform fragmented browsing into systematic knowledge'}
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
