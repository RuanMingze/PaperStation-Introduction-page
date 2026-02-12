const techStack = [
  {
    name: "Electron 40",
    description: "跨平台桌面应用框架",
    version: "El",
  },
  {
    name: "Chromium",
    description: "高性能网页渲染引擎",
    version: "Ch",
  },
  {
    name: "HTML / CSS / JS",
    description: "原生前端技术",
    version: "ES",
  },
  {
    name: "Node.js",
    description: "后端运行环境",
    version: "Nj",
  },
  {
    name: "IndexedDB",
    description: "本地知识存储",
    version: "IDB",
  },
  {
    name: "electron-builder",
    description: "应用打包与分发",
    version: "EB",
  },
]

export function TechStackSection() {
  return (
    <section id="tech" className="bg-[hsl(var(--feature-bg))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            技术栈
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            现代化技术，可靠性能
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            基于成熟稳定的技术栈打造，兼顾性能与开发效率
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, idx) => (
            <div
              key={tech.name}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/20"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-xs font-bold text-muted-foreground">
                {tech.version.slice(0, 4)}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{tech.name}</h4>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
