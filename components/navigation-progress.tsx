'use client'

import { useEffect, useState } from 'react'

export function NavigationProgress() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a') as HTMLAnchorElement | null
      
      if (link) {
        const href = link.getAttribute('href')
        if (href && !href.startsWith('http')) {
          e.preventDefault()
          setIsLoading(true)
          setProgress(0)

          const interval = setInterval(() => {
            setProgress(prev => {
              if (prev >= 90) return prev
              return prev + 5
            })
          }, 50)

          setTimeout(() => {
            setProgress(100)
            setTimeout(() => {
              window.location.href = href
              setIsLoading(false)
            }, 300)
          }, 1000)
        }
      }
    }

    document.addEventListener('click', handleLinkClick)

    return () => {
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <div 
        className="h-full bg-primary transition-all duration-200 ease-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}