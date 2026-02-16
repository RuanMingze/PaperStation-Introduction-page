import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 如果路径已经包含语言前缀，则不处理
  if (pathname.startsWith('/zh') || pathname.startsWith('/en') || pathname.startsWith('/ja') || pathname.startsWith('/ko') || pathname.startsWith('/es') || pathname.startsWith('/fr') || pathname.startsWith('/de') || pathname.startsWith('/ru') || pathname.startsWith('/pt') || pathname.startsWith('/ar')) {
    return NextResponse.next()
  }

  // 获取请求头中的语言信息
  const acceptLanguage = request.headers.get('accept-language') || ''
  const language = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()

  // 根据语言信息重定向到对应的路径
  if (language === 'zh' || language === 'zh-cn') {
    const url = request.nextUrl.clone()
    url.pathname = pathname === '/' ? '/zh' : `/zh${pathname}`
    return NextResponse.redirect(url)
  } else {
    // 默认重定向到英文
    const url = request.nextUrl.clone()
    url.pathname = pathname === '/' ? '/en' : `/en${pathname}`
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: [
    // 匹配所有路径，除了API路由、静态文件和_next
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|sitemap.xsl|images|Videos|Fonts).*)',
  ],
}
