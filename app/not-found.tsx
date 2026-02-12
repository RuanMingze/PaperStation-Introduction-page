'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <div className="text-[120px] font-bold text-primary mb-4">404</div>
          <div className="text-2xl font-semibold text-foreground mb-4">页面未找到</div>
          <p className="text-muted-foreground mb-8">
            抱歉，你访问的页面不存在或者已经被移除了。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="h-5 w-5" />
            返回首页
          </Link>
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            返回上一页
          </button>
        </div>
      </div>
      
      <div className="mt-16 text-sm text-muted-foreground">
        © 2024 PaperStation Browser - 由Ruanm开发
      </div>
    </div>
  )
}

export default NotFoundPage