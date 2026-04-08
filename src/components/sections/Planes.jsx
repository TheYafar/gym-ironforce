import { motion } from 'framer-motion'

const plans = [
  {
    name: 'INDIVIDUAL',
    price: '35',
    features: [
      'Entrenamiento Personalizado',
      'Uso de todas las máquinas',
      'Clases de salón y base',
      'Acceso Lunes a Sábado',
    ],
    featured: false,
  },
  {
    name: 'PLAN DÚO',
    price: '65',
    tag: 'MÁS POPULAR',
    features: [
      'Divide el costo al 50%',
      'Ambos con acceso completo',
      'Entrena con tu partner',
      'Clases grupales incluidas',
    ],
    featured: true,
  },
  {
    name: '3 PERSONAS',
    price: '85',
    tag: 'MEJOR AHORRO',
    features: [
      'El precio más bajo por persona',
      'Beneficios completos',
      'Motivación en grupo',
      'Acceso ilimitado',
    ],
    featured: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const Planes = () => {
  return (
    <section id="planes" className="relative section-padding bg-brand-dark overflow-hidden">

      {/* Background image – dramatic b&w */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/planes-img.png')",
          filter: 'grayscale(1) brightness(0.08)',
        }}
      />
      <div className="absolute inset-0 bg-brand-dark/90" />

      {/* Accent lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-brand-yellow/20" />
      <div className="absolute right-0 top-0 h-full w-px bg-brand-yellow/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-yellow font-black text-sm uppercase tracking-[0.35em] mb-4 block">
            Elige tu fuerza
          </span>
          <h2 className="heading-section text-white">
            PLANES DE <span className="text-brand-yellow">MEMBRESÍA</span>
          </h2>
          <div className="section-accent" />
        </motion.div>

        {/* Two-column layout: image left + cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">

          {/* Left – feature image */}
          <motion.div
            className="lg:col-span-2 relative overflow-hidden min-h-[320px] lg:min-h-0 hidden md:block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="./images/planes-img.png"
              alt="Entrenamiento Iron Force"
              className="w-full h-full object-cover img-reveal"
            />
            {/* Yellow frame corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-yellow" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-yellow" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-yellow" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-yellow" />

            {/* Overlay text */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent flex flex-col justify-end p-8">
              <p className="text-brand-yellow font-black text-2xl uppercase leading-tight">
                Forja tu<br />mejor versión
              </p>
            </div>
          </motion.div>

          {/* Right – cards */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row gap-6 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex flex-col flex-1 border-2 card-glow
                  ${plan.featured
                    ? 'bg-brand-yellow border-brand-yellow'
                    : 'bg-brand-black border-brand-gray hover:border-brand-yellow'
                  } transition-colors duration-300`}
              >
                {/* Tag */}
                {plan.tag && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-black uppercase tracking-widest
                      ${plan.featured ? 'bg-black text-brand-yellow' : 'bg-brand-yellow text-black'}`}
                  >
                    {plan.tag}
                  </div>
                )}

                {/* Header */}
                <div className={`p-6 pb-4 border-b-2 ${plan.featured ? 'border-black/20' : 'border-brand-gray'} ${plan.tag ? 'pt-10' : ''}`}>
                  <h3
                    className={`font-black text-xl uppercase tracking-widest mb-3
                      ${plan.featured ? 'text-black' : 'text-white'}`}
                  >
                    {plan.name}
                  </h3>
                  <div className={`flex items-start gap-1 font-black ${plan.featured ? 'text-black' : 'text-brand-yellow'}`}>
                    <span className="text-2xl mt-1">$</span>
                    <span className="text-6xl leading-none">{plan.price}</span>
                    <span className={`text-sm self-end mb-2 ${plan.featured ? 'text-black/60' : 'text-text-secondary'}`}>/mes</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feat, i) => (
                      <li key={i} className={`flex items-start gap-3 font-medium text-sm ${plan.featured ? 'text-black' : 'text-white'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${plan.featured ? 'bg-black' : 'bg-brand-yellow'}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className={`block w-full py-3 text-center font-black uppercase tracking-wider text-sm transition-all duration-300
                      ${plan.featured
                        ? 'bg-black text-brand-yellow hover:bg-brand-gray'
                        : 'bg-brand-gray text-white hover:bg-brand-yellow hover:text-black'
                      }`}
                  >
                    Elegir Plan
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Planes
