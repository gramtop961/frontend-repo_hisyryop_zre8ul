import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Palette, Sparkles, Layout, Accessibility, Rocket } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend Engineering', desc: 'React, TypeScript, Vite, Tailwind, Framer Motion, Zustand' },
  { icon: Palette, title: 'Design Systems', desc: 'Token-driven theming, shadcn/ui, Radix primitives, a11y-first' },
  { icon: Layout, title: 'UI/UX Design', desc: 'Wireframes to hi-fi, prototyping, Figma, user testing' },
  { icon: Accessibility, title: 'Accessibility', desc: 'WCAG compliance, keyboard UX, semantic HTML' },
  { icon: Sparkles, title: 'Animations', desc: 'Micro-interactions, motion choreography, 60fps' },
  { icon: Rocket, title: 'Performance', desc: 'Lighthouse 95+, bundle optimization, DX' },
]

function TiltCard({ children }) {
  const [rx, setRx] = useState(0)
  const [ry, setRy] = useState(0)
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) * 2 - 1 // -1 to 1
    const py = (y / rect.height) * 2 - 1
    const max = 8
    setRy(px * max)
    setRx(-py * max)
  }

  const reset = () => { setRx(0); setRy(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default function Skills() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.2'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [6, 0])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1])

  return (
    <motion.div ref={containerRef} style={{ scale, rotateX, y, opacity }}>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">What I Do</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">A rare blend of engineering and design to craft interfaces that are as usable as they are beautiful.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ icon: Icon, title, desc }, idx) => (
          <TiltCard key={title}>
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400/20 to-fuchsia-400/20 border border-white/10 flex items-center justify-center" style={{ transform: 'translateZ(30px)' }}>
              <Icon className="text-white" size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold" style={{ transform: 'translateZ(20px)' }}>{title}</h3>
            <p className="mt-2 text-sm text-white/70" style={{ transform: 'translateZ(12px)' }}>{desc}</p>
          </TiltCard>
        ))}
      </div>
    </motion.div>
  )
}
