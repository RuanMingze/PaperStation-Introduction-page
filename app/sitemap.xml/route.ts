import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 获取请求头中的语言信息
  const acceptLanguage = request.headers.get('accept-language') || ''
  const language = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
  
  // 根据语言信息重定向到对应的路径
  const lang = language === 'zh' || language === 'zh-cn' ? 'zh' : 'en'
  const url = request.nextUrl.clone()
  url.pathname = `/${lang}${pathname}`
  
  return NextResponse.redirect(url)
}