"use client"

import { useState } from "react"
import { Copy, Check, Terminal } from "lucide-react"

const steps = [
  {
    label: "克隆仓库",
    command: "git clone https://github.com/ruanmingze/PaperStation-browser.git",
  },
  {
    label: "进入目录",
    command: "cd PaperStation-browser",
  },
  {
    label: "安装依赖",
    command: "pnpm install",
  },
  {
    label: "启动开发模式",
    command: "pnpm run dev",
  },
]

const buildCommands = [
  {
    label: "创建安装包",
    command: "pnpm run build",
    output: "dist/PaperStation Browser Setup.exe",
  },
  {
    label: "免安装版本",
    command: "pnpm run build:dir",
    output: "dist/win-unpacked/",
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label="复制命令"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  )
}

export function InstallSection() {
  return (
    <section id="install" className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            安装使用
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            快速开始
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            几条命令即可启动开发环境，或直接下载安装包
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Development */}
          <div data-aos="fade-right" data-aos-delay="100" className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">开发环境</h3>
            </div>
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div key={step.label}>
                  <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                    {idx + 1}. {step.label}
                  </p>
                  <div className="flex items-center justify-between gap-2 rounded-lg bg-secondary/80 px-4 py-2.5">
                    <code className="overflow-x-auto whitespace-nowrap font-mono text-sm text-foreground">
                      {step.command}
                    </code>
                    <CopyButton text={step.command} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Build */}
          <div data-aos="fade-left" data-aos-delay="200" className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">打包构建</h3>
            </div>
            <div className="space-y-4">
              {buildCommands.map((cmd) => (
                <div key={cmd.label}>
                  <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                    {cmd.label}
                  </p>
                  <div className="flex items-center justify-between gap-2 rounded-lg bg-secondary/80 px-4 py-2.5">
                    <code className="overflow-x-auto whitespace-nowrap font-mono text-sm text-foreground">
                      {cmd.command}
                    </code>
                    <CopyButton text={cmd.command} />
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {"输出: "}
                    <code className="font-mono">{cmd.output}</code>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-primary/20 bg-accent p-4">
              <p className="text-sm font-medium text-accent-foreground">
                MIT 开源协议
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                基于 Flowmora Browser 二次开发，欢迎社区贡献
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
