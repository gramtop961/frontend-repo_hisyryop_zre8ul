import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Scroll-driven 3D transforms
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -8])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.85])

  return (
    <section ref={ref} className="relative min-h-[120vh] w-full overflow-hidden" id="top">
      {/* 3D scene wrapper with scroll-based transforms */}
      <motion.div
        className="absolute inset-0 will-change-transform [transform-style:preserve-3d]"
        style={{ scale, rotateX, rotateY, y, opacity }}
      >
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* depth gradient + vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(56,189,248,0.16),transparent_60%),radial-gradient(60%_60%_at_90%_30%,rgba(168,85,247,0.14),transparent_60%),linear-gradient(to_bottom,rgba(2,6,23,0.45),rgba(2,6,23,0.85))]" />
      </motion.div>

      {/* Content layer */}
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

        {/* Scroll cue */}
        <motion.div
          className="mt-16 flex items-center gap-2 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="h-2 w-2 rounded-full bg-white/50 animate-ping" />
          <span className="text-sm">Scroll to explore — the 3D scene responds</span>
        </motion.div>
      </div>

      {/* Spacer to allow meaningful scroll for the 3D parallax */}
      <div className="h-[40vh]" />
    </section>
  )
}
