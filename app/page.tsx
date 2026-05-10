import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import ComoFunciona from './components/ComoFunciona'
import SobreSol from './components/SobreSol'
import Testimonios from './components/Testimonios'
import FaqAccordion from './components/FaqAccordion'
import Ubicacion from './components/Ubicacion'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import WhatsAppBtn from './components/WhatsAppBtn'
import ChatbotAgent from './components/ChatbotAgent'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <ComoFunciona />
      <SobreSol />
      <Testimonios />
      <FaqAccordion />
      <Ubicacion />
      <Formulario />
      <Footer />
      <WhatsAppBtn />
      <ChatbotAgent />
    </main>
  )
}