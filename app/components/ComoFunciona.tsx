'use client'

import { useEffect, useRef } from 'react'

const pasos = [
  {
    num: '01',
    title: 'Consultá',
    desc: 'Completá el formulario o escribime por WhatsApp. Contame qué te pasa y cuándo podés.',
  },
  {
    num: '02',
    title: 'Reservá tu turno',
    desc: 'Confirmamos el turno con el 50% de seña. El resto se abona al terminar la sesión.',
  },
  {
    num: '03',
    title: 'La sesión',
    desc: 'Atención completa y personalizada. Primera sesión de 60 min aprox. La duración se ajusta según la evolución.',
  },
  {
    num: '04',
    title: 'Tu plan',
    desc: 'Después de la primera sesión te cuento qué encontré y te recomiendo la frecuencia ideal para tu caso.',
  },
]

const politica = [
  {
    icon: '⏱',
    label: 'Tolerancia',
    text: '10 minutos de espera. Pasado ese tiempo el turno puede cancelarse.',
  },
  {
    icon: '📅',
    label: 'Cancelaciones',
    text: 'Avisá con al menos 6 horas de anticipación para no perder la seña.',
  },
  {
    icon: '💳',
    label: 'Seña',
    text: '50% al reservar. Sin aviso previo, la seña no se devuelve.',
  },
]

export default function ComoFunciona() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      style={{
        background: 'var(--tierra)',
        padding: '7rem 5rem',
        color: 'var(--crema)',
      }}
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '0' }}>
        <p className="section-eyebrow">El proceso</p>
        <h2 className="section-title" style={{ color: 'var(--crema)' }}>
          Cómo <em>funciona</em>
        </h2>
      </div>

      {/* Pasos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginTop: '4rem',
        borderTop: '1px solid rgba(196,149,106,0.3)',
      }}>
        {pasos.map((paso, i) => (
          <div
            key={paso.num}
            className="reveal"
            style={{
              padding: '2.5rem 2rem',
              borderRight: i < pasos.length - 1 ? '1px solid rgba(196,149,106,0.2)' : 'none',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3rem', fontWeight: 300,
              color: 'var(--arena)', opacity: 0.5,
              marginBottom: '1rem', lineHeight: 1,
            }}>
              {paso.num}
            </p>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem', fontWeight: 400,
              color: 'var(--marfil)', marginBottom: '0.7rem',
            }}>
              {paso.title}
            </h3>
            <p style={{
              fontSize: '0.85rem', lineHeight: 1.8,
              color: 'rgba(237,224,214,0.65)', fontWeight: 300,
            }}>
              {paso.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Política de turnos */}
      <div
        className="reveal"
        style={{
          marginTop: '4rem',
          border: '1px solid rgba(196,149,106,0.3)',
          padding: '2.5rem 3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}
      >
        {politica.map((item) => (
          <div key={item.label}>
            <p style={{
              fontSize: '0.65rem', letterSpacing: '3px',
              textTransform: 'uppercase', color: 'var(--arena)',
              marginBottom: '0.6rem', fontWeight: 400,
            }}>
              {item.icon} {item.label}
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem', color: 'var(--crema)',
              fontWeight: 300, lineHeight: 1.6,
            }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #como-funciona { padding: 4rem 1.5rem !important; }
          #como-funciona .pasos { grid-template-columns: 1fr 1fr !important; }
          #como-funciona .politica { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
