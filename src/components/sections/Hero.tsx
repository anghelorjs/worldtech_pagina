import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-black">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Columna de texto */}
          <div className="flex-1 text-center md:text-center">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                <span className="text-white block leading-[1.5]">Soluciones Tecnológicas</span>
                <span className="text-white block leading-[1.5]">Para Impulsar Tu Negocio</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
              Transformamos tus ideas en soluciones tecnológicas innovadoras, 
              optimizando procesos y maximizando tu productividad.
            </p>
            <div className="mt-14 flex justify-center md:justify-center">
              <Button />
            </div>
          </div>
          {/* Columna de imagen */}
          <div className="flex-1 flex justify-end">
            <img
              src="/src/assets/images/hero-image.png"
              alt="Tecnología"
              className="w-full max-w-md md:max-w-lg lg:min-w-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;