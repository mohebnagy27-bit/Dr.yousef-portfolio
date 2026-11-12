import './Hero.css'
import { profile } from '../data/profile.js'

export default function Hero() {
  const { name, title, eyebrow, intro, portrait, links } = profile

  return (
    <section className="hero" id="about" aria-labelledby="hero-name">
      <div className="hero__inner">
        {/* LEFT: portrait */}
        <figure className="hero__portrait">
          <img
            className="hero__portrait-img"
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            fetchPriority="high"
          />
        </figure>

        {/* RIGHT: personal information */}
        <div className="hero__info">
          <p className="hero__eyebrow reveal" style={{ '--i': 0 }}>
            {eyebrow}
          </p>
          <h1 className="hero__name reveal" id="hero-name" style={{ '--i': 1 }}>
            {name}
          </h1>
          <p className="hero__title reveal" style={{ '--i': 2 }}>
            {title}
          </p>
          <p className="hero__intro reveal" style={{ '--i': 3 }}>
            {intro}
          </p>

          {/* Slot for optional details / social links, added later */}
          {links.length > 0 && (
            <ul className="hero__links reveal" style={{ '--i': 4 }}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
