import React from 'react';
import SEO from '../common/SEO';

const HeroSEO: React.FC = () => {
  return (
    <SEO
      title="Technological World"
      description="Somos una empresa de desarrollo de software y servicio técnico en computadoras con sede en La Paz, Bolivia. También ofrecemos recuperación de información e informática forense, brindando soluciones tecnológicas integrales a empresas y personas."
      keywords="soluciones tecnológicas, desarrollo web, innovación, productividad, transformación digital"
      image="/src/frontend/assets/images/hero-image.webp"
      url="/"
      type="website"
    />
  );
};

export default HeroSEO;