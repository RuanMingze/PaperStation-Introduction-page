import Link from 'next/link'
import { Download, ArrowLeft, Package, Monitor, Smartphone, HardDrive } from 'lucide-react'

const BASE_URL = 'https://github.com/RuanMingze/PaperStation-Browser/releases/download/1.1.5/'

const downloads = [
  {
    name: 'Setup_PaperStation_Win64_1.1.5.exe',
    platform: 'Windows',
    description: 'Windows 安装程序',
    icon: <Monitor className="h-6 w-6" />,
    size: '196 MB'
  },
  {
    name: 'PaperStation_Win64_1.1.5.zip',
    platform: 'Windows',
    description: 'Windows 压缩包',
    icon: <Monitor className="h-6 w-6" />,
    size: '234 MB'
  },
  {
    name: 'Papstation-1.1.5-arm64.dmg',
    platform: 'macOS',
    description: 'macOS ARM64 安装包',
    icon: <Package className="h-6 w-6" />,
    size: '103 MB'
  },
  {
    name: 'Papstation-1.1.5-arm64-mac.zip',
    platform: 'macOS',
    description: 'macOS ARM64 压缩包',
    icon: <Package className="h-6 w-6" />,
    size: '108 MB'
  },
  {
    name: 'Papstation-1.1.5.AppImage',
    platform: 'Linux',
    description: 'Linux AppImage',
    icon: <HardDrive className="h-6 w-6" />,
    size: '90.8 MB'
  },
  {
    name: 'papstation-browser_1.1.5_amd64.snap',
    platform: 'Linux',
    description: 'Linux Snap 包',
    icon: <HardDrive className="h-6 w-6" />,
    size: '98.8 MB'
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
              下载 PaperStation Browser
            </h1>
            <p className="text-xl text-muted-foreground">
              版本 1.1.5 - 选择适合你系统的版本
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
                  基于 Electron 40.1.0
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  基于 Chromium 最新版本
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
                  <p>1. 下载 .exe 安装程序或 .zip 压缩包</p>
                  <p>2. 双击 .exe 文件运行安装程序</p>
                  <p>3. 按照安装向导完成安装</p>
                  <p>4. 从桌面或开始菜单启动</p>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">macOS</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>1. 下载 .dmg 安装包或 .zip 压缩包</p>
                  <p>2. 双击 .dmg 文件打开磁盘映像</p>
                  <p>3. 将应用拖拽到应用程序文件夹</p>
                  <p>4. 从启动台启动应用</p>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <HardDrive className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Linux</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>1. 下载 .AppImage 文件或 .snap 包</p>
                  <p>2. 添加执行权限: chmod +x *.AppImage</p>
                  <p>3. 运行 AppImage: ./PaperStation*.AppImage</p>
                  <p>4. 或使用 snap 安装: sudo snap install</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-accent p-4">
              <p className="text-sm font-medium text-accent-foreground">
                社区贡献
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                基于 Flowmora Browser 二次开发，欢迎提交 Issue 和 Pull Request
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}