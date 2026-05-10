'use client'

export default function Footer() {
    return (
      <footer style={{
        background: '#1A100C',
        padding: '2.5rem 5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
  
        {/* Logo */}
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem', fontWeight: 300,
          letterSpacing: '3px', color: 'var(--crema)',
        }}>
          Sol<span style={{ color: 'var(--arena)' }}>Studio</span>
        </p>
  
        {/* Links */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Servicios',   href: '#servicios' },
            { label: 'Sobre Sol',   href: '#sobre' },
            { label: 'Testimonios', href: '#testimonios' },
            { label: 'Ubicación',   href: '#ubicacion' },
            { label: 'Contacto',    href: '#contacto' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.68rem', letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(237,224,214,0.35)',
                textDecoration: 'none', transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--arena)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,224,214,0.35)')}
            >
              {link.label}
            </a>
          ))}
        </div>
  
        {/* Copy */}
        <p style={{
          fontSize: '0.68rem',
          color: 'rgba(237,224,214,0.2)',
          fontWeight: 300,
        }}>
          © {new Date().getFullYear()} SolStudio · Desarrollado por{' '}
          <a
            href="https://evolvedigital.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(196,149,106,0.5)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--arena)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(196,149,106,0.5)')}
          >
            EvolveDigital.ai
          </a>
        </p>
  
        <style>{`
          @media (max-width: 768px) {
            footer {
              flex-direction: column !important;
              padding: 2rem 1.5rem !important;
              text-align: center;
            }
          }
        `}</style>
      </footer>
    )
  }
  