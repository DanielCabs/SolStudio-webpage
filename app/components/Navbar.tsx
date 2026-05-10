'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.2rem 4rem',
        background: scrolled ? 'rgba(253,250,247,0.95)' : 'rgba(253,250,247,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(196,149,106,0.2)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <Link href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="6" fill="none" stroke="#C4956A" strokeWidth="1.2"/>
          <circle cx="14" cy="14" r="2" fill="#C4956A"/>
          <line x1="14" y1="4"  x2="14" y2="1"  stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
          <line x1="14" y1="27" x2="14" y2="24" stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
          <line x1="4"  y1="14" x2="1"  y2="14" stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
          <line x1="27" y1="14" x2="24" y2="14" stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
          <line x1="7"  y1="7"  x2="5"  y2="5"  stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
          <line x1="23" y1="23" x2="21" y2="21" stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
          <line x1="21" y1="7"  x2="23" y2="5"  stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
          <line x1="7"  y1="23" x2="5"  y2="21" stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem', fontWeight: 300,
          letterSpacing: '3px', color: 'var(--tierra)',
        }}>
          SolStudio
        </span>
      </Link>

      {/* Links — desktop */}
      <ul style={{
        display: 'flex', gap: '2.5rem', listStyle: 'none',
        margin: 0, padding: 0,
      }}
        className="nav-desktop"
      >
        {[
          { label: 'Servicios',   href: '#servicios' },
          { label: 'Sobre Sol',   href: '#sobre' },
          { label: 'Testimonios', href: '#testimonios' },
          { label: 'Ubicación',   href: '#ubicacion' },
        ].map((item) => (
          <li key={item.href}>
            <a href={item.href} style={{
              fontSize: '0.72rem', letterSpacing: '2.5px',
              textTransform: 'uppercase', color: 'var(--muted)',
              textDecoration: 'none', fontWeight: 400,
              transition: 'color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--tierra)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contacto" style={{
        background: 'var(--arena)', color: 'var(--marfil)',
        padding: '0.55rem 1.5rem', borderRadius: '2px',
        fontSize: '0.72rem', letterSpacing: '2px',
        textTransform: 'uppercase', textDecoration: 'none',
        fontWeight: 400, transition: 'background 0.3s',
      }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--tierra)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--arena)')}
        className="nav-cta-desktop"
      >
        Reservar turno
      </a>

      {/* Hamburger — mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', flexDirection: 'column', gap: '5px',
          padding: '4px',
        }}
        aria-label="Menú"
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '1px',
            background: 'var(--tierra)', transition: 'all 0.3s',
            transformOrigin: 'center',
            transform: menuOpen
              ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
              : i === 1 ? 'scaleX(0)'
              : 'rotate(-45deg) translate(4px, -4px)'
              : 'none',
          }}/>
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: 'var(--marfil)',
          borderBottom: '1px solid var(--crema)',
          padding: '1.5rem 2rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.2rem',
          zIndex: 99,
        }}>
          {[
            { label: 'Servicios',   href: '#servicios' },
            { label: 'Sobre Sol',   href: '#sobre' },
            { label: 'Testimonios', href: '#testimonios' },
            { label: 'Ubicación',   href: '#ubicacion' },
          ].map((item) => (
            <a key={item.href} href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '0.8rem', letterSpacing: '2.5px',
                textTransform: 'uppercase', color: 'var(--tierra)',
                fontWeight: 400,
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'var(--arena)', color: 'var(--marfil)',
              padding: '0.7rem 1.5rem', borderRadius: '2px',
              fontSize: '0.72rem', letterSpacing: '2px',
              textTransform: 'uppercase', textAlign: 'center',
              fontWeight: 400, marginTop: '0.5rem',
            }}
          >
            Reservar turno
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </nav>
  )
}
