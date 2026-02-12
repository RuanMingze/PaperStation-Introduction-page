"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Download, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RotatingText } from "@/components/rotating-text"

const screenshots = [
  { src: "/images/screenshot.png", alt: "PaperStation Browser 界面预览 1" },
  { src: "/images/screenshot2.png", alt: "PaperStation Browser 界面预览 2" },
  { src: "/images/screenshot3.png", alt: "PaperStation Browser 界面预览 3" },
  { src: "/images/screenshot4.png", alt: "PaperStation Browser 界面预览 4" },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / 80)
        if (newProgress >= 100) {
          setCurrentIndex(prev => (prev + 1) % screenshots.length)
          return 0
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[hsl(var(--hero-bg))]">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-aos="fade-down"
            className="mb-5 flex justify-center"
          >
            <Image
              src="/images/logo.png"
              alt="PaperStation Logo"
              width={95}
              height={95}
              className="rounded-lg"
            />
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {'更'}
            <RotatingText />
            {'的浏览器'}
            <br />
            <span className="text-primary">为你打造</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            PaperStation Browser 基于 Electron + Chromium 打造，拥有知识捕获、智能总结、
            结构化导出等独有功能，帮助你在浏览中高效积累知识。
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="gap-2 rounded-full px-8 text-base">
              <a href="./download" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                下载
              </a>
            </Button>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="400"
          className="relative mx-auto mt-16 w-full max-w-5xl"
        >
          <div className="flex items-center justify-between">
            {/* 截图容器 */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5 flex-1">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background/80 px-4 py-1 text-center text-xs text-muted-foreground">
                  paperstation://NewTab
                </div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].alt}
                  fill
                  className="object-cover object-top transition-opacity duration-500"
                  priority={currentIndex === 0}
                />
              </div>
            </div>
            
            {/* 右侧进度条 */}
            <div className="ml-8 h-64 w-2 rounded-full bg-border">
              <div 
                className="h-full rounded-full bg-primary transition-all duration-100 ease-linear"
                style={{ height: `${progress}%` }}
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                aria-label={`查看截图 ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function TabsSection() {
  const [currentTab, setCurrentTab] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  const tabs = [
    {
      title: "标签页流畅多开",
      description: "轻松管理多个标签页，高效切换，提升浏览体验",
      video: "/Videos/1.mp4",
      url: "PaperStation Browser"
    },
    {
      title: "丰富的设置选项",
      description: "个性化定制您的浏览器体验，满足您的各种需求",
      video: "/Videos/Settings.mp4",
      url: "paperstation://Settings"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.3,
        rootMargin: "0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div
          data-aos="fade-up"
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {tabs[currentTab].title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {tabs[currentTab].description}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative mx-auto max-w-4xl"
        >
          <div
            ref={sectionRef}
            className={`overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5 transition-all duration-500 ease-in-out ${isInView ? 'scale-105' : 'scale-100'}`}
          >
            <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-background/80 px-4 py-1 text-center text-xs text-muted-foreground">
                {tabs[currentTab].url}
              </div>
            </div>
            <div className="relative aspect-video">
              <video
                key={tabs[currentTab].video}
                src={tabs[currentTab].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-2">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(index)}
                className={`h-3 w-3 rounded-full transition-colors ${index === currentTab ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                aria-label={`查看 ${tabs[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
