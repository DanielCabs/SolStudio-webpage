'use client'

import { useEffect, useRef } from 'react'

const testimonios = [
  {
    texto: 'Llegué con una contractura que me tenía sin poder girar el cuello hace semanas. Después de la primera sesión noté un cambio enorme. Lo que más me sorprendió fue que Sol me explicó todo lo que iba haciendo.',
    autor: 'Mariana G.',
    rol: 'Docente — La Plata',
  },
  {
    texto: 'Soy maratonista y Sol lleva años acompañando mis preparaciones. Tiene un ojo clínico increíble para detectar lo que va a fallar antes de que falle. Indispensable antes de cada competencia.',
    autor: 'Rodrigo M.',
    rol: 'Deportista de alto rendimiento',
  },
  {
    texto: 'Empecé con masajes y terminé haciendo entrenamiento personalizado también. El trato es muy humano, nada de protocolo frío. Se nota que realmente le importa cómo evolucionás.',
    autor: 'Valentina S.',
    rol: 'Estudiante — La Plata',
  },
  {
    texto: 'Pedí el servicio a domicilio y fue una experiencia increíble. Llegó puntual, con todo el equipamiento, y el ambiente que generó en mi casa fue tan relajante como en cualquier spa.',
    autor: 'Carlos R.',
    rol: 'Empresario — La Plata',
  },
  {
    texto: 'Tengo lumbalgia crónica y probé muchas cosas. Con Sol fue la primera vez que sentí que alguien realmente entendió mi problema y armó un plan específico para mí.',
    autor: 'Patricia L.',
    rol: 'Administrativa — La Plata',
  },
  {
    texto: 'Vine por recomendación de un amigo y no me decepcionó. La primera consulta fue muy completa, me hizo preguntas que ningún otro profesional me había hecho antes.',
    autor: 'Matías F.',
    rol: 'Ingeniero — La Plata',
  },
]

export default function Testimonios() {
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
      id="testimonios"
      ref={sectionRef}
      style={{ padding: '7rem 5rem', background: 'var(--marfil)' }}
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="section-eyebrow">Lo que dicen</p>
        <h2 className="section-title">Testimonios <em>reales</em></h2>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
      }}>
        {testimonios.map((t, i) => (
          <div
            key={i}
            className="reveal testimonio-card"
            style={{
              padding: '2.5rem',
              border: '1px solid var(--crema)',
              borderRadius: '2px',
              transition: 'border-color 0.3s, box-shadow 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--arena)'
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(92,64,51,0.06)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--crema)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Estrellas */}
            <p style={{ color: 'var(--arena)', fontSize: '0.75rem', marginBottom: '1rem' }}>
              ★★★★★
            </p>

            {/* Comilla decorativa */}
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3rem', color: 'var(--crema)',
              lineHeight: 0.5, marginBottom: '1.2rem',
            }}>
              "
            </p>

            {/* Texto */}
            <p style={{
              fontSize: '0.92rem', lineHeight: 1.85,
              color: 'var(--muted)', fontWeight: 300,
              fontStyle: 'italic', marginBottom: '1.5rem',
            }}>
              {t.texto}
            </p>

            {/* Autor */}
            <p style={{
              fontSize: '0.75rem', letterSpacing: '2px',
              textTransform: 'uppercase', color: 'var(--tierra)',
              fontWeight: 400,
            }}>
              {t.autor}
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.2rem' }}>
              {t.rol}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #testimonios { padding: 4rem 1.5rem !important; }
          #testimonios .grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #testimonios > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
