import Link from 'next/link'
import { Download, ArrowLeft, Package, Monitor, Smartphone, HardDrive } from 'lucide-react'
import { translations, Language } from '@/lib/i18n-client'

const BASE_URL = 'https://github.com/RuanMingze/PaperStation-Browser/releases/download/1.1.5/'

const downloads = [
  {
    name: 'Setup_PaperStation_Win64_1.1.5.exe',
    platform: 'Windows',
    description: 'Windows 安装程序',
    descriptionEn: 'Windows Installer',
    icon: <Monitor className="h-6 w-6" />,
    size: '196 MB'
  },
  {
    name: 'PaperStation_Win64_1.1.5.zip',
    platform: 'Windows',
    description: 'Windows 压缩包',
    descriptionEn: 'Windows Archive',
    icon: <Monitor className="h-6 w-6" />,
    size: '234 MB'
  },
  {
    name: 'Papstation-1.1.5-arm64.dmg',
    platform: 'macOS',
    description: 'macOS ARM64 安装包',
    descriptionEn: 'macOS ARM64 Installer',
    icon: <Package className="h-6 w-6" />,
    size: '103 MB'
  },
  {
    name: 'Papstation-1.1.5-arm64-mac.zip',
    platform: 'macOS',
    description: 'macOS ARM64 压缩包',
    descriptionEn: 'macOS ARM64 Archive',
    icon: <Package className="h-6 w-6" />,
    size: '108 MB'
  },
  {
    name: 'Papstation-1.1.5.AppImage',
    platform: 'Linux',
    description: 'Linux AppImage',
    descriptionEn: 'Linux AppImage',
    icon: <HardDrive className="h-6 w-6" />,
    size: '90.8 MB'
  },
  {
    name: 'papstation-browser_1.1.5_amd64.snap',
    platform: 'Linux',
    description: 'Linux Snap 包',
    descriptionEn: 'Linux Snap Package',
    icon: <HardDrive className="h-6 w-6" />,
    size: '98.8 MB'
  }
]

export async function generateStaticParams() {
  return [
    { lang: 'zh' },
    { lang: 'en' },
    { lang: 'ja' },
    { lang: 'ko' },
    { lang: 'es' },
    { lang: 'fr' },
    { lang: 'de' },
    { lang: 'ru' },
    { lang: 'pt' },
    { lang: 'ar' }
  ]
}

export default async function DownloadPage({
  params
}: {
  params: Promise<{ lang: Language }>
}) {
  const { lang } = await params
  const t = translations[lang].downloadPage

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Download className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.subtitle}
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
                    {lang === 'zh' ? download.description : download.descriptionEn}
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
              <h3 className="font-semibold text-foreground mb-4">{t.versionInfo}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t.basedOnElectron}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t.basedOnChromium}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t.mitLicense}
                </li>
              </ul>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{t.windows}</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{t.windowsInstall}</p>
                  <p>{t.windowsInstall2}</p>
                  <p>{t.windowsInstall3}</p>
                  <p>{t.windowsInstall4}</p>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{t.macos}</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{t.macosInstall}</p>
                  <p>{t.macosInstall2}</p>
                  <p>{t.macosInstall3}</p>
                  <p>{t.macosInstall4}</p>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <HardDrive className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{t.linux}</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{t.linuxInstall}</p>
                  <p>{t.linuxInstall2}</p>
                  <p>{t.linuxInstall3}</p>
                  <p>{t.linuxInstall4}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-accent p-4">
              <p className="text-sm font-medium text-accent-foreground">
                {t.community}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t.communityDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}