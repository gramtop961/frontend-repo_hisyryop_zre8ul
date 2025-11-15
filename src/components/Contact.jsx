import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 800)
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-sky-400/10 to-fuchsia-400/10 blur-3xl" />
      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Mail size={14} /> Let's connect
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold">Have a project in mind?</h3>
            <p className="mt-2 text-white/70">Tell me a little about your goals, timeline, and what success looks like. I’ll get back to you within 24 hours.</p>
            <div className="mt-6 text-white/70 text-sm">Email: you@yourdomain.com</div>
          </div>
          <form onSubmit={onSubmit} className="flex-1 w-full grid grid-cols-1 gap-4">
            <input className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Your name" required />
            <input type="email" className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Email address" required />
            <textarea rows="4" className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Tell me about your project" required />
            <button disabled={loading || sent} className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 ring-1 ring-sky-400/40 hover:bg-sky-400 transition-colors disabled:opacity-60">
              {sent ? 'Message sent!' : loading ? 'Sending…' : <>Send <Send size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
