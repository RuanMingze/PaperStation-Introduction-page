import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 输出请求头信息
  console.log('=== 语言检测 Log ===')
  console.log('请求路径:', pathname)
  console.log('完整 URL:', request.url)
  console.log('Accept-Language 请求头:', request.headers.get('accept-language'))
  console.log('User-Agent 请求头:', request.headers.get('user-agent'))
  console.log('所有请求头:', Object.fromEntries(request.headers.entries()))

  // 如果路径已经包含语言前缀，则不处理
  if (pathname.startsWith('/zh') || pathname.startsWith('/en')) {
    console.log('路径已包含语言前缀，跳过处理')
    return NextResponse.next()
  }

  // 获取请求头中的语言信息
  const acceptLanguage = request.headers.get('accept-language') || ''
  const language = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
  console.log('检测到的语言:', language)

  // 根据语言信息重定向到对应的路径
  if (language === 'zh' || language === 'zh-cn') {
    const url = request.nextUrl.clone()
    url.pathname = pathname === '/' ? '/zh' : `/zh${pathname}`
    console.log('重定向到中文路径:', url.pathname)
    console.log('重定向完整 URL:', url)
    return NextResponse.redirect(url)
  } else {
    // 默认重定向到英文
    const url = request.nextUrl.clone()
    url.pathname = pathname === '/' ? '/en' : `/en${pathname}`
    console.log('重定向到英文路径:', url.pathname)
    console.log('重定向完整 URL:', url)
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: [
    // 匹配所有路径，除了API路由、静态文件和_next
    '/((?!api|_next/static|_next/image|favicon.ico|images|Videos|Fonts).*)',
  ],
}
