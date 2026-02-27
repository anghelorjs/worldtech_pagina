import React from 'react';
import Container from '../common/Container';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/services';

const Services: React.FC = () => {
  // Filtrar servicios por categoría
  const avanzadas = services.filter(s => s.category === 'avanzadas');
  const web = services.filter(s => s.category === 'web');

  return (
    <section id="servicios" className="py-20" style={{ backgroundColor: '#000000' }}>
      <Container>
        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-6">
          <span className="text-white">Nuestros</span>{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Servicios
          </span>
        </h2>

        {/* Párrafo descriptivo */}
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Ofrecemos una amplia gama de servicios tecnológicos y de desarrollo web para 
          satisfacer todas las necesidades digitales de tu empresa.
        </p>

        {/* Título principal */}
        <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-6">
          <span
            style={{
              background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Soluciones Tecnológicas Avanzadas
          </span>
        </h3>


        {/* Soluciones Tecnológicas Avanzadas */}
        <div className="mb-20">
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Servicios especializados para empresas que requieren soluciones tecnológicas de alta complejidad.
          </p>
          
          {/* Grid de 2 columnas para servicios avanzados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {avanzadas.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Desarrollo Web Profesional */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Desarrollo Web Profesional
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Creamos experiencias web excepcionales que impulsan tu presencia digital y conectan con tu audiencia.
          </p>
          
          {/* Grid de 3 columnas en desktop, 2 en tablet, 1 en móvil */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {web.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;