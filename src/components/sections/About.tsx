import React from 'react';
import Container from '../common/Container';
import ProfileCircle from '../common/ProfileCircle';
import FeatureCard from '../common/FeatureCard';
import StatsCarousel from '../common/StatItem';   
import SocialCard from '../common/SocialCard';

const About: React.FC = () => {
  const features = [
    {
      title: 'Innovación Constante',
      description: 'Nos mantenemos a la vanguardia de las últimas tecnologías para ofrecer soluciones cutting-edge.',
    },
    {
      title: 'Calidad Garantizada',
      description: 'Cada proyecto pasa por rigurosos controles de calidad para asegurar la máxima satisfacción de nuestros clientes.',
    },
    {
      title: 'Compromiso Total',
      description: 'Trabajamos en estrecha colaboración con nuestros clientes hasta lograr sus objetivos y entregarle un producto de calidad.',
    },
  ];

  const stats = [
    { value: '10+',  label: 'Proyectos Completados' },
    { value: '99%',  label: 'Satisfacción del Cliente' },
    { value: '5+',   label: 'Años de Experiencia' },
    { value: '24/7', label: 'Soporte Técnico' },
    { value: '0',    label: 'Visitas' }, // valor real se inyecta desde localStorage
  ];

  return (
    <section id="sobre-nosotros" className="pt-40 pb-20" style={{ backgroundColor: '#081022' }}>
      <Container>
        {/* Título */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-8 -mt-10">
          <span className="text-white">Sobre</span>{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Technological World
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} index={index} />
          ))}
        </div>

        {/* Estadísticas en carrusel — ocupa el ancho completo del Container */}
        <div className="mb-20">
          <StatsCarousel stats={stats} />
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center text-center">
          <SocialCard />
        </div>
      </Container>
    </section>
  );
};

export default About;