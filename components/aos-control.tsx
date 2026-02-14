"use client"

import { Pause, Play } from "lucide-react"
import { useAnimationStore } from "@/lib/animation-state"

export function AosControl() {
  const { isPaused, toggleAnimation } = useAnimationStore()

  return (
    <div 
      className="fixed bottom-8 left-8 z-50"
    >
      <button
        onClick={toggleAnimation}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        aria-label={isPaused ? "恢复动画" : "暂停动画"}
      >
        {isPaused ? (
          <Play className="h-6 w-6" />
        ) : (
          <Pause className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}
