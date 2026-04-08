import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    primary:
      'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40',
    secondary:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost:
      'bg-white/5 hover:bg-white/10 text-text-primary border border-white/10',
    gold:
      'bg-gold hover:bg-gold-dark text-dark font-bold shadow-lg shadow-gold/25',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg font-semibold uppercase tracking-wider
        transition-all duration-300 cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
