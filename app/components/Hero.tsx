'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = leftRef.current
    if (!el) return
    requestAnimationFrame(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
    >
      {/* ── Lado izquierdo ── */}
      <div
        ref={leftRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '6rem 4rem 6rem 5rem',
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <p style={{
          fontSize: '0.7rem',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'var(--arena)',
          marginBottom: '1.5rem',
          fontWeight: 400,
        }}>
          La Plata, Buenos Aires
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 5vw, 4.5rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--tierra)',
          marginBottom: '1.5rem',
        }}>
          Tu cuerpo<br />
          habla.<br />
          <em style={{ fontStyle: 'italic', color: 'var(--arena)' }}>Escuchalo.</em>
        </h1>

        <p style={{
          fontSize: '1rem',
          lineHeight: 1.85,
          color: 'var(--muted)',
          maxWidth: '420px',
          marginBottom: '3rem',
          fontWeight: 300,
        }}>
          Masajes terapéuticos y movimiento personalizado para cada cuerpo,
          cada historia, cada necesidad. Un espacio donde el alivio es real
          y el proceso, tuyo.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#contacto" className="btn-primary">
            Reservar turno
          </a>
          <a href="#servicios" className="btn-ghost">
            Ver servicios
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--crema)',
        }}>
          {[
            { num: '100%', label: 'Atención personalizada' },
            { num: '+5',   label: 'Años de experiencia' },
            { num: '3',    label: 'Tipos de masaje' },
          ].map((stat) => (
            <div key={stat.label}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 300,
                color: 'var(--tierra)',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>
                {stat.num}
              </p>
              <p style={{
                fontSize: '0.7rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                fontWeight: 400,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lado derecho — imagen ── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/massage1.png"
          alt="Masaje terapéutico en SolStudio"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            animation: 'scaleIn 1.4s ease both',
          }}
          priority
        />

        {/* Badge sobre la imagen */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 0,
          background: 'var(--marfil)',
          padding: '1.2rem 1.8rem',
          borderLeft: '3px solid var(--arena)',
        }}>
          <small style={{
            display: 'block',
            fontSize: '0.65rem',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '0.3rem',
          }}>
            Atención personalizada
          </small>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            fontWeight: 300,
            color: 'var(--tierra)',
          }}>
            Siempre
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(1.06); }
          to   { transform: scale(1); }
        }

        @media (max-width: 768px) {
          #hero {
            grid-template-columns: 1fr !important;
          }
          #hero > div:first-child {
            padding: 3rem 1.5rem !important;
          }
          #hero > div:last-child {
            height: 340px;
            position: relative !important;
          }
        }
      `}</style>
    </section>
  )
}
