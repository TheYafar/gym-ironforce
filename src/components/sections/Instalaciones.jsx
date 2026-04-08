import { motion } from 'framer-motion'
import { FaDumbbell, FaCamera } from 'react-icons/fa'

const Instalaciones = () => {
  // Imágenes realistas (Blanco y Negro dramático)
  const images = [
    { title: 'ZONA DE MÁQUINAS', src: '/images/zona-maquinas.png', featured: false },
    { title: 'ZONA DE PESO LIBRE', src: '/images/peso-libre.png', featured: true },
    { title: 'SALÓN DE CLASES', src: '/images/salon-clases.png', featured: false },
  ]

  return (
    <section id="instalaciones" className="section-padding bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-section text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            NUESTRAS <span className="text-brand-yellow">INSTALACIONES</span>
          </motion.h2>
          <div className="w-24 h-2 bg-brand-yellow mx-auto" />
        </div>

        {/* Grid de Instalaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden border-2 bg-brand-dark group
              ${item.featured ? 'aspect-square md:aspect-[4/5] border-brand-yellow shadow-[0_0_20px_rgba(250,204,21,0.1)] z-10' : 'border-brand-gray aspect-video md:aspect-square'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Imagen de fondo */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Overlay y texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-black uppercase tracking-widest text-lg group-hover:text-brand-yellow transition-colors">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Instalaciones
