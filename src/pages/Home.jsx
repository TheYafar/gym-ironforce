import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-secondary to-dark overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, var(--color-primary) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-6 animate-pulse">
            Tu transformación empieza aquí
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-8">
            <span className="text-text-primary">Forja tu </span>
            <span className="text-primary">Fuerza</span>
            <br />
            <span className="text-text-primary">Interior</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            En IronFORCE no solo entrenamos tu cuerpo, forjamos tu mentalidad.
            Únete a la comunidad donde los límites se rompen cada día.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pricing">
              <Button variant="primary" size="lg">
                Empieza Ahora
              </Button>
            </Link>
            <Link to="/classes">
              <Button variant="secondary" size="lg">
                Ver Clases
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
      </section>
    </>
  )
}

export default Home
