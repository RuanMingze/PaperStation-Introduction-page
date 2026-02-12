import { Check, X, Minus } from "lucide-react"

const comparisons = [
  { feature: "知识捕获模式", chrome: "none", paper: "full" },
  { feature: "智能总结功能", chrome: "none", paper: "full" },
  { feature: "结构化知识导出", chrome: "none", paper: "full" },
  { feature: "ChickRubGo 本土化搜索", chrome: "none", paper: "full" },
  { feature: "中文全本地化", chrome: "none", paper: "full" },
  { feature: "深色模式", chrome: "full", paper: "full" },
  { feature: "现代界面", chrome: "full", paper: "full" },
  { feature: "隐私优先设计", chrome: "partial", paper: "full" },
  { feature: "轻量高效", chrome: "partial", paper: "full" },
]

function StatusIcon({ status }: { status: string }) {
  if (status === "full")
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Check className="h-4 w-4" />
      </div>
    )
  if (status === "partial")
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
        <Minus className="h-4 w-4" />
      </div>
    )
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
      <X className="h-4 w-4" />
    </div>
  )
}

export function ComparisonSection() {
  return (
    <section id="comparison" className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            对比优势
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            为什么选择 PaperStation？
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            在浏览器核心功能之上，提供 Chrome/Edge 不具备的知识管理能力
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-border bg-secondary/50 px-6 py-4">
            <div className="text-sm font-semibold text-foreground">功能特性</div>
            <div className="text-center text-sm font-semibold text-muted-foreground">
              Chrome / Edge
            </div>
            <div className="text-center text-sm font-semibold text-primary">
              PaperStation
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, idx) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center px-6 py-4 ${
                idx !== comparisons.length - 1 ? "border-b border-border" : ""
              } ${idx % 2 === 0 ? "bg-card" : "bg-secondary/20"}`}
            >
              <div className="text-sm text-foreground">{row.feature}</div>
              <div className="flex justify-center">
                <StatusIcon status={row.chrome} />
              </div>
              <div className="flex justify-center">
                <StatusIcon status={row.paper} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
