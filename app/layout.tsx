import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { AosInit } from '@/components/aos-init'
import { AosControl } from '@/components/aos-control'
import { OrientationPrompt } from '@/components/orientation-prompt'
import { NavigationProgress } from '@/components/navigation-progress'
import { GlobalErrorHandler } from '@/components/global-error-handler'
import { SnowfallEffect } from '@/components/snowfall-effect'
import { getEarlyErrorHandlingScript } from '@/lib/error-handling-script'

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
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 早期错误捕获脚本，在页面加载的最早阶段运行 */}
        <script dangerouslySetInnerHTML={{
          __html: getEarlyErrorHandlingScript()
        }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <GlobalErrorHandler />
          <NavigationProgress />
          <SnowfallEffect />
          {children}
          <AosInit />
          <AosControl />
          <OrientationPrompt />
        </ThemeProvider>
      </body>
    </html>
  )
}
