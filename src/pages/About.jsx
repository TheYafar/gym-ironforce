import SectionTitle from '../components/ui/SectionTitle'

const About = () => {
  return (
    <section className="pt-32 pb-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Nuestra Historia"
          title="Sobre IronFORCE"
          description="Conoce el gimnasio que está transformando vidas cada día con dedicación, pasión y la mejor infraestructura."
        />
        <div className="text-center text-text-secondary">
          <p className="text-lg">Página en construcción - Próximamente más contenido</p>
        </div>
      </div>
    </section>
  )
}

export default About
