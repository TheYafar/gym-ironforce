import { motion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', contacto: '', mensaje: '' })
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hola Iron Force 💪 Soy *${formData.nombre}*. Mi contacto: ${formData.contacto}. ${formData.mensaje}`
    window.open(`https://wa.me/584120000000?text=${encodeURIComponent(message)}`, '_blank')
  }

  const inputClass = (field) =>
    `w-full bg-brand-black border-2 p-4 text-white font-bold tracking-wider placeholder:text-text-secondary/40 focus:outline-none transition-all duration-300
     ${focused === field ? 'border-brand-yellow' : 'border-brand-gray'}`

  return (
    <section id="contacto" className="relative section-padding bg-brand-dark overflow-hidden">
      {/* Side accents */}
      <div className="absolute left-0 top-0 h-full w-1 bg-brand-yellow/10" />
      <div className="absolute right-0 top-0 h-full w-1 bg-brand-yellow/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-yellow font-black text-sm uppercase tracking-[0.3em] mb-4 block">
            Estamos aquí para ti
          </span>
          <h2 className="heading-section text-white">
            ÚNETE A <span className="text-brand-yellow">IRON FORCE</span>
          </h2>
          <div className="section-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Info Panel */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: <FaMapMarkerAlt className="text-brand-yellow shrink-0" size={28} />,
                title: 'Ubicación',
                lines: ['C.C. Prisma, piso 1 – Local N°59', 'Frente a Supermercado Kosmo', 'Guacara, Carabobo'],
              },
              {
                icon: <FaClock className="text-brand-yellow shrink-0" size={28} />,
                title: 'Horarios',
                lines: ['Lun – Vie: 6:00am – 9:00pm', 'Sábados: 7:00am – 2:00pm'],
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="group flex items-start gap-6 bg-brand-black border-2 border-brand-gray hover:border-brand-yellow p-7 transition-colors duration-300 card-glow"
                whileHover={{ x: 4 }}
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-white font-black uppercase text-lg tracking-widest mb-2">{item.title}</h4>
                  {item.lines.map((l, i) => (
                    <p key={i} className="text-text-secondary font-medium">{l}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* WhatsApp & IG quick links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.link/pskrjz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-brand-black border-2 border-brand-gray hover:border-[#25D366] p-6 transition-colors duration-300 card-glow"
              >
                <FaWhatsapp className="text-text-secondary group-hover:text-[#25D366] transition-colors" size={32} />
                <span className="text-white font-black text-xs uppercase tracking-widest">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/gymironforce_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-brand-black border-2 border-brand-gray hover:border-[#E1306C] p-6 transition-colors duration-300 card-glow"
              >
                <FaInstagram className="text-text-secondary group-hover:text-[#E1306C] transition-colors" size={32} />
                <span className="text-white font-black text-xs uppercase tracking-widest">Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-brand-black border-2 border-brand-gray p-8 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-black uppercase text-2xl mb-2">Envíanos tu Mensaje</h3>
            <div className="w-12 h-1 bg-brand-yellow mb-4" />

            <input
              type="text"
              placeholder="Tu Nombre"
              required
              className={inputClass('nombre')}
              onFocus={() => setFocused('nombre')}
              onBlur={() => setFocused(null)}
              onChange={e => setFormData({ ...formData, nombre: e.target.value })}
            />
            <input
              type="text"
              placeholder="Teléfono o Correo"
              required
              className={inputClass('contacto')}
              onFocus={() => setFocused('contacto')}
              onBlur={() => setFocused(null)}
              onChange={e => setFormData({ ...formData, contacto: e.target.value })}
            />
            <textarea
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              required
              className={`${inputClass('mensaje')} resize-none`}
              onFocus={() => setFocused('mensaje')}
              onBlur={() => setFocused(null)}
              onChange={e => setFormData({ ...formData, mensaje: e.target.value })}
            />

            <motion.button
              type="submit"
              className="btn-primary w-full text-center mt-2"
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center justify-center gap-3">
                <FaWhatsapp size={20} />
                ENVIAR POR WHATSAPP
              </span>
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default Contacto
