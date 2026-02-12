import Image from "next/image"
import { Download, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RotatingText } from "@/components/rotating-text"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--hero-bg))]">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-aos="fade-down"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            v1.1.5 已发布 - 基于 Electron 40 + Chromium
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
            <span className="text-primary">为知识而生</span>
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
              <a href="https://github.com/ruanmingze/PaperStation-browser/releases" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                下载 Windows 版
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-8 text-base">
              <a href="https://github.com/ruanmingze/PaperStation-browser" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub 源码
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="400"
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
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
            <div className="relative aspect-video w-full">
              <Image
                src="/images/screenshot.png"
                alt="PaperStation Browser 界面预览"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
