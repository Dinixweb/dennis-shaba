'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MorphingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('hoverable') ||
        window.getComputedStyle(target).cursor === 'pointer'
      )
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main blob cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <motion.path
            d="M20,5 Q30,10 35,20 T30,35 Q20,40 10,35 T5,20 Q10,10 20,5 Z"
            fill="none"
            stroke="url(#cursorGradient)"
            strokeWidth="2"
            animate={{
              d: isPointer
                ? "M20,2 Q32,8 38,20 T32,38 Q20,44 8,38 T2,20 Q8,8 20,2 Z"
                : isClicking
                ? "M20,8 Q28,12 32,20 T28,32 Q20,36 12,32 T8,20 Q12,12 20,8 Z"
                : "M20,5 Q30,10 35,20 T30,35 Q20,40 10,35 T5,20 Q10,10 20,5 Z",
            }}
            transition={{ duration: 0.3 }}
          />
          <defs>
            <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Trailing particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999]"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
          }}
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: [0.6, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.05,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  )
}
