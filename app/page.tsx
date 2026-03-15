'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import GlassCard from '@/components/GlassCard'
import ScrollProgress from '@/components/ScrollProgress'
import Navigation from '@/components/Navigation'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  const { basics, work, education, certificates, skills, projects } = portfolioData
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Parallax effect for background blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <CustomCursor />

      <main className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 cursor-none md:pl-40">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          {/* Glassmorphic Background Elements with Parallax */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            />
            <motion.div
              style={{ y: y2 }}
              className="absolute top-40 right-10 w-72 h-72 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
            />
            <motion.div
              style={{ y: y3 }}
              className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
            />
          </div>

        <motion.div style={{ opacity, scale }} className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <Image
                src={basics.image}
                alt={basics.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-6 grayscale hover:grayscale-0 transition-all duration-700 ring-4 ring-white/50 shadow-2xl"
              />
            </div>

            <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              {basics.name}
            </h1>

            <p className="text-2xl md:text-3xl font-light text-gray-600 mb-12 tracking-wide group">
              <span className="inline-block hover:tracking-wider transition-all duration-300">
                Senior Software Engineer & Team Lead
              </span>
            </p>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Leading development teams and architecting scalable solutions.
              <br />
              Passionate about clean code, innovation, and mentoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 flex gap-8 justify-center items-center"
          >
            {[
              { label: 'GitHub', url: basics.profiles.find(p => p.network === 'GitHub')?.url },
              { label: 'LinkedIn', url: basics.profiles.find(p => p.network === 'LinkedIn')?.url },
              { label: 'Email', url: `mailto:${basics.email}` },
            ].map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-400 hover:text-gray-900 transition-colors duration-300 text-sm tracking-wider uppercase group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {work.slice(0, 6).map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-medium mb-2">{job.position}</h3>
                      <p className="text-xl text-gray-600 mb-2">{job.name}</p>
                      <p className="text-sm text-gray-400">{job.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <p className="text-sm text-gray-500">
                        {new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} —{' '}
                        {job.isCurrentRole ? 'Present' : new Date(job.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                      {job.isCurrentRole && (
                        <span className="inline-block mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="text-gray-600 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Frontend', skills: ['Next.js', 'React', 'TypeScript', 'React Native'] },
              { name: 'Backend', skills: ['Java', 'Node.js', 'Spring Boot', 'Express'] },
              { name: 'DevOps', skills: ['AWS', 'GCP', 'Docker', 'Kubernetes'] },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <GlassCard>
                  <h3 className="text-xl font-medium mb-6">{category.name}</h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-gray-600 font-light">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard>
                  <h3 className="text-xl font-medium mb-2">
                    {edu.studyType} in {edu.area}
                  </h3>
                  <p className="text-gray-600 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(edu.startDate).getFullYear()} — {new Date(edu.endDate).getFullYear()}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block"
              >
                <GlassCard className="h-full">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-gray-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 font-light leading-relaxed">
                    {project.description}
                  </p>
                  {project.primaryLanguage && (
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {project.primaryLanguage}
                    </span>
                  )}
                </GlassCard>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-12 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-16 font-light">
              Open to discussing new opportunities and collaborations.
            </p>

            <a
              href={`mailto:${basics.email}`}
              className="inline-block px-12 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm tracking-wider uppercase shadow-2xl"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 backdrop-blur-2xl bg-white/20 border-t border-white/20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-gray-400 font-light">
            © {new Date().getFullYear()} {basics.name}
          </p>
        </div>
      </footer>
    </main>
    </>
  )
}
