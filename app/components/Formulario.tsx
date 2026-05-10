'use client'

import { useEffect, useRef, useState } from 'react'

const inputStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(196,149,106,0.25)',
  borderRadius: '2px',
  padding: '0.85rem 1rem',
  color: 'var(--crema)',
  fontFamily: 'var(--font-ui)',
  fontSize: '0.9rem',
  fontWeight: 300,
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.3s',
}

const labelStyle = {
  fontSize: '0.65rem',
  letterSpacing: '2.5px',
  textTransform: 'uppercase' as const,
  color: 'var(--arena)',
  fontWeight: 400,
  marginBottom: '0.4rem',
  display: 'block',
}

export default function Formulario() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    como_conocio: '',
    servicio: '',
    disponibilidad: '',
    consulta: '',
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--arena)'
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(196,149,106,0.25)'
  }

  const handleSubmit = async () => {
    if (!form.nombre || !form.telefono || !form.consulta) return

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ nombre: '', telefono: '', como_conocio: '', servicio: '', disponibilidad: '', consulta: '' })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contacto"
      ref={sectionRef}
      style={{ background: 'var(--noche)', padding: '7rem 5rem' }}
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '0' }}>
        <p className="section-eyebrow">Reservá tu lugar</p>
        <h2 className="section-title" style={{ color: 'var(--crema)' }}>
          Pedí tu <em>turno</em>
        </h2>
        <p style={{
          fontSize: '0.9rem', color: 'rgba(237,224,214,0.5)',
          fontWeight: 300, marginTop: '1rem',
        }}>
          Completá el formulario y te respondo a la brevedad para confirmar.
        </p>
      </div>

      {/* Success */}
      {success ? (
        <div style={{
          textAlign: 'center', padding: '4rem 2rem', marginTop: '3rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem', fontStyle: 'italic',
            color: 'var(--arena)', marginBottom: '1rem',
          }}>
            ¡Gracias, {form.nombre || 'tu consulta'} fue recibida!
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(237,224,214,0.5)', fontWeight: 300 }}>
            Te voy a contactar a la brevedad para confirmar tu turno.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="btn-primary"
            style={{ marginTop: '2rem' }}
          >
            Enviar otra consulta
          </button>
        </div>
      ) : (
        <div className="reveal" style={{
          maxWidth: '760px', margin: '4rem auto 0',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}>

          {/* Nombre */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Nombre y apellido *</label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Tu nombre completo"
              style={inputStyle}
            />
          </div>

          {/* Teléfono */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Teléfono *</label>
            <input
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="+54 221 000 0000"
              style={inputStyle}
            />
          </div>

          {/* Cómo conoció */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>¿Cómo nos conociste?</label>
            <select
              name="como_conocio"
              value={form.como_conocio}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
            >
              <option value="" disabled>Seleccioná una opción</option>
              <option value="instagram">Instagram</option>
              <option value="recomendacion">Recomendación</option>
              <option value="google">Google</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {/* Servicio */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Servicio de interés</label>
            <select
              name="servicio"
              value={form.servicio}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
            >
              <option value="" disabled>Seleccioná un servicio</option>
              <option value="relajante">Masaje Relajante</option>
              <option value="descontracturante">Masaje Descontracturante</option>
              <option value="deportivo">Masaje Deportivo</option>
              <option value="entrenamiento">Entrenamiento Personalizado</option>
              <option value="domicilio">Masaje a Domicilio</option>
              <option value="no_se">No sé, necesito orientación</option>
            </select>
          </div>

          {/* Disponibilidad */}
          <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
            <label style={labelStyle}>¿Disponibilidad horaria?</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['Mañana', 'Tarde', 'Ambas'].map((op) => (
                <button
                  key={op}
                  type="button"
                  onClick={() => setForm({ ...form, disponibilidad: op })}
                  style={{
                    padding: '0.6rem 1.5rem',
                    border: '1px solid',
                    borderColor: form.disponibilidad === op ? 'var(--arena)' : 'rgba(196,149,106,0.25)',
                    borderRadius: '2px',
                    background: form.disponibilidad === op ? 'rgba(196,149,106,0.15)' : 'transparent',
                    color: form.disponibilidad === op ? 'var(--arena)' : 'rgba(237,224,214,0.4)',
                    fontSize: '0.78rem', letterSpacing: '1.5px',
                    textTransform: 'uppercase', cursor: 'pointer',
                    transition: 'all 0.2s', fontFamily: 'var(--font-ui)',
                  }}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>

          {/* Consulta */}
          <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
            <label style={labelStyle}>¿Qué te pasa? / ¿Cuáles son tus objetivos? *</label>
            <textarea
              name="consulta"
              value={form.consulta}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Contame qué sentís, dónde te duele o qué estás buscando..."
              rows={4}
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>

          {/* Submit */}
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '0.5rem' }}>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary"
              style={{ opacity: loading ? 0.6 : 1, minWidth: '220px' }}
            >
              {loading ? 'Enviando...' : 'Enviar consulta'}
            </button>
            <p style={{
              fontSize: '0.75rem', color: 'rgba(237,224,214,0.3)',
              fontWeight: 300, marginTop: '1rem',
            }}>
              * Campos obligatorios. Te respondo por WhatsApp a la brevedad.
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #contacto { padding: 4rem 1.5rem !important; }
          #contacto > div:last-child { grid-template-columns: 1fr !important; }
        }
        select option { background: #2C1F1A; color: #EDE0D6; }
        input::placeholder, textarea::placeholder { color: rgba(237,224,214,0.2); }
      `}</style>
    </section>
  )
}
