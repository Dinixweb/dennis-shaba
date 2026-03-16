'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import GlassCard from '@/components/GlassCard'
import ScrollProgress from '@/components/ScrollProgress'
import Navigation from '@/components/Navigation'
import CustomCursor from '@/components/CustomCursor'
import ExperienceCard from '@/components/ExperienceCard'
import { Code2, Database, Cloud, Wrench, Layers, Users as UsersIcon, BookOpen, Zap } from 'lucide-react'

export default function Home() {
  const { basics, work, education, certificates, skills, projects, ventures } = portfolioData as any
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

      <main className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 cursor-none md:pl-72">
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
              { label: 'GitHub', url: basics.profiles.find((p: any) => p.network === 'GitHub')?.url },
              { label: 'LinkedIn', url: basics.profiles.find((p: any) => p.network === 'LinkedIn')?.url },
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
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center text-gray-900"
          >
            Experience
          </motion.h2>

          <div className="space-y-4">
            {work.map((job: any, index: number) => (
              <ExperienceCard
                key={index}
                position={job.position}
                company={job.name}
                companyDescription={job.companyDescription}
                location={job.location}
                startDate={job.startDate}
                endDate={job.endDate}
                isCurrentRole={job.isCurrentRole}
                highlights={job.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center text-gray-900"
          >
            Founder Ventures
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures && ventures.map((venture: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full block"
                >
                  <GlassCard className="h-full border-l-4 border-gray-300 hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Zap className="w-6 h-6 text-gray-700" />
                      </div>
                      <span className="px-2 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full">
                        {venture.role}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {venture.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {venture.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        Launched {new Date(venture.launchDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                      {venture.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Technologies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {venture.technologies.map((tech: string, i: number) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        View Platform →
                      </p>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center text-gray-900"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Frontend',
                icon: Code2,
                skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'Redux', 'Tailwind CSS', 'HTML/CSS', 'Angular', 'AngularJS']
              },
              {
                name: 'Backend',
                icon: Layers,
                skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'Python', 'RESTful APIs', 'GraphQL', 'Microservices', 'Spring Web Flux']
              },
              {
                name: 'Databases',
                icon: Database,
                skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'JPA', 'Hibernate', 'SQL Optimization']
              },
              {
                name: 'DevOps & Cloud',
                icon: Cloud,
                skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'Jenkins', 'Apache Kafka']
              },
              {
                name: 'Testing & Tools',
                icon: Wrench,
                skills: ['JUnit', 'Mockito', 'Selenium', 'Git', 'ApexCharts', 'Axios']
              },
              {
                name: 'Specializations',
                icon: UsersIcon,
                skills: ['Team Leadership', 'System Architecture', 'Full Stack Development', 'Performance Optimization', 'Code Review', 'Security']
              },
            ].map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <GlassCard className="h-full border-l-4 border-gray-300 hover:border-gray-600 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-gray-700" />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wide">
                        {category.name}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04 }}
                          className="text-gray-700 text-sm leading-relaxed flex items-start"
                        >
                          <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">–</span>
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center text-gray-900"
          >
            Education
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu: any, index: number) => {
              const startYear = new Date(edu.startDate).getFullYear()
              const endYear = new Date(edu.endDate).getFullYear()
              const duration = endYear - startYear

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full border-l-4 border-gray-300 hover:border-gray-600 transition-colors duration-300">
                    <div className="mb-4 p-2 bg-gray-100 rounded-lg w-fit">
                      <BookOpen className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {edu.studyType}
                    </h3>
                    <p className="text-xl text-gray-600 mb-3 font-medium">
                      {edu.area}
                    </p>
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors font-medium mb-4 inline-block"
                    >
                      {edu.institution} →
                    </a>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">{startYear} — {endYear}</span>
                      {' • '}
                      <span className="text-gray-400">{duration} years</span>
                    </p>
                  </GlassCard>
                </motion.div>
              )
            })}
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
            className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-center text-gray-900"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project: any, index: number) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="h-full border-l-4 border-gray-300 hover:border-gray-600 transition-all duration-300 hover:shadow-xl">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Zap className="w-6 h-6 text-gray-700" />
                    </div>
                    {project.primaryLanguage && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                        {project.primaryLanguage}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">
                    View Project
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
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
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-12 text-gray-900">
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
