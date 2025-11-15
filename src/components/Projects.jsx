import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'SaaS Dashboard UI',
    desc: 'Data-rich analytics dashboard with dark mode, charts, and real-time interactions.',
    tags: ['React', 'Tailwind', 'Recharts'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1706037151159-75266368d630?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwRGFzaGJvYXJkJTIwVUl8ZW58MHwwfHx8MTc2MzIxODQ0N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Design System Kit',
    desc: 'A tokenized component library with theming and accessibility baked in.',
    tags: ['Figma', 'Radix', 'shadcn/ui'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: '3D Interactive Hero',
    desc: 'Playful WebGL hero section powered by Spline with layered motion.',
    tags: ['Spline', 'Framer Motion', 'Vite'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop'
  }
]

function ProjectCard({ p, idx }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotateY = useTransform(scrollYProgress, [0, 1], [8, -8])
  const y = useTransform(scrollYProgress, [0, 1], [20, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1])

  return (
    <motion.a
      ref={ref}
      href={p.href}
      target="_blank"
      rel="noreferrer"
      style={{ rotateY, y, opacity, transformStyle: 'preserve-3d' }}
      initial={{ scale: 0.98 }}
      whileHover={{ scale: 1.01, rotateX: -2, rotateY: 2 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur block will-change-transform"
    >
      <img src={p.image} alt="project" className="h-56 w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-white/70">{p.desc}</p>
          </div>
          <ExternalLink size={18} className="text-white/70 group-hover:text-white" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map(t => (
            <span key={t} className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-white/70">{t}</span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.9', 'end 0.3'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1])

  return (
    <motion.div ref={containerRef} style={{ rotateX, scale }}>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Snapshots of recent projects that showcase the balance of delightful UX and robust engineering.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} p={p} idx={idx} />
        ))}
      </div>
    </motion.div>
  )
}
