import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" id="top">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(56,189,248,0.16),transparent_60%),radial-gradient(60%_60%_at_90%_30%,rgba(168,85,247,0.14),transparent_60%),linear-gradient(to_bottom,rgba(2,6,23,0.4),rgba(2,6,23,0.8))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Frontend Developer & UI/UX Designer
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            I craft delightful, performant web experiences. I blend modern frontend engineering with human-centered design to ship beautiful, accessible products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 ring-1 ring-sky-400/40 hover:bg-sky-400 transition-colors">View Work</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/10 transition-colors">Contact Me</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/60">
            <span className="text-xs">React • TypeScript • Tailwind • Figma • Accessibility</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
