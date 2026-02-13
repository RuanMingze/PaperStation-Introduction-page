import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { AosInit } from '@/components/aos-init'
import { OrientationPrompt } from '@/components/orientation-prompt'
import { NavigationProgress } from '@/components/navigation-progress'

import './globals.css'

export const metadata: Metadata = {
  title: 'PaperStation Browser - 全面发展的现代化浏览器',
  description:
    'PaperStation Browser 基于 Electron+Chromium 打造的现代化浏览器，支持知识捕获、智能总结、结构化导出等功能。',
  icons: {
    icon: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#e07020',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
      </head>
      <body className="font-sans antialiased">
        <NavigationProgress />
        {children}
        <AosInit />
        <OrientationPrompt />
      </body>
    </html>
  )
}
