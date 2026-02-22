"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Download, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "核心功能", href: "#features" },
  { label: "对比优势", href: "#comparison" },
  { label: "技术栈", href: "#tech" },
  { label: "安装使用", href: "#install" },
  { label: "贡献", href: "#contribute" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isDark = mounted && theme === 'dark'
  const themeToggleRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleThemeToggle = () => {
    if (isAnimating || !themeToggleRef.current) return

    setIsAnimating(true)

    const button = themeToggleRef.current
    const originalTransition = button.style.transition
    
    button.style.transition = 'transform 0.5s ease, background-color 0.5s ease'
    button.style.transform = 'scale(1.3)'
    button.style.backgroundColor = isDark ? '#fcfcfc' : '#333333'
    button.style.color = isDark ? '#000000' : '#ffffff'
    
    setTimeout(() => {
      setTheme(isDark ? 'light' : 'dark')
      
      button.style.transform = 'scale(1)'
      button.style.backgroundColor = ''
      button.style.color = ''
      
      setTimeout(() => {
        button.style.transition = originalTransition
        setIsAnimating(false)
      }, 500)
    }, 250)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="PaperStation Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold tracking-tight">PaperStation</span>
            </Link>
            <span className="hidden text-sm text-muted-foreground md:inline">Developed by Ruanm</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center justify-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <button
              ref={themeToggleRef}
              onClick={handleThemeToggle}
              disabled={isAnimating}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Button asChild size="sm" className="gap-2 rounded-full">
              <Link href="/download">
                <Download className="h-4 w-4" />
                下载
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
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          </div>
        </div>
      )}
      
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
