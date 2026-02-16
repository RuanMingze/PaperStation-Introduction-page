"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Download, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { Language, translations } from "@/lib/i18n-client"

const navLinks = [
  { label: "核心功能", labelEn: "Features", href: "#features" },
  { label: "对比优势", labelEn: "Comparison", href: "#comparison" },
  { label: "技术栈", labelEn: "Tech Stack", href: "#tech" },
  { label: "安装使用", labelEn: "Installation", href: "#install" },
  { label: "贡献", labelEn: "Contribute", href: "#contribute" },
]

export function Navbar({ lang }: { lang: Language }) {
  const safeLang = lang || 'en'
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // 解决水合错误：在客户端挂载后才使用主题值
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // 确保服务器端和客户端渲染一致，使用默认值
  const isDark = mounted && theme === 'dark'
  const t = translations[safeLang]?.navbar || translations['en'].navbar
  const themeToggleRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleThemeToggle = () => {
    if (isAnimating || !themeToggleRef.current) return

    setIsAnimating(true)

    // 为切换按钮添加更明显的动画效果
    const button = themeToggleRef.current
    
    // 保存原始样式
    const originalTransition = button.style.transition
    
    // 添加缩放和背景色变化动画
    button.style.transition = 'transform 0.5s ease, background-color 0.5s ease'
    button.style.transform = 'scale(1.3)'
    button.style.backgroundColor = isDark ? '#fcfcfc' : '#333333'
    button.style.color = isDark ? '#000000' : '#ffffff'
    
    // 延迟切换主题，让动画先充分展示
    setTimeout(() => {
      setTheme(isDark ? 'light' : 'dark')
      
      // 恢复按钮状态
      button.style.transform = 'scale(1)'
      button.style.backgroundColor = ''
      button.style.color = ''
      
      // 动画结束后恢复状态
      setTimeout(() => {
        button.style.transition = originalTransition
        setIsAnimating(false)
      }, 500)
    }, 250)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        {/* 移动端布局：单行显示所有元素 */}
        <div className="flex items-center justify-between">
          {/* 左侧：Logo */}
          <div className="flex items-center gap-4">
            <Link href={`/${safeLang}`} className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="PaperStation Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold tracking-tight">PaperStation</span>
            </Link>
            <span className="hidden text-sm text-muted-foreground md:inline">{t.developedBy || 'Developed by Ruanm'}</span>
          </div>
          
          {/* 中间：汉堡菜单（仅移动端显示） */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${safeLang}${link.href}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t[link.href.slice(1) as keyof typeof t] || (safeLang === 'zh' ? link.label : link.labelEn)}
                </Link>
              ))}
            </div>
          </div>
          
          {/* 右侧：主题切换和下载按钮 */}
          <div className="flex items-center gap-3">
            {/* 汉堡菜单（仅移动端显示） */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? (t.closeMenu || "Close menu") : (t.openMenu || "Open menu")}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            {/* 主题切换按钮 */}
            <button
              ref={themeToggleRef}
              onClick={handleThemeToggle}
              disabled={isAnimating}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {/* 下载按钮 */}
            <Button asChild size="sm" className="gap-2 rounded-full">
              <Link href={`/${safeLang}/download`}>
                <Download className="h-4 w-4" />
                {t.download || 'Download'}
              </Link>
            </Button>
          </div>
        </div>
      </nav>

        {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${safeLang}${link.href}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {t[link.href.slice(1) as keyof typeof t] || (safeLang === 'zh' ? link.label : link.labelEn)}
            </Link>
          ))}
          </div>
        </div>
      )}
      
      {/* 主题切换覆盖层 */}
      <div
        ref={overlayRef}
        className="fixed rounded-full pointer-events-none"
        style={{
          width: '0',
          height: '0',
          left: '0',
          top: '0',
          transform: 'scale(0)',
          opacity: '0',
          transition: 'transform 0s, opacity 0s',
          borderRadius: '50%',
          overflow: 'hidden'
        }}
      />
    </header>
  )
}
