// 简单的全局状态管理
import { useState, useEffect } from 'react'

let isPausedGlobal = false
const listeners: (() => void)[] = []

export function useAnimationStore() {
  const [isPaused, setIsPaused] = useState(isPausedGlobal)

  // 注册监听器
  useEffect(() => {
    const listener = () => setIsPaused(isPausedGlobal)
    listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  const toggleAnimation = () => {
    isPausedGlobal = !isPausedGlobal
    // 通知所有监听器
    listeners.forEach(listener => listener())
  }

  return {
    isPaused,
    toggleAnimation
  }
}
