import React from 'react';

const CurveSeparator: React.FC = () => {
  return (
    <div className="relative w-full -mt-1 bg-black">
      <svg
        viewBox="0 -60 1440 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 175 C360 -60 1080 -60 1440 175 Z"
          fill="#081022"
        />
      </svg>
    </div>
  );
};

export default CurveSeparator;