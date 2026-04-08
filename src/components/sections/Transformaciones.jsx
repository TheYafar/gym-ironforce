import { motion } from 'framer-motion'
import { FaInstagram, FaFire, FaArrowRight } from 'react-icons/fa'

const stats = [
  { value: '+200', label: 'Miembros activos' },
  { value: '5★', label: 'Calidad garantizada' },
  { value: '6am', label: 'Primera clase del día' },
]

const Transformaciones = () => {
  return (
    <section id="transformaciones" className="section-padding bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaFire className="text-brand-yellow" size={32} />
            <span className="text-brand-yellow font-black text-sm uppercase tracking-[0.3em]">Resultados reales</span>
          </div>
          <h2 className="heading-section text-white">
            CONSTRUYE TU <span className="text-brand-yellow">MEJOR VERSIÓN</span>
          </h2>
          <div className="section-accent" />
        </motion.div>

        {/* Stats band */}
        <motion.div
          className="grid grid-cols-3 gap-6 border border-brand-gray bg-brand-dark p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-brand-yellow font-black text-4xl md:text-5xl leading-none mb-1">
                {s.value}
              </span>
              <span className="text-text-secondary text-xs font-bold uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Copy + CTA */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <div>
            <p className="text-text-secondary text-lg font-semibold leading-relaxed mb-6">
              En Iron Force creemos en el esfuerzo duro, el hierro y el sudor. No vendemos promesas irreales,
              vendemos disciplina. Cada kilo levantado en estas instalaciones es un paso hacia tu mejor versión.
            </p>
            <p className="text-text-secondary font-semibold leading-relaxed">
              Sigue&nbsp;
              <a
                href="https://www.instagram.com/gymironforce_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-yellow hover:underline font-black"
              >
                @gymironforce_
              </a>
              &nbsp;para ver el proceso real de nuestra comunidad: el ambiente, el esfuerzo y los resultados que se logran forjando día a día.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/gymironforce_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-brand-dark border border-brand-gray hover:border-brand-yellow px-8 py-5 transition-colors duration-300 card-glow"
            >
              <div className="flex items-center gap-4">
                <FaInstagram className="text-brand-yellow" size={28} />
                <div>
                  <div className="text-white font-black uppercase text-sm tracking-widest">Síguenos en Instagram</div>
                  <div className="text-text-secondary text-xs font-medium">@gymironforce_</div>
                </div>
              </div>
              <FaArrowRight className="text-brand-yellow group-hover:translate-x-2 transition-transform duration-300" />
            </a>

            <a
              href="#contacto"
              className="btn-primary text-center"
            >
              COMENZAR AHORA
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Transformaciones
