import SectionTitle from '../components/ui/SectionTitle'

const Classes = () => {
  return (
    <section className="pt-32 pb-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Nuestras Disciplinas"
          title="Clases Disponibles"
          description="Desde CrossFit hasta Yoga, encuentra la clase perfecta para alcanzar tus metas fitness."
        />
        <div className="text-center text-text-secondary">
          <p className="text-lg">Página en construcción - Próximamente más contenido</p>
        </div>
      </div>
    </section>
  )
}

export default Classes
