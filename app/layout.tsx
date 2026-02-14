import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { AosInit } from '@/components/aos-init'
import { AosControl } from '@/components/aos-control'
import { OrientationPrompt } from '@/components/orientation-prompt'
import { NavigationProgress } from '@/components/navigation-progress'
import { GlobalErrorHandler } from '@/components/global-error-handler'

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
        {/* 早期错误捕获脚本，在页面加载的最早阶段运行 */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // 全局标志，防止重复初始化和重定向
            if (window._paperStationErrorHandled) {
              console.log('错误处理脚本已经初始化，跳过');
            } else {
              window._paperStationErrorHandled = true;
              
              // 检查当前是否已经在错误页面上
              const isErrorPage = window.location.pathname.includes('/extension-error');
              console.log('当前是否在错误页面上:', isErrorPage);
              console.log('当前路径:', window.location.pathname);
              
              if (isErrorPage) {
                console.log('在错误页面上，完全禁用错误处理');
              } else {
                // 检测是否是浏览器扩展错误
                function isExtensionError(error) {
                  if (!error) return false;
                  
                  const errorMessage = error.message || String(error);
                  const errorStack = error.stack || '';
                  
                  // 检查错误特征
                  const hasDeletePropertyError = errorMessage.includes('deleteProperty');
                  const hasTmStartError = errorMessage.includes('__tm_start');
                  const hasUserscript = errorStack.includes('userscript.html') || errorMessage.includes('userscript.html');
                  const hasChromeExtension = errorStack.includes('chrome-extension://') || errorMessage.includes('chrome-extension://');
                  
                  return hasDeletePropertyError || hasTmStartError || hasUserscript || hasChromeExtension;
                }

                // 全局错误处理
                window.addEventListener('error', function(event) {
                  // 再次检查是否在错误页面上，确保安全
                  if (window.location.pathname.includes('/extension-error')) {
                    console.log('已经在错误页面上，跳过错误处理');
                    return;
                  }
                  
                  if (isExtensionError(event.error)) {
                    console.log('检测到浏览器扩展错误，重定向到错误页面');
                    event.preventDefault();
                    event.stopPropagation();
                    
                    // 使用绝对路径，确保包含当前语言前缀
                    const currentPath = window.location.pathname;
                    var lang = 'zh'; // 默认中文
                    if (currentPath.indexOf('/en') === 0) {
                      lang = 'en';
                    }
                    
                    var redirectUrl = '/' + lang + '/extension-error';
                    console.log('重定向到:', redirectUrl);
                    
                    // 立即重定向
                    window.location.replace(redirectUrl);
                  }
                });

                // 未处理的 Promise 拒绝处理
                window.addEventListener('unhandledrejection', function(event) {
                  // 再次检查是否在错误页面上，确保安全
                  if (window.location.pathname.includes('/extension-error')) {
                    console.log('已经在错误页面上，跳过错误处理');
                    return;
                  }
                  
                  if (isExtensionError(event.reason)) {
                    console.log('检测到浏览器扩展错误，重定向到错误页面');
                    event.preventDefault();
                    event.stopPropagation();
                    
                    // 使用绝对路径，确保包含当前语言前缀
                    const currentPath = window.location.pathname;
                    var lang = 'zh'; // 默认中文
                    if (currentPath.indexOf('/en') === 0) {
                      lang = 'en';
                    }
                    
                    var redirectUrl = '/' + lang + '/extension-error';
                    console.log('重定向到:', redirectUrl);
                    
                    // 立即重定向
                    window.location.replace(redirectUrl);
                  }
                });
              }
            }
          `
        }} />
      </head>
      <body className="font-sans antialiased">
        <GlobalErrorHandler />
        <NavigationProgress />
        {children}
        <AosInit />
        <AosControl />
        <OrientationPrompt />
      </body>
    </html>
  )
}
