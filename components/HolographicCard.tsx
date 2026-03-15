'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface HolographicCardProps {
  children: React.ReactNode
  className?: string
}

export default function HolographicCard({ children, className = '' }: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowX, setGlowX] = useState(50)
  const [glowY, setGlowY] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotX = ((y - centerY) / centerY) * -15
    const rotY = ((x - centerX) / centerX) * 15

    setRotateX(rotX)
    setRotateY(rotY)
    setGlowX((x / rect.width) * 100)
    setGlowY((y / rect.height) * 100)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlowX(50)
    setGlowY(50)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-60 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.6), rgba(236, 72, 153, 0.4), transparent 50%)`,
          filter: 'blur(20px)',
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.8), transparent 50%)`,
            mixBlendMode: 'overlay',
          }}
        />

        {children}
      </div>

      {/* Holographic shine effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(${(glowX / 100) * 360}deg,
            transparent 20%,
            rgba(59, 130, 246, 0.3) 50%,
            rgba(147, 51, 234, 0.3) 60%,
            rgba(236, 72, 153, 0.3) 70%,
            transparent 80%)`,
          opacity: 0.6,
          mixBlendMode: 'color-dodge',
        }}
      />
    </motion.div>
  )
}
