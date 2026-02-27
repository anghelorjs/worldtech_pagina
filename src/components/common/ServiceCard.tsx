// src/components/common/ServiceCard.tsx
import React from 'react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number; // para variar el ícono (puedes cambiarlo por un icono específico si quieres)
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, index }) => {
  // Íconos variados para la esquina (puedes reemplazar con tus propios SVG)
  const icons = [
    '💻', // Sistemas
    '🔍', // Forense
    '📱', // Landing
    '👤', // Portafolio
    '🛒', // E-commerce
    '📖', // Catálogo
  ];

  return (
    <div className="group relative w-full overflow-hidden rounded-3xl bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700 transition-all duration-500">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="" 
          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col items-start min-h-[400px] md:min-h-[450px]">
        {/* Ícono superior izquierda */}
        <span className="text-4xl md:text-5xl mb-6 md:mb-8 bg-gray-800/50 p-4 rounded-2xl backdrop-blur-sm border border-gray-700/50">
          {icons[index % icons.length]}
        </span>

        {/* Título */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-xl">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">
          {description}
        </p>

        {/* Botón */}
        <div className="mt-auto">
          <Button href="#contacto" variant="primary" className="text-sm md:text-base">
            Comenzar Proyecto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;