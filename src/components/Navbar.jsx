import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Gauge } from 'lucide-react'
import { MotionToggle } from './MotionPreferences'
import { useMotionPrefs } from './MotionPreferences'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function MotionLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -1.5, rotateX: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="text-white/70 hover:text-white transition-colors [transform-style:preserve-3d]"
      style={{ transform: 'translateZ(18px)' }}
    >
      {children}
    </motion.a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const { multiplier } = useMotionPrefs()
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.25, 0.45, 0.6])
  const blur = useTransform(scrollYProgress, [0, 1], [6, 10])
  const y = useTransform(scrollYProgress, [0, 1], [0, -2 * multiplier])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      ref={ref}
      style={{ y }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'border-b border-white/10' : ''}`}
    >
      <motion.div
        style={{ backdropFilter: blur.to(v => `blur(${v}px)`), backgroundColor: backdropOpacity.to(o => `rgba(2,6,23,${o})`) }}
        className="w-full"
      >
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between [transform-style:preserve-3d]">
          <a href="#top" className="font-semibold tracking-tight text-white/90 hover:text-white" style={{ transform: 'translateZ(24px)' }}>dev.studio</a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <MotionLink key={item.href} href={item.href}>{item.label}</MotionLink>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <MotionToggle />
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <motion.a href="https://github.com" target="_blank" rel="noreferrer" whileHover={{ rotateY: 8 * multiplier, scale: 1.06 }} className="text-white/70 hover:text-white [transform-style:preserve-3d]" style={{ transform: 'translateZ(18px)' }}><Github size={18} /></motion.a>
              <motion.a href="https://linkedin.com" target="_blank" rel="noreferrer" whileHover={{ rotateY: -8 * multiplier, scale: 1.06 }} className="text-white/70 hover:text-white [transform-style:preserve-3d]" style={{ transform: 'translateZ(18px)' }}><Linkedin size={18} /></motion.a>
              <motion.a href="#contact" whileHover={{ rotateX: -6 * multiplier, scale: 1.06 }} className="text-white/70 hover:text-white [transform-style:preserve-3d]" style={{ transform: 'translateZ(18px)' }}><Mail size={18} /></motion.a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 space-y-3">
            <div className="flex items-center justify-between pb-2">
              <span className="text-white/70 text-sm">Motion</span>
              <MotionToggle />
            </div>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-white/80 hover:text-white">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
              <a href="#contact" className="text-white/70 hover:text-white"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}
