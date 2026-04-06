import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header-accent-line" />
      <div className="header-container">
        <a href="/" className="header-logo" aria-label="Home">
          <span className="header-logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </span>
          <span className="header-logo-text">
            React<span className="header-logo-text-accent">App</span>
          </span>
        </a>

        <nav
          className={`header-nav${menuOpen ? ' header-nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="header-nav-list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`header-nav-link${activeLink === href ? ' active' : ''}`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="header-cta" onClick={(e) => handleNavClick(e, '#contact')}>
            Get Started
          </a>
        </nav>

        <button
          className={`header-hamburger${menuOpen ? ' header-hamburger--active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="header-hamburger-line" />
          <span className="header-hamburger-line" />
          <span className="header-hamburger-line" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="header-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Header
