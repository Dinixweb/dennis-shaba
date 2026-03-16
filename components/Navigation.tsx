'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Home, Briefcase, Zap, BookOpen, Rocket, Mail, Building2 } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Ventures', href: '#ventures', icon: Building2 },
  { name: 'Skills', href: '#skills', icon: Zap },
  { name: 'Education', href: '#education', icon: BookOpen },
  { name: 'Projects', href: '#projects', icon: Rocket },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section
      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <motion.nav
        initial={{ x: -288, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-72 z-40 backdrop-blur-xl bg-white/80"
      >
        {/* Subtle Border */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-black/10 via-black/5 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Profile Section */}
          <div className="px-8 pt-10 pb-8">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-6"
            >
              <div className="relative w-16 h-16 mx-auto">
                <Image
                  src="https://avatars.githubusercontent.com/u/13332211?v=4"
                  alt="Dennis Shaba"
                  width={64}
                  height={64}
                  priority
                  unoptimized
                  className="rounded-full shadow-sm object-cover"
                />
              </div>
            </motion.div>

            <h2 className="text-center text-base font-semibold text-gray-900">Dennis Shaba</h2>
            <p className="text-center text-xs text-gray-500 font-medium mt-2">Software Engineer</p>
          </div>

          {/* Navigation Items */}
          <ul className="flex flex-col px-3 space-y-1 flex-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '')
              const IconComponent = item.icon

              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.04 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="relative w-full group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gray-100 rounded-lg"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}

                    <div className="relative px-4 py-2.5 flex items-center gap-3 rounded-lg transition-all duration-200 group-hover:bg-gray-50/60">
                      <IconComponent className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
                        isActive
                          ? 'text-gray-900'
                          : 'text-gray-600 group-hover:text-gray-900'
                      }`} />
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-gray-900'
                          : 'text-gray-600 group-hover:text-gray-900'
                      }`}>
                        {item.name}
                      </span>
                    </div>
                  </button>
                </motion.li>
              )
            })}
          </ul>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-gray-200/50">
            <p className="text-xs text-gray-400 text-center font-medium">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 backdrop-blur-2xl bg-white/70 border border-white/60 rounded-full shadow-lg"
      >
        <svg
          className="w-6 h-6 text-gray-900"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 right-4 z-40 backdrop-blur-2xl bg-white/70 border border-white/60 rounded-2xl shadow-lg overflow-hidden"
          >
            <ul className="py-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-gray-900 bg-white/50'
                        : 'text-gray-700 hover:bg-white/30'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
