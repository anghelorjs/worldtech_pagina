import React from 'react';

const CurveSeparator: React.FC = () => {
  return (
    <div className="relative w-full -mt-1 bg-black">
      <svg
        viewBox="0 0 1440 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 175C360 -60 1080 -60 1440 175L1440 350L0 350L0 175Z"
          fill="#081022"
        />
      </svg>
    </div>
  );
};

export default CurveSeparator;