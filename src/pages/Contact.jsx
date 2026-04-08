import SectionTitle from '../components/ui/SectionTitle'

const Contact = () => {
  return (
    <section className="pt-32 pb-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Hablemos"
          title="Contacto"
          description="¿Tienes preguntas? Estamos aquí para ayudarte. Contáctanos y empieza tu viaje fitness."
        />
        <div className="text-center text-text-secondary">
          <p className="text-lg">Página en construcción - Próximamente más contenido</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
