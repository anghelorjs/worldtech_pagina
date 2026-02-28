import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-black">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Columna de texto h1 */}
          <div className="flex-1 text-center md:text-center">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              <span 
                className="block leading-[1.5] font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Soluciones Tecnológicas
              </span>
              <span className="text-white block leading-[1.5]">
                Para Impulsar Tu Negocio
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
              Transformamos tus ideas en soluciones tecnológicas innovadoras, 
              optimizando procesos y maximizando tu productividad.
            </p>
            <div className="mt-14 flex justify-center md:justify-center">
              <div className="relative">
                {/* Efecto de glow suave y más ancho alrededor del botón */}
                <div className="absolute -inset-3 rounded-full opacity-30 blur-xl"
                  style={{
                    background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)',
                  }}
                />
                <Button />
              </div>
            </div>
          </div>
          {/* Columna de imagen */}
          <div className="flex-1 flex justify-end">
            <div className="relative">
              <img
                src="/src/assets/images/hero-image.png"
                alt="Tecnología"
                className="w-full max-w-md md:max-w-lg lg:min-w-xl relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 25px rgba(255,31,167,0.3)) drop-shadow(0 0 25px rgba(0,240,255,0.3))',
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;