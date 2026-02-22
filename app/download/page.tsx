import Link from 'next/link'
import { Download, ArrowLeft, Package, Monitor, Smartphone, HardDrive } from 'lucide-react'

const BASE_URL = 'https://github.com/RuanMingze/PaperStation-Browser/releases/download/1.1.6/'

const downloads = [
  {
    name: 'PaperStation_Win64_1.1.6.exe',
    platform: 'Windows',
    description: 'Windows 安装程序',
    descriptionEn: 'Windows Installer',
    icon: <Monitor className="h-6 w-6" />,
    size: '114 MB'
  },
  {
    name: 'PaperStation_Win64_1.1.6.zip',
    platform: 'Windows',
    description: 'Windows 压缩包',
    descriptionEn: 'Windows Archive',
    icon: <Monitor className="h-6 w-6" />,
    size: '150 MB'
  },
  {
    name: 'PaperStation-1.1.6-arm64.dmg',
    platform: 'macOS',
    description: 'macOS ARM64 安装包',
    descriptionEn: 'macOS ARM64 Installer',
    icon: <Package className="h-6 w-6" />,
    size: '120 MB'
  },
  {
    name: 'PaperStation-1.1.6-arm64-mac.zip',
    platform: 'macOS',
    description: 'macOS ARM64 压缩包',
    descriptionEn: 'macOS ARM64 Archive',
    icon: <Package className="h-6 w-6" />,
    size: '126 MB'
  },
  {
    name: 'PaperStation-1.1.6.AppImage',
    platform: 'Linux',
    description: 'Linux AppImage',
    descriptionEn: 'Linux AppImage',
    icon: <HardDrive className="h-6 w-6" />,
    size: '108 MB'
  },
  {
    name: 'PaperStation_1.1.6_amd64.snap',
    platform: 'Linux',
    description: 'Linux Snap 包',
    descriptionEn: 'Linux Snap Package',
    icon: <HardDrive className="h-6 w-6" />,
    size: '117 MB'
  }
]

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Link>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Download className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              下载 PaperStation
            </h1>
            <p className="text-xl text-muted-foreground">
              选择适合您操作系统的版本
            </p>
          </div>

          <div className="grid gap-4">
            {downloads.map((download) => (
              <a
                key={download.name}
                href={`${BASE_URL}${download.name}`}
                download
                className="group flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {download.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-foreground truncate">
                      {download.name}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {download.platform}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {download.description}
                  </p>
                </div>

                <div className="flex-shrink-0 flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {download.size}
                  </span>
                  <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>

          <div className="p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">版本信息</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  基于 Electron 构建
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  使用 Chromium 内核
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  MIT 开源协议
                </li>
              </ul>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Windows</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>双击安装程序，按照提示完成安装</p>
                  <p>或解压压缩包，运行 PaperStation.exe</p>
                  <p>支持 Windows 10/11</p>
                  <p>推荐使用安装程序版本</p>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">macOS</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>双击 .dmg 文件，将应用拖到 Applications</p>
                  <p>或解压压缩包，运行 PaperStation.app</p>
                  <p>支持 macOS 11+ (Apple Silicon)</p>
                  <p>首次运行需要右键打开</p>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <HardDrive className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Linux</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>AppImage：添加执行权限后直接运行</p>
                  <p>Snap：使用 snap install 命令安装</p>
                  <p>支持主流 Linux 发行版</p>
                  <p>推荐使用 AppImage 版本</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-accent p-4">
              <p className="text-sm font-medium text-accent-foreground">
                加入社区
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                遇到问题？欢迎在 GitHub 提交 Issue 或参与讨论
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
