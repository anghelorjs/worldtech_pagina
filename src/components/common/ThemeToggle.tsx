import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 flex items-center justify-center backdrop-blur-sm"
      aria-label="Cambiar tema"
    >
      {theme === 'light' ? (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
          <path d="M12 1V3M12 21V23M4 4L6 6M18 18L20 20M1 12H3M21 12H23M4 20L6 18M18 6L20 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;