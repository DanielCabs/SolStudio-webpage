'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const servicios = [
  {
    num: '01',
    img: '/images/massage3.png',
    name: 'Masaje Relajante',
    desc: 'Para soltar la tensión acumulada del día a día. Técnicas suaves que devuelven la calma al sistema nervioso y al cuerpo.',
  },
  {
    num: '02',
    img: '/images/massage1.png',
    name: 'Masaje Descontracturante',
    desc: 'Trabajo profundo sobre las zonas de tensión muscular. Para dolores cervicales, lumbares o contracturas específicas.',
  },
  {
    num: '03',
    img: '/images/massage5.png',
    name: 'Masaje Deportivo',
    desc: 'Protocolo especializado para deportistas. Preparación, recuperación y mantenimiento según el ciclo de entrenamiento y competencia.',
  },
  {
    num: '04',
    img: '/images/massage4.png',
    name: 'Entrenamiento Personalizado',
    desc: 'Movimiento diseñado según tus objetivos y posibilidades. En mi espacio o en el tuyo, siempre con seguimiento real.',
  },
  {
    num: '05',
    img: '/images/massage2.png',
    name: 'Masaje a Domicilio',
    desc: 'Toda la terapia, en tu casa. Llevo el equipamiento necesario para que puedas descansar sin moverte del lugar donde te sentís cómodo.',
  },
]

export default function Servicios() {
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
    <section id="servicios" ref={sectionRef} style={{ padding: '7rem 5rem', background: 'var(--marfil)' }}>

      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="section-eyebrow">Lo que ofrezco</p>
        <h2 className="section-title">Servicios <em>para vos</em></h2>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5px',
        background: 'var(--crema)',
        border: '1.5px solid var(--crema)',
      }}>
        {servicios.map((s) => (
          <div
            key={s.num}
            className="reveal servicio-card"
            style={{
              background: 'var(--marfil)',
              padding: '3rem 2.5rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.4s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#FBF6F1')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--marfil)')}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3.5rem', fontWeight: 300,
              color: 'var(--crema)', lineHeight: 1,
              marginBottom: '1.5rem',
            }}>
              {s.num}
            </p>

            <div style={{ position: 'relative', width: '100%', height: '180px', marginBottom: '1.5rem', borderRadius: '2px', overflow: 'hidden' }}>
              <Image
                src={s.img}
                alt={s.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
              />
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem', fontWeight: 400,
              color: 'var(--tierra)', marginBottom: '0.8rem',
            }}>
              {s.name}
            </h3>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
              {s.desc}
            </p>

            <span style={{
              display: 'inline-block', marginTop: '1.2rem',
              fontSize: '0.65rem', letterSpacing: '2.5px',
              textTransform: 'uppercase', color: 'var(--arena)',
              borderBottom: '1px solid var(--crema)', paddingBottom: '1px',
            }}>
              Consultar precio →
            </span>

            {/* Línea animada bottom */}
            <style>{`
              .servicio-card::before {
                content: '';
                position: absolute;
                bottom: 0; left: 0;
                width: 0; height: 2px;
                background: var(--arena);
                transition: width 0.5s ease;
              }
              .servicio-card:hover::before { width: 100%; }
            `}</style>
          </div>
        ))}

        {/* Card CTA */}
        <div className="reveal" style={{
          background: '#FBF6F1',
          padding: '3rem 2.5rem',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem', fontStyle: 'italic',
            color: 'var(--tierra)', marginBottom: '1rem',
          }}>
            ¿No sabés por dónde empezar?
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 300 }}>
            Contame cómo te sentís y juntos encontramos el mejor camino.
          </p>
          <a
            href="https://wa.me/542213190024?text=Hola%20Sol%2C%20quiero%20consultar%20sobre%20tus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Escribirme por WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #servicios { padding: 4rem 1.5rem !important; }
          #servicios > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
