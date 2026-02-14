'use client'

import { useEffect } from 'react'

export function GlobalErrorHandler() {
  useEffect(() => {
    const isExtensionError = (error: any): boolean => {
      if (!error) return false
      
      const errorMessage = error.message || String(error)
      const errorStack = error.stack || ''
      
      // 检查错误特征
      const hasDeletePropertyError = errorMessage.includes('deleteProperty')
      const hasTmStartError = errorMessage.includes('__tm_start')
      const hasUserscript = errorStack.includes('userscript.html') || errorMessage.includes('userscript.html')
      const hasChromeExtension = errorStack.includes('chrome-extension://') || errorMessage.includes('chrome-extension://')
      
      return hasDeletePropertyError || hasTmStartError || hasUserscript || hasChromeExtension
    }

    const handleError = (event: ErrorEvent) => {
      // 检查当前是否在错误页面上
      if (window.location.pathname.includes('/extension-error')) {
        console.log('已经在错误页面上，跳过错误处理');
        return;
      }
      
      console.error('捕获到全局错误:', event.error)
      
      if (isExtensionError(event.error)) {
        console.log('检测到浏览器扩展错误，重定向到错误页面');
        event.preventDefault();
        
        // 使用绝对路径，确保包含当前语言前缀
        const currentPath = window.location.pathname;
        var lang = 'zh'; // 默认中文
        if (currentPath.indexOf('/en') === 0) {
          lang = 'en';
        }
        
        window.location.href = `/${lang}/extension-error`;
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // 检查当前是否在错误页面上
      if (window.location.pathname.includes('/extension-error')) {
        console.log('已经在错误页面上，跳过错误处理');
        return;
      }
      
      console.error('捕获到未处理的 Promise 拒绝:', event.reason)
      
      if (isExtensionError(event.reason)) {
        console.log('检测到浏览器扩展错误，重定向到错误页面');
        event.preventDefault();
        
        // 使用绝对路径，确保包含当前语言前缀
        const currentPath = window.location.pathname;
        var lang = 'zh'; // 默认中文
        if (currentPath.indexOf('/en') === 0) {
          lang = 'en';
        }
        
        window.location.href = `/${lang}/extension-error`;
      }
    }

    // 立即添加事件监听器
    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    // 清理
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}
