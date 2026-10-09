
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Vanisha | Portfolio'
  }, [])

  return (
    <div className="portfolio min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="border-t border-[#eadbd1] bg-[#fffaf6] px-6 py-7 text-center text-sm text-[#8b7770]">
        Designed &amp; Built with care by Vanisha Sharath · 2026
      </footer>
    </div>
  )
}

export default App
