import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { AosInit } from '@/components/aos-init'

import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'PaperStation Browser - 全面发展的现代化浏览器',
  description:
    'PaperStation Browser 基于 Electron+Chromium 打造的现代化浏览器，支持知识捕获、智能总结、结构化导出等功能。',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  )
}
