import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SolStudio — Masajes & Movimiento',
  description: 'Masajes terapéuticos y movimiento personalizado en La Plata, Buenos Aires. Descontracturante, relajante, deportivo y entrenamiento personalizado.',
  keywords: ['masajes La Plata', 'masajes terapéuticos', 'masaje deportivo', 'entrenamiento personalizado', 'SolStudio'],
  openGraph: {
    title: 'SolStudio — Masajes & Movimiento',
    description: 'Terapia corporal personalizada en La Plata, Buenos Aires.',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
