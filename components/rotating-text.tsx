"use client"

import { useState, useEffect, useCallback } from "react"
import { useAnimationStore } from "@/lib/animation-state"

const words = ["聪明", "快速", "智能", "丰富", "安全", "高效", "便捷", "稳定", "现代", "强大", "灵活", "优雅", "可靠", "轻量", "专业", "创新"]

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<"in" | "out">("in")
  const { isPaused } = useAnimationStore()

  const cycle = useCallback(() => {
    if (isPaused) return
    
    setPhase("out")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
      setPhase("in")
    }, 400)
  }, [isPaused])

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(cycle, 2600)
    return () => clearInterval(interval)
  }, [cycle, isPaused])

  return (
    <span className="relative inline min-w-[2.5ch] text-primary">
      <span
        className="inline transition-all duration-400 ease-in-out"
        style={{
          opacity: phase === "in" ? 1 : 0,
          transform: phase === "in" ? "translateY(0)" : "translateY(-20px)",
          filter: phase === "in" ? "blur(0px)" : "blur(4px)",
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}
