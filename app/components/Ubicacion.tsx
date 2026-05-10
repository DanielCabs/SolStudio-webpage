'use client'

import { useEffect, useRef } from 'react'

const datos = [
  {
    icon: '📍',
    label: 'Dirección',
    value: 'Calle 3 N°230, La Plata\nBuenos Aires, Argentina',
  },
  {
    icon: '🕐',
    label: 'Horarios',
    value: 'A convenir — los turnos disponibles\nse publican con un día de anticipación.',
  },
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '+54 221 319 0024',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'Soles1414@hotmail.com.ar',
  },
  {
    icon: '🏠',
    label: 'También a domicilio',
    value: 'Me traslado con todo el equipamiento.\nConsultá disponibilidad por WhatsApp.',
  },
]

export default function Ubicacion() {
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
      id="ubicacion"
      ref={sectionRef}
      style={{ padding: '7rem 5rem', background: 'var(--marfil)' }}
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="section-eyebrow">Dónde estamos</p>
        <h2 className="section-title">Ubicación <em>& contacto</em></h2>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* Mapa */}
        <div className="reveal" style={{
          borderRadius: '2px',
          overflow: 'hidden',
          border: '1px solid var(--crema)',
          height: '420px',
          position: 'relative',
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5!2d-57.9538!3d-34.9214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle%203%20230%2C%20La%20Plata%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1620000000000"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              filter: 'saturate(0.7) sepia(0.15)',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de SolStudio en La Plata"
          />
        </div>

        {/* Info */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {datos.map((d, i) => (
            <div
              key={d.label}
              style={{
                display: 'flex',
                gap: '1.2rem',
                alignItems: 'flex-start',
                padding: '1.8rem 0',
                borderBottom: i < datos.length - 1 ? '1px solid var(--crema)' : 'none',
              }}
            >
              {/* Icono */}
              <div style={{
                width: '38px', height: '38px',
                background: 'var(--crema)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.9rem', flexShrink: 0,
              }}>
                {d.icon}
              </div>

              {/* Texto */}
              <div>
                <p style={{
                  fontSize: '0.65rem', letterSpacing: '2.5px',
                  textTransform: 'uppercase', color: 'var(--arena)',
                  marginBottom: '0.3rem', fontWeight: 400,
                }}>
                  {d.label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem', color: 'var(--tierra)',
                  fontWeight: 400, lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}>
                  {d.value}
                </p>
              </div>
            </div>
          ))}

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/542213190024?text=Hola%20Sol%2C%20quiero%20consultar%20sobre%20tus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '2rem', textAlign: 'center' }}
          >
            Escribirme por WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #ubicacion { padding: 4rem 1.5rem !important; }
          #ubicacion > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #ubicacion iframe { height: 280px !important; }
        }
      `}</style>
    </section>
  )
}
