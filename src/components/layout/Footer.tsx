import React from 'react';
import Container from '../common/Container';
import QuickLinks from '../common/QuickLinks';
import ServiceLinks from '../common/ServiceLinks';
import FooterContact from '../common/FooterContact';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    { name: 'Informática Forense', href: '#servicios' },
    { name: 'Sistemas Web', href: '#servicios' },
    { name: 'Landing Pages', href: '#servicios' },
    { name: 'E-commerce', href: '#servicios' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12" style={{ backgroundColor: '#000000' }}>
      <Container>
        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="flex justify-center lg:justify-center">
            <img 
              src="/src/assets/images/logo-light.png" 
              alt="Technological World" 
              className="h-40 w-auto"
            />
          </div>

          {/* Enlaces Rápidos */}
          <div className='lg:justify-center'>
            <h3 className="text-lg font-semibold text-white mb-4 text-center lg:text-center">
              Enlaces Rápidos
            </h3>
            <QuickLinks links={quickLinks} />
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center lg:text-center">
              Servicios
            </h3>
            <ServiceLinks services={services} />
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center lg:text-center">
              Contacto
            </h3>
            <div className="flex justify-center lg:justify-center">
              <FooterContact 
                email="technological.world.dev@gmail.com"
                phone="77575921"
                location="https://maps.app.goo.gl/HWmuf5E2ntze7nQD6"
              />
            </div>
          </div>
        </div>

        {/* Línea divisoria y derechos reservados */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Technological World. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;