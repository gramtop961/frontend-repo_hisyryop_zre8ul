import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Send, Sparkles } from 'lucide-react'
import { useMotionPrefs } from './MotionPreferences'

function useTilt() {
  const ref = useRef(null)
  const [rx, setRx] = useState(0)
  const [ry, setRy] = useState(0)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) * 2 - 1
    const py = (y / rect.height) * 2 - 1
    const max = 6
    setRy(px * max)
    setRx(-py * max)
  }
  const onLeave = () => { setRx(0); setRy(0) }
  return { ref, rx, ry, onMove, onLeave }
}

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const { multiplier } = useMotionPrefs()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 800)
  }

  // Scroll-driven section entrance
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.9', 'end 0.2'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [8 * multiplier, 0])
  const y = useTransform(scrollYProgress, [0, 1], [50 * multiplier, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1])

  // Card tilt for the interactive panel
  const card = useTilt()

  return (
    <motion.div ref={sectionRef} style={{ rotateX, y, opacity, scale }} className="relative">
      {/* Ambient 3D glow + particles */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(60%_60%_at_20%_10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(60%_60%_at_80%_30%,rgba(168,85,247,0.14),transparent_60%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-fuchsia-400/20 blur-3xl"
        animate={{ y: [0, 12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur [transform-style:preserve-3d]">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 will-change-transform" style={{ transform: 'translateZ(30px)' }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Mail size={14} /> Let's connect
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold">Have a project in mind?</h3>
            <p className="mt-2 text-white/70">Tell me a little about your goals, timeline, and what success looks like. I’ll get back to you within 24 hours.</p>
            <div className="mt-6 text-white/70 text-sm">Email: you@yourdomain.com</div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            ref={card.ref}
            onMouseMove={card.onMove}
            onMouseLeave={card.onLeave}
            style={{ rotateX: card.rx * multiplier, rotateY: card.ry * multiplier, transformStyle: 'preserve-3d' }}
            transition={{ type: 'spring', stiffness: 200, damping: 16 }}
            className="flex-1 w-full grid grid-cols-1 gap-4 will-change-transform"
          >
            <div style={{ transform: 'translateZ(24px)' }}>
              <input className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Your name" required />
            </div>
            <div style={{ transform: 'translateZ(20px)' }}>
              <input type="email" className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Email address" required />
            </div>
            <div style={{ transform: 'translateZ(16px)' }}>
              <textarea rows="4" className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Tell me about your project" required />
            </div>
            <motion.button
              disabled={loading || sent}
              whileHover={{ scale: 1.02, rotateX: -2 * multiplier }}
              whileTap={{ scale: 0.98 }}
              style={{ transform: 'translateZ(28px)' }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 ring-1 ring-sky-400/40 hover:bg-sky-400 transition-colors disabled:opacity-60"
            >
              {sent ? 'Message sent!' : loading ? 'Sending…' : <>Send <Send size={16} /></>}
            </motion.button>
          </motion.form>
        </div>

        {/* Bottom subtle sparkle */}
        <div className="mt-6 flex items-center gap-2 text-white/60 text-sm" style={{ transform: 'translateZ(12px)' }}>
          <Sparkles size={16} className="text-sky-300" />
          <span>3D-enhanced form — moves with your cursor and scroll</span>
        </div>
      </div>
    </motion.div>
  )
}
