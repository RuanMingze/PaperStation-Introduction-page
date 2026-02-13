'use client'

import { useEffect, useState } from 'react'
import { RotateCw } from 'lucide-react'

export function OrientationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [keySequence, setKeySequence] = useState<string[]>([])
  const [portraitClickCount, setPortraitClickCount] = useState(0)
  const [manuallyDismissed, setManuallyDismissed] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth < 768
      const portrait = window.innerHeight > window.innerWidth
      
      if (isMobile && portrait && !manuallyDismissed) {
        setShowPrompt(true)
      } else if (!portrait) {
        setShowPrompt(false)
        setManuallyDismissed(false)
      } else {
        setShowPrompt(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      const newSequence = [...keySequence, key].slice(-4)
      setKeySequence(newSequence)
      
      if (newSequence.join('') === 'wjbg') {
        setShowPrompt(false)
        setManuallyDismissed(true)
        setKeySequence([])
      }
    }

    checkOrientation()

    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [keySequence, manuallyDismissed])

  const handlePortraitClick = () => {
    setPortraitClickCount(prev => {
      const newCount = prev + 1
      if (newCount >= 3) {
        setShowPrompt(false)
        setManuallyDismissed(true)
        return 0
      }
      return newCount
    })
  }

  if (!showPrompt) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4">
      <div className="flex flex-col items-center justify-center gap-6 max-w-md w-full text-center">
        <div className="flex items-center gap-6">
          <div 
            className="h-20 w-12 rounded-xl border-2 border-primary bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
            onClick={handlePortraitClick}
          >
            <div className="h-16 w-10 rounded-lg border border-primary/30 bg-primary/5"></div>
          </div>
          <RotateCw className="h-8 w-8 text-primary animate-spin" style={{ animationDuration: '2s' }} />
          <div className="h-12 w-20 rounded-xl border-2 border-primary bg-primary/10 flex items-center justify-center">
            <div className="h-10 w-16 rounded-lg border border-primary/30 bg-primary/5"></div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">建议横屏浏览</h2>
          <p className="text-muted-foreground">
            检测到您正在使用竖屏模式，横屏浏览可以获得更好的体验。
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          请旋转您的设备以获得最佳浏览体验
        </p>
      </div>
    </div>
  )
}
