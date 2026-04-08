import { motion } from 'framer-motion'

const SectionTitle = ({ subtitle, title, description, align = 'center', light = false }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight ${
          light ? 'text-dark' : 'text-text-primary'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-4 text-lg max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-dark/70' : 'text-text-secondary'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle
