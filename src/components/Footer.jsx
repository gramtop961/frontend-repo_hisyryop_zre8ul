import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMotionPrefs } from './MotionPreferences'

export default function Footer() {
  const ref = useRef(null)
  const { multiplier } = useMotionPrefs()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.8'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [6 * multiplier, 0])
  const y = useTransform(scrollYProgress, [0, 1], [24 * multiplier, 0])

  return (
    <motion.footer ref={ref} style={{ opacity, rotateX, y }} className="border-t border-white/10 [transform-style:preserve-3d]">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
        <div className="text-sm" style={{ transform: 'translateZ(18px)' }}>© {new Date().getFullYear()} dev.studio · Crafted with love and coffee</div>
        <div className="flex items-center gap-4 text-sm" style={{ transform: 'translateZ(14px)' }}>
          <a href="#top" className="hover:text-white">Back to top</a>
          <span className="text-white/20">•</span>
          <a href="#contact" className="hover:text-white">Hire me</a>
        </div>
      </div>
    </motion.footer>
  )
}
