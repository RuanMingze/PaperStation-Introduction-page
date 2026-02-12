"use client"

import { useState, useEffect, useCallback } from "react"

const words = ["聪明", "快速", "智能", "丰富", "安全"]

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<"in" | "out">("in")

  const cycle = useCallback(() => {
    setPhase("out")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
      setPhase("in")
    }, 400)
  }, [])

  useEffect(() => {
    const interval = setInterval(cycle, 2600)
    return () => clearInterval(interval)
  }, [cycle])

  return (
    <span className="relative inline-block min-w-[2.5ch] text-primary">
      <span
        className="inline-block transition-all duration-400 ease-in-out"
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
