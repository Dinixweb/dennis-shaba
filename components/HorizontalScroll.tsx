'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HorizontalScrollProps {
  children: React.ReactNode
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={scrollRef}
      className="md:block"
    >
      {/* Desktop: Normal vertical layout */}
      <div className="hidden md:block space-y-8">
        {children}
      </div>

      {/* Mobile: Horizontal scroll */}
      <div className="md:hidden overflow-x-auto hide-scrollbar">
        <div className="flex gap-6 pb-4">
          {children}
        </div>
      </div>
    </div>
  )
}
