import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Ticker from './components/common/Ticker'
import Hero from './components/sections/Hero'
import Instalaciones from './components/sections/Instalaciones'
import Planes from './components/sections/Planes'
import Transformaciones from './components/sections/Transformaciones'
import Contacto from './components/sections/Contacto'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* Ticker amarillo tras el Hero */}
        <Ticker bg="bg-brand-yellow" textColor="text-black" />
        <Instalaciones />
        {/* Ticker negro invertido entre secciones */}
        <Ticker bg="bg-brand-dark" textColor="text-brand-yellow" />
        <Planes />
        <Transformaciones />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
