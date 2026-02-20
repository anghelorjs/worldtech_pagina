import React from 'react';

const CurveSeparator: React.FC = () => {
  return (
    <div className="relative w-full -mt-1 bg-black">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L60 8.88889C120 17.7778 240 35.5556 360 44.4444C480 53.3333 600 53.3333 720 48.8889C840 44.4444 960 35.5556 1080 26.6667C1200 17.7778 1320 8.88889 1380 4.44444L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
          className="fill-gray-900" // Cambiado a gris oscuro para que se vea en fondo negro
        />
      </svg>
    </div>
  );
};

export default CurveSeparator;