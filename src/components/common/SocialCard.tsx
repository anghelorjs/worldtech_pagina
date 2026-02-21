import React from 'react';
import styled from 'styled-components';

const socials = [
  {
    name: 'Facebook',
    handle: '@Facebook',
    url: 'https://www.facebook.com/profile.php?id=61576156485234',
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.15)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: '@GitHub',
    url: 'https://github.com/TechnologicalWorld',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.1)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@YouTube',
    url: 'https://www.youtube.com/@TechnologicalWorld-b1z',
    color: '#FF0000',
    bg: 'rgba(255,0,0,0.13)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    handle: '@Discord',
    url: 'https://discord.gg/DsbjuVyArS',
    color: '#5865F2',
    bg: 'rgba(88,101,242,0.15)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515c-.21.38-.45.89-.61 1.3a18.25 18.25 0 0 0-5.443 0 14.115 14.115 0 0 0-.62-1.3A19.65 19.65 0 0 0 3.68 4.37c-2.914 4.34-3.69 8.57-3.26 12.68a20.09 20.09 0 0 0 6.03 3.02c.48-.66 1.01-1.39 1.44-2.14a13.6 13.6 0 0 1-2.31-1.11c.19-.14.38-.29.56-.44a15.31 15.31 0 0 0 13.31 0c.19.15.38.3.56.44a13.6 13.6 0 0 1-2.31 1.11c.43.75.96 1.48 1.44 2.14a20.09 20.09 0 0 0 6.03-3.02c.5-4.58-.87-8.77-3.26-12.68zM8.02 15.33c-1.18 0-2.14-1.08-2.14-2.4 0-1.32.96-2.4 2.14-2.4s2.15 1.08 2.15 2.4c0 1.32-.96 2.4-2.15 2.4zm7.97 0c-1.18 0-2.14-1.08-2.14-2.4 0-1.32.96-2.4 2.14-2.4s2.15 1.08 2.15 2.4c0 1.32-.96 2.4-2.15 2.4z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@TikTok',
    url: 'https://www.tiktok.com/@world_tech.0101',
    color: '#69C9D0',
    bg: 'rgba(105,201,208,0.13)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.01-8.83a8.16 8.16 0 0 0 4.78 1.52V4.55a4.85 4.85 0 0 1-1-.14z" />
      </svg>
    ),
  },
];

const SocialCard: React.FC = () => {
  return (
    <StyledWrapper>
      <p className="heading">Visítanos en nuestras redes sociales</p>
      <div className="card">
        {socials.map((s) => (
          <a
            key={s.name}
            className="social-item"
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ['--accent' as any]: s.color, ['--bg' as any]: s.bg }}
          >
            <span className="tooltip">{s.handle}</span>
            <div className="icon-circle">
              <span className="icon-svg" style={{ color: s.color }}>{s.icon}</span>
            </div>
          </a>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  .heading {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(160, 200, 230, 0.55);
    margin-top: -30px;
    margin-bottom: 25px;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    width: 600px;
    height: 90px;
    background: #0a1020;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 50px;
    padding-inline: 20px;

    @media (max-width: 640px) {
      width: 100%;
      max-width: 380px;
      height: 76px;
      padding-inline: 14px;
      gap: 6px;
    }
  }

  .card:hover .social-item:not(:hover) {
    filter: blur(2px);
    transform: scale(0.82);
    opacity: 0.5;
  }

  .social-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(.22,.68,0,1.3), filter 0.3s ease, opacity 0.3s ease;
  }

  .social-item:hover {
    transform: translateY(-6px) scale(1.12);
    z-index: 10;
  }

  .social-item:hover .tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(-4px);
  }

  .social-item:hover .icon-circle {
    background: var(--bg);
    border-color: var(--accent);
    box-shadow: 0 0 16px 3px var(--bg), 0 0 6px 1px var(--accent);
  }

  .icon-circle {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    border: 1.5px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 640px) {
      width: 42px;
      height: 42px;
    }
  }

  .icon-svg {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    svg {
      width: 26px;
      height: 26px;

      @media (max-width: 640px) {
        width: 20px;
        height: 20px;
      }
    }
  }

  .tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: #111827;
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(200,220,255,0.9);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    white-space: nowrap;
    padding: 4px 10px;
    border-radius: 6px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 5px solid transparent;
      border-top-color: rgba(255,255,255,0.1);
    }
  }
`;

export default SocialCard;