'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Monitor,
  Globe,
  Code,
  Server,
  Database,
  Package
} from 'lucide-react'
import { Language } from "@/lib/i18n"

const techStackZh = [
  { name: "Electron 40", description: "跨平台桌面应用框架", icon: Monitor, color: "text-blue-500" },
  { name: "Chromium", description: "高性能网页渲染引擎", icon: Globe, color: "text-red-500" },
  { name: "HTML / CSS / JS", description: "原生前端技术", icon: Code, color: "text-yellow-500" },
  { name: "Node.js", description: "后端运行环境", icon: Server, color: "text-green-500" },
  { name: "IndexedDB", description: "本地知识存储", icon: Database, color: "text-purple-500" },
  { name: "electron-builder", description: "应用打包与分发", icon: Package, color: "text-orange-500" },
]

const techStackEn = [
  { name: "Electron 40", description: "Cross-platform desktop application framework", icon: Monitor, color: "text-blue-500" },
  { name: "Chromium", description: "High-performance web rendering engine", icon: Globe, color: "text-red-500" },
  { name: "HTML / CSS / JS", description: "Native frontend technologies", icon: Code, color: "text-yellow-500" },
  { name: "Node.js", description: "Backend runtime environment", icon: Server, color: "text-green-500" },
  { name: "IndexedDB", description: "Local knowledge storage", icon: Database, color: "text-purple-500" },
  { name: "electron-builder", description: "Application packaging and distribution", icon: Package, color: "text-orange-500" },
]

function TechStackCard({ tech, idx }: { tech: any; idx: number }) {
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
      key={tech.name}
      data-aos="fade-up"
      data-aos-delay={idx * 80}
      className="relative flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/20"
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
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
        <tech.icon className={`h-6 w-6 ${tech.color}`} />
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{tech.name}</h4>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {tech.description}
        </p>
      </div>
    </div>
  )
}

export function TechStackSection({ lang }: { lang: Language }) {
  const safeLang = (lang === 'zh' || lang === 'en') ? lang : 'zh'
  const techStack = safeLang === 'zh' ? techStackZh : techStackEn

  return (
    <section id="tech" className="bg-[hsl(var(--feature-bg))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {safeLang === 'zh' ? '技术栈' : 'Tech Stack'}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {safeLang === 'zh' ? '现代化技术，可靠性能' : 'Modern Technology, Reliable Performance'}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {safeLang === 'zh' ? '基于成熟稳定的技术栈打造，兼顾性能与开发效率' : 'Built on mature and stable technology stack, balancing performance and development efficiency'}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, idx) => (
            <TechStackCard key={tech.name} tech={tech} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
