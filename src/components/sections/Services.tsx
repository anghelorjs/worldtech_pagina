// src/components/sections/Services.tsx
import React from 'react';
import Container from '../common/Container';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/services';

const Services: React.FC = () => {
  const avanzadas = services.filter(s => s.category === 'avanzadas');
  const web = services.filter(s => s.category === 'web');

  return (
    <section id="servicios" className="py-20 bg-black">
      <Container>
        {/* Título principal: Nuestros Servicios */}
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

        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Ofrecemos una amplia gama de servicios tecnológicos y de desarrollo web para 
          satisfacer todas las necesidades digitales de tu empresa.
        </p>

        {/* Soluciones Tecnológicas Avanzadas */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
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

          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Servicios especializados para empresas que requieren soluciones tecnológicas de alta complejidad.
          </p>

          {/* Tarjetas de servicios avanzados - UNA POR FILA (según diseño) */}
          <div className="space-y-8">
            {avanzadas.map((service, idx) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                index={idx}
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

          {/* Grid responsivo: 1 columna en móvil, 2 en md, 3 en lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {web.map((service, idx) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                index={idx + avanzadas.length} // para que los íconos sigan variando
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;