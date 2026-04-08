import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Logo from '../common/Logo'

const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-start bg-brand-black overflow-hidden pt-20"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./images/hero-bg-real.png')",
          y,
          filter: 'grayscale(1) brightness(0.35) contrast(1.3)',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />

      {/* Animated yellow accent bar – left edge */}
      <motion.div
        className="absolute left-0 top-0 w-1.5 h-full bg-brand-yellow"
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full py-12 pb-36"
        style={{ opacity }}
      >
        <div className="max-w-3xl">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Logo size="lg" />
          </motion.div>

          {/* Tagline bar */}
          <motion.div
            className="mt-10 mb-4 inline-flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-10 h-0.5 bg-brand-yellow" />
            <span className="text-brand-yellow font-black text-sm uppercase tracking-[0.3em]">
              Guacara · Venezuela
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="heading-colossal text-white mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            DONDE LOS{' '}
            <span className="text-brand-yellow">RESULTADOS</span>
            <br />
            SE FORJAN
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-text-secondary text-lg md:text-xl font-semibold tracking-wide mb-12 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Tu cuerpo es la materia prima. Nosotros somos la forja.
            Equipos de grado industrial para entrenamiento real.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <a href="#contacto" className="btn-primary text-center">
              ENTRENAR HOY
            </a>
            <a href="#planes" className="btn-secondary text-center">
              VER PLANES
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-16 flex gap-10 sm:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { value: '3+', label: 'Planes disponibles' },
              { value: '6am', label: 'Apertura diaria' },
              { value: 'L–S', label: 'Todos los días' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-brand-yellow font-black text-3xl md:text-4xl leading-none">
                  {stat.value}
                </span>
                <span className="text-text-secondary text-xs font-bold uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1.5 bg-brand-yellow"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-text-secondary text-xs font-bold uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          className="w-0.5 h-10 bg-brand-yellow"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
