'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitched, setGlitched] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitched(true)
      setTimeout(() => setGlitched(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={glitched ? {
          x: [0, -2, 2, -1, 1, 0],
          y: [0, 1, -1, 2, -2, 0],
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>

      {glitched && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-cyan-400 opacity-70"
            initial={{ x: 0 }}
            animate={{ x: -3 }}
            style={{ mixBlendMode: 'screen' }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-pink-400 opacity-70"
            initial={{ x: 0 }}
            animate={{ x: 3 }}
            style={{ mixBlendMode: 'screen' }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  )
}
