'use client'

import { useEffect, useRef, useState } from 'react'

const faqs = [
  {
    q: '¿Cómo saco un turno?',
    a: 'Podés completar el formulario de contacto en esta página o escribirme directamente por WhatsApp. Te respondo a la brevedad para confirmar día y horario.',
  },
  {
    q: '¿Cuánto dura la sesión?',
    a: 'La primera sesión dura aproximadamente 60 minutos. Las siguientes pueden variar entre 30 y 80 minutos según la evolución y las zonas a trabajar.',
  },
  {
    q: '¿Necesito reservar con seña?',
    a: 'Sí. Para confirmar el turno se abona el 50% del valor como seña. El resto se paga al finalizar la sesión.',
  },
  {
    q: '¿Qué pasa si necesito cancelar?',
    a: 'Podés cancelar sin perder la seña avisando con al menos 6 horas de anticipación. Sin aviso previo, la seña no se devuelve.',
  },
  {
    q: '¿Hacen masajes a domicilio?',
    a: 'Sí, me traslado con todo el equipamiento necesario. El costo y la disponibilidad dependen de la zona. Consultame por WhatsApp para coordinar.',
  },
  {
    q: '¿Trabajás con deportistas?',
    a: 'Sí, tengo experiencia con deportistas de alto rendimiento. Trabajo preparación pre-competencia, recuperación post-esfuerzo y mantenimiento semanal.',
  },
  {
    q: '¿Los precios están publicados?',
    a: 'No, porque el precio depende del tipo de masaje, la duración y las zonas a trabajar. Consultame y te cuento según tu caso.',
  },
  {
    q: '¿Con qué frecuencia debo venir?',
    a: 'Depende de cada persona y su situación. Después de la primera sesión te recomiendo la frecuencia ideal. Algunos vienen cada 15 días, otros una vez por semana.',
  },
]

export default function FaqAccordion() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{ background: 'var(--crema)', padding: '7rem 5rem' }}
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="section-eyebrow">Preguntas frecuentes</p>
        <h2 className="section-title">Todo lo que <em>necesitás saber</em></h2>
      </div>

      {/* Grid de preguntas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '960px',
        margin: '0 auto',
      }}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          const isEven = i % 2 !== 0

          return (
            <div
              key={i}
              className="reveal"
              style={{
                borderBottom: '1px solid rgba(92,64,51,0.12)',
                padding: isEven ? '1.5rem 0 1.5rem 3rem' : '1.5rem 3rem 1.5rem 0',
                borderLeft: isEven ? '1px solid rgba(92,64,51,0.12)' : 'none',
              }}
            >
              {/* Pregunta */}
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  cursor: 'pointer', display: 'flex',
                  justifyContent: 'space-between', alignItems: 'flex-start',
                  gap: '1rem', textAlign: 'left', padding: 0,
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem', fontWeight: 400,
                  color: 'var(--tierra)', lineHeight: 1.3,
                }}>
                  {faq.q}
                </span>
                <span style={{
                  fontSize: '1rem', color: 'var(--arena)',
                  flexShrink: 0, marginTop: '2px',
                  transition: 'transform 0.3s',
                  transform: isOpen ? 'rotate(90deg)' : 'none',
                  display: 'inline-block',
                }}>
                  ›
                </span>
              </button>

              {/* Respuesta */}
              <div style={{
                overflow: 'hidden',
                maxHeight: isOpen ? '200px' : '0',
                transition: 'max-height 0.4s ease',
              }}>
                <p style={{
                  fontSize: '0.88rem', lineHeight: 1.8,
                  color: 'var(--muted)', fontWeight: 300,
                  paddingTop: '0.8rem',
                }}>
                  {faq.a}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #faq { padding: 4rem 1.5rem !important; }
          #faq > div:last-child { grid-template-columns: 1fr !important; }
          #faq > div:last-child > div { 
            padding: 1.5rem 0 !important; 
            border-left: none !important;
          }
        }
      `}</style>
    </section>
  )
}
