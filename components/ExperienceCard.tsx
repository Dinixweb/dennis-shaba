'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Briefcase, Calendar, MapPin, Users, Zap } from 'lucide-react'

interface ExperienceCardProps {
  position: string
  company: string
  companyDescription: string
  location: string
  startDate: string
  endDate?: string
  isCurrentRole: boolean
  highlights: string[]
}

export default function ExperienceCard({
  position,
  company,
  companyDescription,
  location,
  startDate,
  endDate,
  isCurrentRole,
  highlights,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const calculateDuration = () => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0) return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-gray-200 rounded-lg hover:border-gray-400 transition-colors duration-300">
        {/* Card Header - Always visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-start justify-between gap-4 hover:bg-gray-50/50 transition-colors"
        >
          <div className="flex-1 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Briefcase className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{position}</h3>
                <p className="text-sm text-gray-600 font-medium">{company}</p>
              </div>
            </div>

            {/* Quick Info Row */}
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gray-400" />
                {location}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                {formatDate(startDate)} — {isCurrentRole ? 'Present' : endDate ? formatDate(endDate) : ''}
              </div>
              {isCurrentRole && (
                <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-semibold rounded">
                  Current
                </span>
              )}
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-2"
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </button>

        {/* Expandable Details */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-gray-100">
            {/* Duration */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-gray-600" />
                <span className="font-semibold text-gray-900">Duration</span>
              </div>
              <p className="text-gray-700">{calculateDuration()}</p>
            </div>

            {/* Company Description */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="font-semibold text-gray-900">About the Company</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">{companyDescription}</p>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-gray-600" />
                <span className="font-semibold text-gray-900">Key Achievements</span>
              </div>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-gray-400 flex-shrink-0 mt-1">▸</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
