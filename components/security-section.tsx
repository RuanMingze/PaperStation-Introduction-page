'use client'

import { useEffect, useRef, useState } from 'react'
import { Shield, Lock, Eye, Database, Key, CheckCircle } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: "隐私优先设计",
    description: "所有数据本地存储，不上传任何个人信息到云端，完全掌控您的数据。",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: Lock,
    title: "HTTPS安全机制",
    description: "自动检测并优先使用HTTPS连接，确保数据传输安全，防止中间人攻击。",
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    icon: Database,
    title: "本地知识库",
    description: "使用IndexedDB本地存储知识内容，无需联网即可访问，保护隐私安全。",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    icon: Key,
    title: "加密存储",
    description: "敏感数据采用加密存储方式，即使设备被盗也无法轻易获取您的信息。",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    icon: Eye,
    title: "透明可控",
    description: "所有权限请求清晰可见，您可以随时查看和撤销已授予的权限。",
    color: "text-cyan-500",
    bg: "bg-cyan-50"
  },
  {
    icon: CheckCircle,
    title: "开源可审计",
    description: "基于开源技术栈构建，代码公开透明，安全性能可被社区审计和验证。",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  }
]

function SecurityCard({ feature, idx }: { feature: any; idx: number }) {
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
      className="relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
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
      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg}`}>
        <feature.icon className={`h-7 w-7 ${feature.color}`} />
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

export function SecuritySection() {
  return (
    <section id="security" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            安全与隐私
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            您的数据安全，我们用心守护
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            采用多层安全机制和隐私保护措施，让您安心浏览
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, idx) => (
            <SecurityCard key={feature.title} feature={feature} idx={idx} />
          ))}
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-16 rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-blue-500/5 p-8"
        >
          <div className="flex flex-col items-center text-center">
            <Shield className="mb-4 h-16 w-16 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              开源透明，安全可信
            </h3>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              PaperStation Browser 基于开源技术栈构建，所有代码公开透明，安全性能可被全球开发者审计和验证。我们承诺不收集任何用户隐私数据，所有知识内容均存储在本地，您完全掌控自己的数据。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}