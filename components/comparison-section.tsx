'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, X, Minus } from "lucide-react"

function StatusIcon({ status }: { status: string }) {
  if (status === "full")
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Check className="h-4 w-4" />
      </div>
    )
  if (status === "partial")
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
        <Minus className="h-4 w-4" />
      </div>
    )
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
      <X className="h-4 w-4" />
    </div>
  )
}

export function ComparisonSection() {
  const tableRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!tableRef.current) return
      
      const rect = tableRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      setMousePosition({ x, y })
    }

    const table = tableRef.current
    if (table) {
      table.addEventListener('mousemove', handleMouseMove)
      table.addEventListener('mouseenter', () => setIsHovered(true))
      table.addEventListener('mouseleave', () => setIsHovered(false))
    }

    return () => {
      if (table) {
        table.removeEventListener('mousemove', handleMouseMove)
        table.removeEventListener('mouseenter', () => setIsHovered(true))
        table.removeEventListener('mouseleave', () => setIsHovered(false))
      }
    }
  }, [])

  const features = [
    {
      feature: "智能截图",
      chrome: "partial",
      paper: "full"
    },
    {
      feature: "内容总结",
      chrome: "none",
      paper: "full"
    },
    {
      feature: "知识管理",
      chrome: "none",
      paper: "full"
    },
    {
      feature: "快速搜索",
      chrome: "partial",
      paper: "full"
    },
    {
      feature: "书签管理",
      chrome: "partial",
      paper: "full"
    },
    {
      feature: "深色模式",
      chrome: "partial",
      paper: "full"
    },
    {
      feature: "隐私保护",
      chrome: "partial",
      paper: "full"
    },
    {
      feature: "快捷键",
      chrome: "partial",
      paper: "full"
    },
    {
      feature: "导出功能",
      chrome: "none",
      paper: "full"
    },
    {
      feature: "快速启动",
      chrome: "none",
      paper: "full"
    }
  ]

  return (
    <section id="comparison" className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            对比优势
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            为什么选择 PaperStation？
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            在浏览器核心功能之上，提供 Chrome/Edge 不具备的知识管理能力
          </p>
        </div>

        <div
          ref={tableRef}
          data-aos="fade-up"
          data-aos-delay="150"
          className="relative mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
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
          <div className="grid grid-cols-3 border-b border-border bg-secondary/50 px-6 py-4">
            <div className="text-sm font-semibold text-foreground">功能</div>
            <div className="text-center text-sm font-semibold text-muted-foreground">
              Chrome/Edge
            </div>
            <div className="text-center text-sm font-semibold text-primary">
              PaperStation
            </div>
          </div>

          {features.map((row, idx) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center px-6 py-4 ${idx !== features.length - 1 ? "border-b border-border" : ""} ${idx % 2 === 0 ? "bg-card" : "bg-secondary/20"}`}
            >
              <div className="text-sm text-foreground">{row.feature}</div>
              <div className="flex justify-center">
                <StatusIcon status={row.chrome} />
              </div>
              <div className="flex justify-center">
                <StatusIcon status={row.paper} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
