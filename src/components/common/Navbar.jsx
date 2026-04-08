import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { name: 'INICIO', href: '#inicio' },
  { name: 'INSTALACIONES', href: '#instalaciones' },
  { name: 'PLANES', href: '#planes' },
  { name: 'MÁS', href: '#transformaciones' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['inicio', 'instalaciones', 'planes', 'transformaciones', 'contacto']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Link */}
          <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="flex-shrink-0 cursor-pointer">
            <Logo size="md" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId || (sectionId === 'transformaciones' && activeSection === 'contacto')
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative font-black text-sm uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-brand-yellow' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-yellow"
                      transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* CTA & Social Link Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/gymironforce_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-brand-yellow transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-brand-yellow text-black font-black uppercase px-5 py-2 hover:bg-white transition-colors duration-300 text-sm"
            >
              Unirme
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-dark border-t border-brand-gray"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-black text-xl text-text-secondary hover:text-brand-yellow transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-brand-gray my-2" />
              <div className="flex gap-4">
                <a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')} className="bg-brand-yellow text-black text-center font-black uppercase py-3 flex-grow">
                  Unirme AHORA
                </a>
                <a href="https://www.instagram.com/gymironforce_/" className="bg-brand-gray flex items-center justify-center px-4 hover:bg-brand-yellow hover:text-black transition-colors text-white">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
