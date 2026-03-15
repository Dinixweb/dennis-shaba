'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const profileImages = [
  '/assets/1.jpeg',
  '/assets/2.jpeg',
  '/assets/3.jpeg',
  '/assets/4.jpeg',
  '/assets/5.jpeg',
  '/assets/6.jpeg',
  '/assets/7.jpeg',
  '/assets/8.jpeg',
  '/assets/9.jpeg',
  '/assets/10.jpeg',
]

interface RotatingProfileImageProps {
  name: string
}

export default function RotatingProfileImage({ name }: RotatingProfileImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-[120px] h-[120px] mx-auto rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={profileImages[currentIndex]}
            alt={name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
