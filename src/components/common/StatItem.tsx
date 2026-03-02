import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

function useVisitCount(): string {
  const [count, setCount] = useState<string>('...');

  useEffect(() => {
    try {
      const key = 'tw_visit_count';
      const raw = localStorage.getItem(key);
      const current = raw ? parseInt(raw, 10) : 0;
      const next = current + 1;
      localStorage.setItem(key, String(next));
      if (next >= 1000) {
        setCount(`${(next / 1000).toFixed(1)}k`);
      } else {
        setCount(String(next));
      }
    } catch {
      setCount('—');
    }
  }, []);

  return count;
}

const PALETTES = [
  { accent: '#FF1FA7', dimAccent: 'rgba(255,31,167,0.12)', border: 'rgba(255,31,167,0.5)'  },
  { accent: '#00F0FF', dimAccent: 'rgba(0,240,255,0.10)',  border: 'rgba(0,240,255,0.45)'  },
  { accent: '#7B61FF', dimAccent: 'rgba(123,97,255,0.12)', border: 'rgba(123,97,255,0.5)'  },
  { accent: '#00E5A0', dimAccent: 'rgba(0,229,160,0.10)',  border: 'rgba(0,229,160,0.45)'  },
  { accent: '#FFB800', dimAccent: 'rgba(255,184,0,0.10)',  border: 'rgba(255,184,0,0.45)'  },
];

const ICONS = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>,
];

const css = (theme: string) => `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

  .sc-root {
    --card-w: 210px;
    --card-h: 110px;
    --gap: 16px;
    --dur: 30s;
    width: 100%;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%);
    padding: 12px 0;
  }

  .sc-track {
    display: flex;
    gap: var(--gap);
    width: max-content;
    animation: sc-scroll var(--dur) linear infinite;
  }

  .sc-root:hover .sc-track {
    animation-play-state: paused;
  }

  @keyframes sc-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .sc-card {
    width: var(--card-w);
    height: var(--card-h);
    flex-shrink: 0;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 18px;
    position: relative;
    background: ${theme === 'dark' ? '#0c1628' : '#ffffff'};
    border: 1px solid var(--sc-border);
    transition: box-shadow 0.3s ease, transform 0.3s cubic-bezier(.22,.68,0,1.2), border-color 0.3s ease;
    overflow: hidden;
    cursor: default;
  }

  .sc-card::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--sc-accent);
    opacity: 0.1;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .sc-card:hover {
    transform: translateY(-4px) scale(1.025);
    box-shadow: 0 0 20px 2px var(--sc-border);
    border-color: var(--sc-accent);
  }

  .sc-card:hover::after {
    opacity: 0.2;
    transform: scale(1.3);
  }

  .sc-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sc-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: var(--sc-dim);
    color: var(--sc-accent);
    flex-shrink: 0;
  }

  .sc-badge {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.58rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--sc-accent);
    background: var(--sc-dim);
    border: 1px solid var(--sc-border);
    border-radius: 20px;
    padding: 2px 7px;
  }

  .sc-value {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.85rem;
    line-height: 1;
    letter-spacing: -0.01em;
    color: ${theme === 'dark' ? '#ffffff' : '#1a1a2e'};
  }

  .sc-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    color: ${theme === 'dark' ? 'rgba(160, 185, 220, 0.6)' : 'rgba(60, 80, 100, 0.6)'};
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin-top: 6px;
  }

  .sc-bottom {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    .sc-root {
      --card-w: 160px;
      --card-h: 90px;
      --dur: 22s;
    }
    .sc-value { font-size: 1.5rem; }
  }
`;

interface StatCardProps {
  value: string;
  label: string;
  idx: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, idx }) => {
  const p = PALETTES[idx % PALETTES.length];
  const icon = ICONS[idx % ICONS.length];

  return (
    <div
      className="sc-card"
      style={{
        ['--sc-accent' as any]: p.accent,
        ['--sc-dim' as any]: p.dimAccent,
        ['--sc-border' as any]: p.border,
      }}
    >
      <div className="sc-top">
        <div className="sc-icon">{icon}</div>
        <span className="sc-badge">World Tech</span>
      </div>
      <div className="sc-bottom">
        <div className="sc-value">{value}</div>
        <div className="sc-label">{label}</div>
      </div>
    </div>
  );
};

interface StatsCarouselProps {
  stats: { value: string; label: string }[];
}

const StatsCarousel: React.FC<StatsCarouselProps> = ({ stats }) => {
  const { theme } = useTheme();
  const visitCount = useVisitCount();

  useEffect(() => {
    const id = 'sc-styles';
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css(theme);
    document.head.appendChild(el);
  }, [theme]);

  const resolved = stats.map((s) =>
    s.label.toLowerCase().includes('visita') ? { ...s, value: visitCount } : s
  );

  const doubled = [...resolved, ...resolved];

  return (
    <div className="sc-root">
      <div className="sc-track">
        {doubled.map((s, i) => (
          <StatCard key={i} value={s.value} label={s.label} idx={i % resolved.length} />
        ))}
      </div>
    </div>
  );
};

export default StatsCarousel;