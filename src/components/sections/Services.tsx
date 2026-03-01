// src/components/sections/Services.tsx
import React from 'react';
import Container from '../common/Container';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/services';
import {
  CodeIcon,
  SearchIcon,
  LayoutIcon,
  UserIcon,
  ShoppingCartIcon,
  BookIcon,
} from '../../assets/icons';

const iconMap: Record<string, React.ReactNode> = {
  CodeIcon: <CodeIcon />,
  SearchIcon: <SearchIcon />,
  LayoutIcon: <LayoutIcon />,
  UserIcon: <UserIcon />,
  ShoppingCartIcon: <ShoppingCartIcon />,
  BookIcon: <BookIcon />,
};

const Services: React.FC = () => {
  const avanzadas = services.filter(s => s.category === 'avanzadas');
  const web = services.filter(s => s.category === 'web');

  return (
    <section id="servicios" className="py-40 bg-black">
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

          <div className="space-y-12">
            {avanzadas.map((service, idx) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={iconMap[service.icon]}
                isReversed={idx % 2 === 1}
              />
            ))}
          </div>
        </div>

        {/* Desarrollo Web Profesional */}
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span
              style={{
                background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Desarrollo Web Profesional
            </span>
          </h3>

          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Creamos experiencias web excepcionales que impulsan tu presencia digital y conectan con tu audiencia.
          </p>

          <div className="space-y-12">
            {web.map((service, idx) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={iconMap[service.icon]}
                isReversed={idx % 2 === 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;