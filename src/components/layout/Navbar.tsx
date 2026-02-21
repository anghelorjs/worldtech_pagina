import React, { useState, useEffect } from 'react';
import ThemeToggle from '../common/ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-16"
      style={{ margin: '0 auto', maxWidth: '1400px' }}
    >
      <div
        className={`
          rounded-full px-8 py-4 transition-all duration-300
          ${isScrolled 
            ? 'bg-black/80 backdrop-blur-md' 
            : 'bg-black/80 backdrop-blur-md'
          }
          border border-white-400
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Reemplaza con tu imagen */}
          <div className="flex items-center">
            <img 
              src="/src/assets/images/logo-light.png" 
              alt="Technological World" 
              className="h-10 w-auto"
            />
          </div>

          {/* Menú de navegación */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-500 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botón de tema */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;