import React from 'react';
import { useTheme } from './../../hooks/useTheme';

interface SeparadorWaveProps {
  className?: string;
  fillColor?: string;
}

const SeparadorWave: React.FC<SeparadorWaveProps> = ({ 
  className = '', 
  fillColor: customFillColor 
}) => {
  const { theme } = useTheme();
  
  // Determinar el color según el tema si no se proporciona uno personalizado
  // En modo dark: #081022 (azul oscuro), en modo light: #FCFCFD (blanco hueso)
  const fillColor = customFillColor || (theme === 'dark' ? '#081022' : '#FCFCFD');

  return (
    <div className={`absolute top-0 left-0 w-full leading-none overflow-hidden ${className}`}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[55px] sm:h-[135px] md:h-[175px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default SeparadorWave;