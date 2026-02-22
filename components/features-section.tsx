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

export function FeaturesSection() {
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
  
  const mainFeatures = [
    {
      title: "智能截图",
      description: "使用 AI 技术自动识别网页内容，生成精准摘要",
      bg: "bg-blue-100",
      color: "text-blue-600",
      icon: icons.capture
    },
    {
      title: "内容总结",
      description: "快速提取文章要点，节省阅读时间",
      bg: "bg-purple-100",
      color: "text-purple-600",
      icon: icons.summary
    },
    {
      title: "导出功能",
      description: "支持多种格式导出，方便保存和分享",
      bg: "bg-green-100",
      color: "text-green-600",
      icon: icons.export
    }
  ]
  
  const subFeatures = [
    {
      title: "快速搜索",
      description: "集成多种搜索引擎，一键切换",
      icon: icons.search
    },
    {
      title: "快速启动",
      description: "支持快捷键启动常用应用",
      icon: icons.launch
    },
    {
      title: "书签管理",
      description: "智能分类和快速访问书签",
      icon: icons.bookmark
    },
    {
      title: "深色模式",
      description: "护眼深色主题，保护视力",
      icon: icons.darkMode
    },
    {
      title: "隐私保护",
      description: "强化隐私设置，保护个人信息",
      icon: icons.privacy
    },
    {
      title: "快捷键",
      description: "丰富的快捷键支持，提升效率",
      icon: icons.shortcuts
    }
  ]

  return (
    <section id="features" className="bg-[hsl(var(--feature-bg))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            核心功能
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            为您打造极致浏览体验
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            PaperStation 集成了多种实用功能，让您的浏览体验更加高效便捷
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {mainFeatures.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} idx={idx} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subFeatures.map((feature, idx) => (
            <SubFeatureCard key={feature.title} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
