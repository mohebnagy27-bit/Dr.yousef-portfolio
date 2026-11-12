import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import WorkShowcase from './components/WorkShowcase.jsx'
import ExocadSection from './components/ExocadSection.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="page__content">
        <Hero />
        <WorkShowcase />
        <ExocadSection />
        <Contact />
      </main>
    </div>
  )
}
