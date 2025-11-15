import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <section id="skills" className="relative py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Skills />
          </div>
        </section>
        <section id="work" className="relative py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Projects />
          </div>
        </section>
        <section id="contact" className="relative py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
