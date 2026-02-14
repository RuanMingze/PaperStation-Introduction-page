'use client'

import { useEffect, useRef, useState } from 'react'
import { Shield, Lock, Eye, Database, Key, CheckCircle } from 'lucide-react'
import { Language } from "@/lib/i18n"

const securityFeaturesZh = [
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

const securityFeaturesEn = [
  {
    icon: Shield,
    title: "Privacy-First Design",
    description: "All data is stored locally, no personal information is uploaded to the cloud, giving you complete control over your data.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: Lock,
    title: "HTTPS Security",
    description: "Automatically detect and prioritize HTTPS connections to ensure secure data transmission and prevent man-in-the-middle attacks.",
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    icon: Database,
    title: "Local Knowledge Base",
    description: "Use IndexedDB to store knowledge content locally, accessible without internet connection, protecting privacy and security.",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    icon: Key,
    title: "Encrypted Storage",
    description: "Sensitive data is stored using encryption, making it difficult to access your information even if the device is stolen.",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    icon: Eye,
    title: "Transparent & Controllable",
    description: "All permission requests are clearly visible, and you can view and revoke granted permissions at any time.",
    color: "text-cyan-500",
    bg: "bg-cyan-50"
  },
  {
    icon: CheckCircle,
    title: "Open Source & Auditable",
    description: "Built on open-source technology stack, code is open and transparent, security performance can be audited and verified by the community.",
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

export function SecuritySection({ lang }: { lang: Language }) {
  const safeLang = (lang === 'zh' || lang === 'en') ? lang : 'zh'
  const securityFeatures = safeLang === 'zh' ? securityFeaturesZh : securityFeaturesEn
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
    <section id="security" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {safeLang === 'zh' ? '安全与隐私' : 'Security & Privacy'}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {safeLang === 'zh' ? '您的数据安全，我们用心守护' : 'Your Data Security, Our Priority'}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {safeLang === 'zh' ? '采用多层安全机制和隐私保护措施，让您安心浏览' : 'Multi-layer security mechanisms and privacy protection measures for worry-free browsing'}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, idx) => (
            <SecurityCard key={feature.title} feature={feature} idx={idx} />
          ))}
        </div>

        <div 
          ref={cardRef}
          data-aos="fade-up"
          data-aos-delay="500"
          className="relative mt-16 rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-blue-500/5 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
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
          <div className="flex flex-col items-center text-center">
            <Shield className="mb-4 h-16 w-16 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              {safeLang === 'zh' ? '开源透明，安全可信' : 'Open Source, Secure & Trusted'}
            </h3>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              {safeLang === 'zh' ? 'PaperStation Browser 基于开源技术栈构建，所有代码公开透明，安全性能可被全球开发者审计和验证。我们承诺不收集任何用户隐私数据，所有知识内容均存储在本地，您完全掌控自己的数据。' : 'PaperStation Browser is built on open-source technology stack with all code open and transparent. Security performance can be audited and verified by global developers. We promise not to collect any user privacy data, all knowledge content is stored locally, giving you complete control over your data.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}