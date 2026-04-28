import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

function App() {
  useEffect(() => {
    document.title = 'Vanisha | Portfolio'
  }, [])

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <footer className="bg-gray-900 border-t border-gray-800 text-center py-6 text-gray-600 text-sm">
        Designed & Built by Vanisha Sharath · 2025
      </footer>
    </div>
  )
}

export default App