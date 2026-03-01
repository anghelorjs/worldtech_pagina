import React from 'react';

interface SeparadorWaveInvertidoProps {
  className?: string;
  fillColor?: string;
}

const SeparadorWaveInvertido: React.FC<SeparadorWaveInvertidoProps> = ({ 
  className = '', 
  fillColor = '#000000' 
}) => {
  return (
    <div 
      className={`absolute top-0 left-0 w-full leading-none overflow-hidden rotate-180 ${className}`}
    >
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[135px] sm:h-[289px] md:h-[391px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default SeparadorWaveInvertido;