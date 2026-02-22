'use client'

import { useEffect, useRef, useState } from 'react'
import { GitBranch, GitPullRequest, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const contributeSteps = [
  { step: "1", label: "Fork 本仓库" },
  { step: "2", label: "创建特性分支" },
  { step: "3", label: "提交更改" },
  { step: "4", label: "推送并创建 PR" },
]

function ContributeCard({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) {
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
    <div ref={cardRef} className={`relative ${className}`} {...props}>
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(224, 112, 32, 0.15), transparent 60%)`,
            opacity: 1
          }}
        />
      )}
      {children}
    </div>
  )
}

export function ContributeSection() {
  return (
    <section id="contribute" className="bg-[hsl(var(--feature-bg))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            参与贡献
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            一起构建更好的浏览器
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            PaperStation 是一个开源项目，欢迎每一位开发者参与
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ContributeCard className="rounded-2xl border border-border bg-card p-8" data-aos="fade-right" data-aos-delay="100">
            <div className="mb-6 flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">贡献流程</h3>
            </div>
            <div className="space-y-4">
              {contributeSteps.map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <p className="text-sm text-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild className="gap-2 rounded-full">
                <a
                  href="https://github.com/ruanmingze/PaperStation-browser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitPullRequest className="h-4 w-4" />
                  开始贡献
                </a>
              </Button>
            </div>
          </ContributeCard>

          <div className="flex flex-col gap-6">
            <ContributeCard className="flex-1 rounded-2xl border border-border bg-card p-8" data-aos="fade-left" data-aos-delay="150">
              <div className="mb-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">核心团队</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    R
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ruanm</p>
                    <p className="text-sm text-muted-foreground">
                      核心开发团队
                    </p>
                  </div>
                </div>
              </div>
            </ContributeCard>

            <ContributeCard className="flex-1 rounded-2xl border border-border bg-card p-8" data-aos="fade-left" data-aos-delay="250">
              <div className="mb-4 flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">反馈方式</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>GitHub Issues - 提交 Bug 或功能建议</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    邮箱 -{" "}
                    <a
                      href="mailto:xmt20160124@outlook.com"
                      className="text-primary underline underline-offset-2 hover:text-primary/80"
                    >
                      xmt20160124@outlook.com
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    社区 -{" "}
                    <a
                      href="https://teams.live.com/l/community/FBA6Av9UPytPH-BJAI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:text-primary/80"
                    >
                      加入 Teams 社区
                    </a>
                  </span>
                </li>
              </ul>
            </ContributeCard>
          </div>
        </div>
      </div>
    </section>
  )
}
