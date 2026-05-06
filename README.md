# SolStudio — Webpage

Sitio web oficial de **SolStudio**, espacio de masajes terapéuticos y movimiento personalizado en La Plata, Buenos Aires.

Desarrollado por [EvolveDigital.ai](https://evolvedigital.ai)

---

## 🗂 Estructura del proyecto

```
SolStudio-webpage/
├── public/
│   └── images/
│       ├── massage1.png
│       ├── massage2.png
│       ├── massage3.png
│       ├── massage4.png
│       └── massage5.png
├── src/
│   └── app/
│       ├── layout.tsx             # Layout raíz (fuentes, metadata)
│       ├── page.tsx               # Página principal (landing)
│       ├── globals.css            # Variables CSS + estilos globales
│       ├── api/
│       │   ├── contact/
│       │   │   └── route.ts       # POST → guarda turno en Google Sheets
│       │   └── chat/
│       │       └── route.ts       # POST → agente FAQ con Anthropic API
│       └── components/
│           ├── Navbar.tsx
│           ├── Hero.tsx
│           ├── Servicios.tsx
│           ├── ComoFunciona.tsx
│           ├── SobreSol.tsx
│           ├── Testimonios.tsx
│           ├── FaqAccordion.tsx
│           ├── Ubicacion.tsx
│           ├── Formulario.tsx
│           ├── ChatbotAgent.tsx
│           ├── WhatsAppBtn.tsx
│           └── Footer.tsx
├── .env.local                     # Variables de entorno (no se sube)
├── .env.example                   # Plantilla de variables
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Stack

| Tecnología | Uso |
|---|---|
| Next.js 15 (App Router) | Framework principal |
| TypeScript | Tipado |
| Tailwind CSS | Estilos |
| Google Sheets + Apps Script | Base de datos de turnos |
| Anthropic API | Agente de FAQ (chatbot) |
| Vercel | Deploy |

---

## 🎨 Identidad de marca

| Token | Valor |
|---|---|
| Tierra | `#5C4033` |
| Terracota | `#9E7B6A` |
| Arena | `#C4956A` |
| Crema | `#EDE0D6` |
| Marfil | `#FDFAF7` |
| Noche | `#2C1F1A` |
| Tipografía display | Cormorant Garamond |
| Tipografía UI | Jost |

---

## 📄 Secciones del sitio

| # | Componente | Estado |
|---|---|---|
| 1 | Navbar | ⬜ Pendiente |
| 2 | Hero | ⬜ Pendiente |
| 3 | Servicios | ⬜ Pendiente |
| 4 | Cómo funciona + Política de turnos | ⬜ Pendiente |
| 5 | Sobre Sol | ⬜ Pendiente |
| 6 | Testimonios | ⬜ Pendiente |
| 7 | FAQ Accordion | ⬜ Pendiente |
| 8 | Mapa / Ubicación | ⬜ Pendiente |
| 9 | Formulario → Google Sheets | ⬜ Pendiente |
| 10 | Agente FAQ (chatbot flotante) | ⬜ Pendiente |
| 11 | Botón WhatsApp flotante | ⬜ Pendiente |
| 12 | Footer | ⬜ Pendiente |

---

## ⚙️ Variables de entorno

Crear `.env.local` en la raíz basándote en `.env.example`:

```env
ANTHROPIC_API_KEY=tu_api_key
GOOGLE_SHEET_ENDPOINT=url_del_apps_script
```

---

## 📦 Instalación local

```bash
git clone https://github.com/DanielCabs/SolStudio-webpage.git
cd SolStudio-webpage
npm install
cp .env.example .env.local
# Completar variables en .env.local
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

---

## 🗓 Roadmap

- [x] Logo + paleta de marca
- [x] README + estructura del proyecto
- [ ] Setup Next.js + Tailwind
- [ ] Navbar + Hero
- [ ] Secciones de contenido
- [ ] API route → Google Sheets
- [ ] Chatbot con Anthropic API
- [ ] Deploy en Vercel

---

## 📬 Contacto del cliente

**Sol** — SolStudio, La Plata, Buenos Aires  
WhatsApp: +54 221 319 0024


Desarrollado por DanielCabs
