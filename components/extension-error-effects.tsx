'use client'

import { useEffect } from 'react'

export function ExtensionErrorEffects() {
  useEffect(() => {
    // 移除滚动限制，允许页面滚动
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    
    // 隐藏暂停按钮悬浮球
    const pauseButton = document.querySelector('.pause-button') || document.querySelector('[class*=pause]') || document.querySelector('[id*=pause]')
    if (pauseButton) {
      (pauseButton as HTMLElement).style.display = 'none'
    }
  }, [])

  return null
}