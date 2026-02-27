// src/components/common/ServiceCard.tsx
import React from 'react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  isReversed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  icon,
  isReversed = false 
}) => {
  const imageColumnOrder = isReversed ? 'md:order-2' : 'md:order-1';
  const contentColumnOrder = isReversed ? 'md:order-1' : 'md:order-2';
  const iconAlignment = isReversed ? 'self-end' : 'self-start';

  return (
    <div className="w-full bg-black-900/40 rounded-3xl overflow-hidden border border-white-800/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[450px]">
        <div className={`relative w-full md:w-[70%] ${imageColumnOrder}`}>
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 h-full flex flex-col p-8 md:p-10">
            <div className={iconAlignment}>
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center">
                {icon}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wide drop-shadow-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent my-8" />

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