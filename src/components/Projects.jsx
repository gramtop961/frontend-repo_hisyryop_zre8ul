import React from 'react'
import { motion } from 'framer-motion'
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

export default function Projects() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Snapshots of recent projects that showcase the balance of delightful UX and robust engineering.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur block"
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
        ))}
      </div>
    </div>
  )
}
