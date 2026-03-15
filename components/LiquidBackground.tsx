'use client'

import { useEffect, useRef } from 'react'

export default function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        const colors = ['rgba(59, 130, 246, 0.5)', 'rgba(147, 51, 234, 0.5)', 'rgba(236, 72, 153, 0.5)']
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    let mouseX = 0
    let mouseY = 0
    let time = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    function animate() {
      if (!ctx || !canvas) return

      time += 0.01

      // Create liquid gradient effect
      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 400
      )
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)')
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.05)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and connect particles
      particles.forEach((particle, i) => {
        particle.update()
        particle.draw()

        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - distance / 100) * 0.3})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        // Attract particles to mouse
        const dxMouse = mouseX - particle.x
        const dyMouse = mouseY - particle.y
        const distToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

        if (distToMouse < 200) {
          particle.vx += dxMouse * 0.00001
          particle.vy += dyMouse * 0.00001
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-60" />
}
