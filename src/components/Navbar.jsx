import { useEffect, useState } from 'react'
import './Navbar.css'

// Order matters. Only "about" has a matching section for now; the other
// hrefs are ready for their sections to be added later.
const items = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'clinical', label: 'Clinical Cases', href: '#clinical' },
  { id: 'exocad', label: 'Exocad', href: '#exocad' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState('about')

  // The section crossing a thin band at the middle of the viewport is the active one.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-49% 0px -49% 0px' },
    )
    items.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
    }, [])

    return (
      <header className="navbar">
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__list">
            {items.map((item) => (
              <li className="navbar__item" key={item.id}>
                <a
                  className={`navbar__link${activeId === item.id ? ' is-active' : ''}`}
                  href={item.href}
                  aria-current={activeId === item.id ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }