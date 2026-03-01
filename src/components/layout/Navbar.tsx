import React, { useState, useEffect } from 'react';
import ThemeToggle from '../common/ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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
          border border-white/20
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/images/logo-light.png" 
              alt="Technological World" 
              className="h-10 w-auto"
            />
          </div>

          {/* Menú de navegación desktop */}
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

          <div className="flex items-center gap-4">
            {/* Botón de tema */}
            <ThemeToggle />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // SVG de X (cerrar)
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M18 6L6 18M6 6L18 18" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M4 6H20M4 12H20M4 18H20" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <div 
          className={`
            md:hidden fixed left-0 right-0 top-[88px] mx-4 px-6 py-8
            rounded-3xl bg-black/95 backdrop-blur-xl border border-white/20
            transition-all duration-300 ease-in-out
            ${isMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4 pointer-events-none'
            }
          `}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-300 hover:text-blue-500 transition-colors font-medium py-2 px-4 hover:bg-white/5 rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;