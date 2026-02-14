"use client"

import { useEffect } from 'react'

// 检测浏览器语言并重定向
export default function HomePage() {
  useEffect(() => {
    // 获取浏览器语言
    const acceptLanguage = navigator.language || (navigator as any).userLanguage
    const language = acceptLanguage.split('-')[0].toLowerCase()
    
    // 根据语言重定向
    if (language === 'zh' || language === 'zh-cn') {
      window.location.href = '/zh'
    } else {
      window.location.href = '/en'
    }
  }, [])

  // 空白页面，使用与主页面相同的背景色
  return (
    <div className="min-h-screen bg-[hsl(40,20%,97%)]"></div>
  )
}