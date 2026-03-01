import React from 'react';
import Container from '../common/Container';
import Laptop from '../common/Laptop';
import ContactIcons from '../common/ContactIcons';
import ContactForm from '../common/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-40" style={{ backgroundColor: '#081022' }}>
      <Container>
        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-16">
          <span
            style={{
              background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Contáctanos
          </span>
        </h2>

        {/* Contenido de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start -mb-20">
          {/* Columna izquierda - Texto y elementos visuales */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                ¿Cómo podemos ayudarte?
              </h3>
              <p className="text-gray-300 text-lg text-center">
                ¿Tienes un proyecto en mente? Nos encantaría escuchar tu idea y ayudarte 
                a convertirla en una solución tecnológica exitosa.
              </p>
            </div>

            {/* Laptop animada */}
            <div className="flex justify-center h-[140px] lg:h-[350px] pt-10">
              <Laptop />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center pt-12">
                Información de Contacto
              </h3>
            </div>

            {/* Íconos de contacto */}
            <div className="flex justify-center pt-0 lg:pt-5">
              <ContactIcons 
                email="technological.world.dev@gmail.com"
                phone="77575921"
                location="https://maps.app.goo.gl/HWmuf5E2ntze7nQD6"
              />
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="w-full flex justify-center lg:justify-end overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;