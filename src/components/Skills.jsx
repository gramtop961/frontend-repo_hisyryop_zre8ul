import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Sparkles, Layout, Accessibility, Rocket } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend Engineering', desc: 'React, TypeScript, Vite, Tailwind, Framer Motion, Zustand' },
  { icon: Palette, title: 'Design Systems', desc: 'Token-driven theming, shadcn/ui, Radix primitives, a11y-first' },
  { icon: Layout, title: 'UI/UX Design', desc: 'Wireframes to hi-fi, prototyping, Figma, user testing' },
  { icon: Accessibility, title: 'Accessibility', desc: 'WCAG compliance, keyboard UX, semantic HTML' },
  { icon: Sparkles, title: 'Animations', desc: 'Micro-interactions, motion choreography, 60fps' },
  { icon: Rocket, title: 'Performance', desc: 'Lighthouse 95+, bundle optimization, DX' },
]

export default function Skills() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">What I Do</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">A rare blend of engineering and design to craft interfaces that are as usable as they are beautiful.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ icon: Icon, title, desc }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400/20 to-fuchsia-400/20 border border-white/10 flex items-center justify-center">
              <Icon className="text-white" size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
