"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "核心功能", href: "#features" },
  { label: "对比优势", href: "#comparison" },
  { label: "技术栈", href: "#tech" },
  { label: "安装使用", href: "#install" },
  { label: "贡献", href: "#contribute" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center px-6 py-4">
        <div className="flex items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5">
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
            由Ruanm开发
          </span>
        </div>

        <div className="flex-1 hidden items-center justify-center gap-8 md:flex">
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

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" className="gap-2 rounded-full">
            <Link href="/download">
              <Download className="h-4 w-4" />
              下载
            </Link>
          </Button>
        </div>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
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
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2 gap-2 rounded-full">
              <Link href="/download">
                <Download className="h-4 w-4" />
                下载
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
