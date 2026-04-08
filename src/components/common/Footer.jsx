import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo size="md" />
            <p className="text-text-secondary font-medium mt-6 max-w-xs">
              Tu cuerpo es la materia prima.<br/>Nosotros somos la forja.
            </p>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black uppercase text-xl mb-6">Horarios de Forja</h4>
            <ul className="space-y-2 text-text-secondary font-medium">
              <li><strong className="text-white">Lunes a Viernes:</strong> 6:00am - 9:00pm</li>
              <li><strong className="text-white">Sábados:</strong> 7:00am - 2:00pm</li>
            </ul>
          </div>

          {/* Location & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black uppercase text-xl mb-6">Encuéntranos</h4>
            <div className="flex items-start gap-3 text-text-secondary font-medium mb-6">
              <FaMapMarkerAlt className="text-brand-yellow mt-1 shrink-0" size={18} />
              <p>
                C.C Prisma, piso 1 - Local N°59<br/>
                Frente a Supermercado Kosmo<br/>
                Guacara, Carabobo
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gymironforce_/" target="_blank" rel="noopener noreferrer" className="bg-brand-gray hover:bg-brand-yellow text-white hover:text-black w-12 h-12 flex items-center justify-center transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.link/pskrjz" target="_blank" rel="noopener noreferrer" className="bg-brand-gray hover:bg-brand-yellow text-white hover:text-black w-12 h-12 flex items-center justify-center transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-brand-gray pt-8 flex justify-center">
          <p className="text-text-secondary text-sm font-medium">
            © {new Date().getFullYear()} Gym Iron Force. Guacara, Carabobo.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
