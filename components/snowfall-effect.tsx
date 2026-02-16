'use client'

import { useEffect, useRef } from 'react'

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
  wind: number
  opacity: number
}

export function SnowfallEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const snowflakesRef = useRef<Snowflake[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const snowflakes: Snowflake[] = []
    const numSnowflakes = 150

    for (let i = 0; i < numSnowflakes; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        wind: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.5
      })
    }

    snowflakesRef.current = snowflakes

    function drawSnowflake(flake: Snowflake) {
      ctx.beginPath()
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
      ctx.fill()
    }

    function updateSnowflake(flake: Snowflake) {
      flake.y += flake.speed
      flake.x += flake.wind

      if (flake.y > height) {
        flake.y = -10
        flake.x = Math.random() * width
      }

      if (flake.x > width) {
        flake.x = 0
      } else if (flake.x < 0) {
        flake.x = width
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)

      snowflakes.forEach(flake => {
        updateSnowflake(flake)
        drawSnowflake(flake)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    function handleResize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  )
}
