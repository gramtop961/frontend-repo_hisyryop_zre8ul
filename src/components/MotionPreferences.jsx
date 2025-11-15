import React, { createContext, useContext, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Motion intensity context
// levels: calm (0.7), balanced (1), bold (1.35)
const MotionContext = createContext({ level: 'balanced', multiplier: 1, setLevel: () => {} })

export function MotionProvider({ children }) {
  const prefersReduced = useReducedMotion()
  const [level, setLevel] = useState(prefersReduced ? 'calm' : 'balanced')

  const multiplier = useMemo(() => {
    switch (level) {
      case 'calm':
        return 0.7
      case 'bold':
        return 1.35
      default:
        return 1
    }
  }, [level])

  const value = useMemo(() => ({ level, setLevel, multiplier, prefersReduced }), [level, multiplier, prefersReduced])
  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
}

export function useMotionPrefs() {
  return useContext(MotionContext)
}

export function MotionToggle() {
  const { level, setLevel } = useMotionPrefs()
  const next = () => {
    setLevel(level === 'calm' ? 'balanced' : level === 'balanced' ? 'bold' : 'calm')
  }
  const label = level === 'calm' ? 'Calm' : level === 'bold' ? 'Bold' : 'Balanced'
  return (
    <button
      onClick={next}
      aria-label={`Motion intensity: ${label}. Click to change.`}
      className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 hover:bg-white/10"
    >
      <span className="inline-block h-2 w-2 rounded-full" style={{ background: level === 'calm' ? '#22c55e' : level === 'bold' ? '#f97316' : '#38bdf8' }} />
      {label}
    </button>
  )
}
