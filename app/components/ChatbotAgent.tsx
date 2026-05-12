'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'bot'
  text: string
}

const suggestions = [
  '¿Cómo saco un turno?',
  '¿Cuánto dura la sesión?',
  '¿Hacen masajes a domicilio?',
  '¿Cuáles son los precios?',
]

export default function ChatbotAgent() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hola! 👋 Soy el asistente virtual de SolStudio.\nPuedo ayudarte a reservar turnos e informarte sobre nuestros servicios.\n⚠️ No brindo consejos médicos. Si tenés dolor intenso o una condición de salud, consultá con un profesional antes de reservar.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMsg: Message = { role: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Hubo un error. Escribinos por WhatsApp 😊' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage(input)
  }

  return (
    <>
      {/* Ventana del chat */}
      <div style={{
        position: 'fixed', bottom: '5.5rem', left: '2rem', zIndex: 998,
        width: '340px',
        background: 'var(--marfil)',
        borderRadius: '8px',
        boxShadow: '0 16px 60px rgba(44,31,26,0.18)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
        transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'all 0.3s ease',
        maxHeight: '480px',
      }}>

        {/* Header */}
        <div style={{
          background: 'var(--tierra)',
          padding: '1rem 1.2rem',
          display: 'flex', alignItems: 'center', gap: '0.7rem',
        }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'var(--arena)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--marfil)',
            flexShrink: 0,
          }}>
            S
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--marfil)', letterSpacing: '0.5px' }}>
              Asistente SolStudio
            </p>
            <p style={{ fontSize: '0.7rem', color: 'rgba(237,224,214,0.55)' }}>
              Responde al instante
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(237,224,214,0.5)', fontSize: '1.1rem', lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Mensajes */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '1rem',
          display: 'flex', flexDirection: 'column', gap: '0.7rem',
          maxHeight: '260px',
        }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                maxWidth: '85%',
                padding: '0.7rem 0.9rem',
                borderRadius: '12px',
                fontSize: '0.83rem', lineHeight: 1.6, fontWeight: 300,
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' ? 'var(--tierra)' : 'var(--crema)',
                color: msg.role === 'user' ? 'var(--crema)' : 'var(--text)',
                borderBottomRightRadius: msg.role === 'user' ? '4px' : '12px',
                borderBottomLeftRadius: msg.role === 'bot' ? '4px' : '12px',
              }}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div style={{
              alignSelf: 'flex-start',
              padding: '0.7rem 0.9rem',
              borderRadius: '12px',
              background: 'var(--crema)',
              fontSize: '0.83rem', color: 'var(--muted)',
              fontStyle: 'italic',
            }}>
              Escribiendo...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Sugerencias */}
        {messages.length <= 1 && (
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.4rem',
            padding: '0 0.8rem 0.8rem',
            background: 'white',
          }}>
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                style={{
                  fontSize: '0.72rem', padding: '0.3rem 0.7rem',
                  border: '1px solid var(--crema)', borderRadius: '20px',
                  background: 'none', cursor: 'pointer',
                  color: 'var(--muted)', fontFamily: 'var(--font-ui)',
                  fontWeight: 300, transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--crema)'
                  e.currentTarget.style.color = 'var(--tierra)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.color = 'var(--muted)'
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{
          display: 'flex', gap: '0.5rem', padding: '0.8rem',
          borderTop: '1px solid var(--crema)',
          background: 'white',
        }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Escribí tu consulta..."
            style={{
              flex: 1, border: '1px solid var(--crema)',
              borderRadius: '20px', padding: '0.55rem 1rem',
              fontFamily: 'var(--font-ui)', fontSize: '0.82rem',
              outline: 'none', color: 'var(--text)',
              transition: 'border-color 0.3s',
            }}
            onFocus={e => (e.target.style.borderColor = 'var(--arena)')}
            onBlur={e => (e.target.style.borderColor = 'var(--crema)')}
          />
          <button
            onClick={() => sendMessage(input)}
            style={{
              width: '34px', height: '34px',
              background: 'var(--arena)', border: 'none',
              borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--tierra)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--arena)')}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Botón toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir asistente"
        style={{
          position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 999,
          width: '56px', height: '56px', borderRadius: '50%',
          background: open ? 'var(--noche)' : 'var(--tierra)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(92,64,51,0.35)',
          transition: 'background 0.3s, transform 0.3s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {!open && (
          <span style={{
            position: 'absolute',
            left: '64px',
            background: 'var(--tierra)',
            color: 'var(--crema)',
            fontSize: '0.68rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            padding: '0.35rem 0.8rem',
            borderRadius: '20px',
            whiteSpace: 'nowrap',
            fontFamily: 'var(--font-ui)',
            fontWeight: 400,
            boxShadow: '0 2px 10px rgba(92,64,51,0.2)',
            pointerEvents: 'none',
          }}>
            Consultas IA
          </span>
        )}
        {open ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--crema)">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--crema)">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
      </button>
    </>
  )
}
