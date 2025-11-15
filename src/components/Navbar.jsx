import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-950/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-white/90 hover:text-white">dev.studio</a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/70 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
            <a href="#contact" className="text-white/70 hover:text-white"><Mail size={18} /></a>
          </div>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 space-y-3">
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
    </header>
  )
}
