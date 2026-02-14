"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Language, translations } from "@/lib/i18n"

const navLinks = [
  { label: "核心功能", labelEn: "Features", href: "#features" },
  { label: "对比优势", labelEn: "Comparison", href: "#comparison" },
  { label: "技术栈", labelEn: "Tech Stack", href: "#tech" },
  { label: "安装使用", labelEn: "Installation", href: "#install" },
  { label: "贡献", labelEn: "Contribute", href: "#contribute" },
]

export function Navbar({ lang }: { lang: Language }) {
  const safeLang = (lang === 'zh' || lang === 'en') ? lang : 'zh'
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center px-6 py-4">
        <div className="flex items-center gap-2.5">
          <Link href={`/${safeLang}`} className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="PaperStation Logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold text-foreground">
              PaperStation
            </span>
          </Link>
          <span className="text-sm text-muted-foreground">
            {safeLang === 'zh' ? '由Ruanm开发' : 'Developed by Ruanm'}
          </span>
        </div>

        <div className="flex-1 hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${safeLang}${link.href}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {safeLang === 'zh' ? link.label : link.labelEn}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" className="gap-2 rounded-full">
            <Link href={`/${safeLang}/download`}>
              <Download className="h-4 w-4" />
              {safeLang === 'zh' ? '下载' : 'Download'}
            </Link>
          </Button>
        </div>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? (safeLang === 'zh' ? "关闭菜单" : "Close menu") : (safeLang === 'zh' ? "打开菜单" : "Open menu")}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
              {safeLang === 'zh' ? link.label : link.labelEn}
            </Link>
          ))}
            <Button asChild size="sm" className="mt-2 gap-2 rounded-full">
              <Link href={`/${safeLang}/download`}>
                <Download className="h-4 w-4" />
                {safeLang === 'zh' ? '下载' : 'Download'}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
