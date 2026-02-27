// src/components/common/ServiceCard.tsx
import React from 'react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  isReversed?: boolean; // true para imagen a la derecha, false para imagen a la izquierda
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  icon,
  isReversed = false 
}) => {
  // Clases para el orden de las columnas
  const imageColumnOrder = isReversed ? 'md:order-2' : 'md:order-1';
  const contentColumnOrder = isReversed ? 'md:order-1' : 'md:order-2';

  return (
    <div className="w-full bg-gray-900/40 rounded-3xl overflow-hidden border border-gray-800/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[450px]">
        {/* Columna de la imagen (izquierda o derecha según isReversed) */}
        <div className={`relative w-full md:w-[70%] ${imageColumnOrder}`}>
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt="" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro (60% de opacidad como mencionaste) */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Contenido sobre la imagen */}
          <div className="relative z-10 h-full flex flex-col p-8 md:p-10">
            {/* Ícono SVG en la esquina superior izquierda */}
            <div className="mb-auto">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                {icon}
              </div>
            </div>

            {/* Título del servicio */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-16 max-w-xs">
              {title}
            </h3>
          </div>
        </div>

        {/* Línea divisoria vertical (solo en desktop) */}
        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent my-8" />

        {/* Columna de contenido (descripción + botón) */}
        <div className={`flex-1 flex flex-col justify-center p-8 md:p-12 ${contentColumnOrder}`}>
          <div className="max-w-md mx-auto md:mx-0">
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 text-center">
              {description}
            </p>
            <Button href="#contacto" variant="primary">
              Comenzar Proyecto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;