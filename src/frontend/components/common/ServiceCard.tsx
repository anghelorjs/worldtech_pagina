import React from 'react';
import { useTheme } from '../../hooks/useTheme';
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
  const { theme } = useTheme();
  
  const imageColumnOrder = isReversed ? 'md:order-2' : 'md:order-1';
  const contentColumnOrder = isReversed ? 'md:order-1' : 'md:order-2';
  const iconAlignment = isReversed ? 'self-end' : 'self-start';

  return (
    <div className={`w-full rounded-3xl overflow-hidden border transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black-900/40 border-white-800/50 backdrop-blur-sm' 
        : 'bg-white/80 border-gray-800/50 shadow-lg backdrop-blur-sm'
    }`}>
      <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[450px] h-[500px] md:h-auto">
        <div className={`relative w-full h-[50%] md:h-auto md:w-[70%] ${imageColumnOrder}`}>
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={`${title} - Servicio tecnológico de Technological World`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${
              theme === 'dark' ? 'bg-black/75' : 'bg-black/40'
            }`} />
          </div>

          <div className="relative z-10 h-full flex flex-col p-8 md:p-10">
            <div className={iconAlignment}>
              <div className={`w-14 h-14 backdrop-blur-sm rounded-3xl border flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/30 border-white/40'
              }`}>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>
                  {icon}
                </span>
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

        <div className={`hidden md:block w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent my-8 ${
          theme === 'dark' ? 'via-gray-700' : 'via-gray-300'
        }`} />

        <div className={`flex-1 flex flex-col justify-center p-8 md:p-12 ${contentColumnOrder}`}>
          <div className="max-w-md mx-auto">
            <p className={`text-base md:text-lg leading-relaxed mb-8 text-center ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}>
              {description}
            </p>
            <div className="flex justify-center">
              <Button href="#contacto" variant="primary">
                Comenzar Proyecto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;