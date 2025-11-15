import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
        <div className="text-sm">© {new Date().getFullYear()} dev.studio · Crafted with love and coffee</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#top" className="hover:text-white">Back to top</a>
          <span className="text-white/20">•</span>
          <a href="#contact" className="hover:text-white">Hire me</a>
        </div>
      </div>
    </footer>
  )
}
