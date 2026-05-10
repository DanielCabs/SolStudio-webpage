'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function SobreSol() {
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
      id="sobre"
      ref={sectionRef}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '600px',
      }}
    >
      {/* Imagen */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
        <Image
          src="/images/massage3.png"
          alt="Sol, terapeuta de SolStudio"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', filter: 'saturate(0.9)' }}
        />
      </div>

      {/* Contenido */}
      <div
        style={{
          background: 'var(--crema)',
          padding: '6rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p className="section-eyebrow reveal">Sobre mí</p>

        <h2 className="section-title reveal" style={{ marginBottom: '1.5rem' }}>
          Hola, soy <em>Sol</em>
        </h2>

        <p className="reveal" style={{
          fontSize: '0.95rem', lineHeight: 1.9,
          color: 'var(--muted)', fontWeight: 300,
          marginBottom: '1rem',
        }}>
          Trabajo el cuerpo desde la escucha. Cada persona que llega trae su propia historia,
          sus propios dolores, su propio ritmo. Mi trabajo es entender eso antes de tocar.
        </p>

        <p className="reveal" style={{
          fontSize: '0.95rem', lineHeight: 1.9,
          color: 'var(--muted)', fontWeight: 300,
          marginBottom: '1rem',
        }}>
          Me especialicé en masajes terapéuticos y entrenamiento personalizado, y con el tiempo
          entendí que lo que más le importa a la gente no es la técnica, sino sentirse realmente
          entendida. Eso es lo que intento en cada sesión.
        </p>

        <p className="reveal" style={{
          fontSize: '0.95rem', lineHeight: 1.9,
          color: 'var(--muted)', fontWeight: 300,
          marginBottom: '2rem',
        }}>
          Atiendo en mi espacio en La Plata, a domicilio, y también trabajo con deportistas
          de alto rendimiento antes y después de competencias.
        </p>

        <p className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem', fontStyle: 'italic',
          color: 'var(--tierra)',
        }}>
          — Sol
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre { grid-template-columns: 1fr !important; }
          #sobre > div:first-child { min-height: 300px !important; }
          #sobre > div:last-child { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
