import React from 'react';
import Container from '../common/Container';
import ProfileCircle from '../common/ProfileCircle';
import FeatureCard from '../common/FeatureCard';
import StatItem from '../common/StatItem';
import SocialCard from '../common/SocialCard';

const About: React.FC = () => {
  const features = [
    {
      title: 'Innovación Constante',
      description: 'Nos mantenemos a la vanguardia de las últimas tecnologías para ofrecer soluciones cutting-edge.',
    },
    {
      title: 'Calidad Garantizada',
      description: 'Cada proyecto pasa por rigurosos controles de calidad para asegurar la máxima satisfacción.',
    },
    {
      title: 'Compromiso Total',
      description: 'Trabajamos en estrecha colaboración con nuestros clientes hasta lograr sus objetivos.',
    },
  ];

  const stats = [
    { value: '10+', label: 'Proyectos Completados' },
    { value: '99%', label: 'Satisfacción del Cliente' },
    { value: '8+', label: 'Años de Experiencia' },
    { value: '24/7', label: 'Soporte Técnico' },
    { value: '1.2k', label: 'Visitas' }, // Quinta estadística
  ];

  return (
    <section id="sobre-nosotros" className="py-0" style={{ backgroundColor: '#081022' }}>
      <Container>
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sobre Technological World
          </span>
        </h2>

        {/* Párrafo */}
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Somos un equipo apasionado de expertos en tecnología dedicados a transformar ideas innovadoras en soluciones digitales excepcionales.
        </p>

        {/* Círculo de perfil */}
        <div className="flex justify-center mb-20">
          <ProfileCircle />
        </div>

        {/* Tres tarjetas de características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center">
          <SocialCard />
        </div>
      </Container>
    </section>
  );
};

export default About;