import React, { useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  index?: number;
}

const defaultIcons = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M9 18h6M10 21h4M12 2a7 7 0 0 1 4 12.9V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.1A7 7 0 0 1 12 2z"/>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 2l7 4v5c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
];

const styleTag = (theme: string) => `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

  .fc-card {
    position: relative;
    padding: 2px;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(255,31,167,0.25), rgba(0,240,255,0.15));
    transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease;
  }

  .fc-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: conic-gradient(from var(--angle, 0deg), #FF1FA7, #00F0FF, #7B61FF, #FF1FA7);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .fc-card:hover::before {
    opacity: 1;
    animation: spin-border 3s linear infinite;
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes spin-border {
    to { --angle: 360deg; }
  }

  .fc-card:hover {
    transform: translateY(-6px) scale(1.015);
    box-shadow: 0 20px 60px rgba(0,240,255,0.12), 0 8px 20px rgba(255,31,167,0.1);
  }

  .fc-inner {
    background: ${theme === 'dark' ? 'rgba(8, 16, 34, 0.85)' : 'rgba(255, 255, 255, 0.85)'};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 18px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .fc-icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(255,31,167,0.15), rgba(0,240,255,0.12));
    border: 1px solid rgba(0,240,255,0.2);
    color: #00F0FF;
    transition: background 0.3s ease, color 0.3s ease;
    flex-shrink: 0;
  }

  .fc-card:hover .fc-icon-wrap {
    background: linear-gradient(135deg, rgba(255,31,167,0.3), rgba(0,240,255,0.22));
    color: #FF1FA7;
  }

  .fc-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${theme === 'dark' ? '#fff' : '#1a1a2e'};
    letter-spacing: -0.01em;
    line-height: 1.25;
  }

  .fc-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    line-height: 1.65;
    color: ${theme === 'dark' ? 'rgba(180, 200, 230, 0.75)' : 'rgba(30, 40, 60, 0.8)'};
  }

  .fc-line {
    width: 2.5rem;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, #FF1FA7, #00F0FF);
    transition: width 0.35s ease;
  }

  .fc-card:hover .fc-line {
    width: 5rem;
  }
`;

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index = 0 }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const id = 'fc-styles';
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const el = document.createElement('style');
    el.id = id;
    el.textContent = styleTag(theme);
    document.head.appendChild(el);
  }, [theme]);

  const resolvedIcon = icon ?? defaultIcons[index % defaultIcons.length];

  return (
    <div className="fc-card">
      <div className="fc-inner">
        <div className="fc-icon-wrap">{resolvedIcon}</div>
        <div>
          <h3 className="fc-title">{title}</h3>
          <div className="fc-line" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }} />
          <p className="fc-desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;