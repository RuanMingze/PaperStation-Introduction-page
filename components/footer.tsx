import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="PaperStation Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-sm font-semibold text-foreground">
            PaperStation Browser
          </span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Made with care &mdash; 全面发展的现代化浏览器 &middot; MIT License
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/ruanmingze/PaperStation-browser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
