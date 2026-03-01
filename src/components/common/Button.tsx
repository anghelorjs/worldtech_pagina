// src/components/Button.tsx
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  href?: string; // Añadimos la prop href
}

const Button: React.FC<ButtonProps> = ({ href }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Si hay href, renderizamos un <a>, si no, un <button>
  const content = (
    <>
      <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
      <div className="txt-wrapper">
        <div className="txt-1">
          <span className="btn-letter">C</span>
          <span className="btn-letter">o</span>
          <span className="btn-letter">m</span>
          <span className="btn-letter">e</span>
          <span className="btn-letter">n</span>
          <span className="btn-letter">z</span>
          <span className="btn-letter">a</span>
          <span className="btn-letter">r</span>
          <span className="btn-letter">&nbsp;</span>
          <span className="btn-letter">P</span>
          <span className="btn-letter">r</span>
          <span className="btn-letter">o</span>
          <span className="btn-letter">y</span>
          <span className="btn-letter">e</span>
          <span className="btn-letter">c</span>
          <span className="btn-letter">t</span>
          <span className="btn-letter">o</span>
        </div>
        <div className="txt-2">
          <span className="btn-letter">C</span>
          <span className="btn-letter">o</span>
          <span className="btn-letter">n</span>
          <span className="btn-letter">t</span>
          <span className="btn-letter">a</span>
          <span className="btn-letter">c</span>
          <span className="btn-letter">t</span>
          <span className="btn-letter">a</span>
          <span className="btn-letter">n</span>
          <span className="btn-letter">d</span>
          <span className="btn-letter">o</span>
          <span className="btn-letter">.</span>
          <span className="btn-letter">.</span>
          <span className="btn-letter">.</span>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <StyledWrapper>
        <div className="btn-wrapper">
          <a href={href} onClick={handleClick} className="btn">
            {content}
          </a>
        </div>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <div className="btn-wrapper">
        <button className="btn">
          {content}
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-wrapper {
    position: relative;
    display: inline-block;
  }

  .btn {
    --border-radius: 32px;
    --padding: 4px;
    --transition: 0.4s;
    --button-color: #101010;
    --highlight-color-hue: 280deg;

    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75em 1.5em 0.75em 1.2em;
    font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.5px;

    background-color: var(--button-color);
    position: relative;
    z-index: 1;

    box-shadow:
      inset 0px 1px 1px rgba(255, 255, 255, 0.2),
      inset 0px 2px 2px rgba(255, 255, 255, 0.15),
      inset 0px 4px 4px rgba(255, 255, 255, 0.1),
      inset 0px 8px 8px rgba(255, 255, 255, 0.05),
      inset 0px 16px 16px rgba(255, 255, 255, 0.05),
      0px -1px 1px rgba(0, 0, 0, 0.02),
      0px -2px 2px rgba(0, 0, 0, 0.03),
      0px -4px 4px rgba(0, 0, 0, 0.05),
      0px -8px 8px rgba(0, 0, 0, 0.06),
      0px -16px 16px rgba(0, 0, 0, 0.08);

    border: solid 2px transparent;
    background-image: linear-gradient(var(--button-color), var(--button-color)), 
                      linear-gradient(135deg, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-radius: var(--border-radius);
    cursor: pointer;
    min-width: 220px;

    transition:
      box-shadow var(--transition),
      background-color var(--transition);
  }
  
  .btn::before {
    content: "";
    position: absolute;
    top: calc(0px - var(--padding) - 1px);
    left: calc(0px - var(--padding) - 1px);
    width: calc(100% + var(--padding) * 2 + 2px);
    height: calc(100% + var(--padding) * 2 + 2px);
    border-radius: calc(var(--border-radius) + var(--padding) + 1px);
    pointer-events: none;
    background-image: linear-gradient(0deg, #0004, #000a);
    z-index: -2;
    transition:
      box-shadow var(--transition),
      filter var(--transition);
    box-shadow:
      0 -8px 8px -6px #0000 inset,
      0 -16px 16px -8px #00000000 inset,
      1px 1px 1px #fff2,
      2px 2px 2px #fff1,
      -1px -1px 1px #0002,
      -2px -2px 2px #0001;
  }
  
  .btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    pointer-events: none;
    background-image: linear-gradient(
      0deg,
      #fff,
      hsl(var(--highlight-color-hue), 100%, 70%),
      hsla(var(--highlight-color-hue), 100%, 70%, 50%),
      8%,
      transparent
    );
    background-position: 0 0;
    opacity: 0;
    transition:
      opacity var(--transition),
      filter var(--transition);
    z-index: 1;
  }

  .btn-letter {
    position: relative;
    display: inline-block;
    color: #fff5;
    animation: letter-anim 2s ease-in-out infinite;
    transition:
      color var(--transition),
      text-shadow var(--transition),
      opacity var(--transition);
    font-size: 1.1rem;
  }

  @keyframes letter-anim {
    50% {
      text-shadow: 0 0 3px #fff8;
      color: #fff;
    }
  }

  .btn-svg {
    height: 26px;
    width: 26px;
    margin-right: 0.8rem;
    fill: #e8e8e8;
    animation: flicker 2s linear infinite;
    animation-delay: 0.5s;
    filter: drop-shadow(0 0 2px #fff9);
    transition:
      fill var(--transition),
      filter var(--transition),
      opacity var(--transition);
    flex-shrink: 0;
    z-index: 2;
  }
  
  @keyframes flicker {
    50% {
      opacity: 0.3;
    }
  }

  .txt-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;
    height: 32px;
    z-index: 2;
  }
  
  .txt-1,
  .txt-2 {
    position: absolute;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .txt-1 {
    animation: appear-anim 1s ease-in-out forwards;
  }
  
  .txt-2 {
    opacity: 0;
  }
  
  @keyframes appear-anim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  .btn:focus .txt-1 {
    animation: opacity-anim 0.3s ease-in-out forwards;
    animation-delay: 0.5s;
  }
  
  .btn:focus .txt-2 {
    animation: opacity-anim 0.3s ease-in-out reverse forwards;
    animation-delay: 0.5s;
  }
  
  @keyframes opacity-anim {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .btn:focus .btn-letter {
    animation:
      focused-letter-anim 1s ease-in-out forwards,
      letter-anim 1.2s ease-in-out infinite;
    animation-delay: 0s, 1s;
  }
  
  @keyframes focused-letter-anim {
    0%,
    100% {
      filter: blur(0px);
    }
    50% {
      transform: scale(1.5);
      filter: blur(8px) brightness(150%)
        drop-shadow(-24px 8px 8px hsl(var(--highlight-color-hue), 100%, 70%));
    }
  }
  
  .btn:focus .btn-svg {
    animation-duration: 1.2s;
    animation-delay: 0.2s;
  }

  .btn:focus::before {
    box-shadow:
      0 -8px 12px -6px #fff3 inset,
      0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 20%) inset,
      1px 1px 1px #fff3,
      2px 2px 2px #fff1,
      -1px -1px 1px #0002,
      -2px -2px 2px #0001;
  }
  
  .btn:focus::after {
    opacity: 0.6;
    mask-image: linear-gradient(0deg, #fff, transparent);
    filter: brightness(100%);
  }

  /* Animation delays para "Comenzar Proyecto" (17 letras + espacio) */
  .txt-1 .btn-letter:nth-child(1) { animation-delay: 0s; }
  .txt-1 .btn-letter:nth-child(2) { animation-delay: 0.05s; }
  .txt-1 .btn-letter:nth-child(3) { animation-delay: 0.1s; }
  .txt-1 .btn-letter:nth-child(4) { animation-delay: 0.15s; }
  .txt-1 .btn-letter:nth-child(5) { animation-delay: 0.2s; }
  .txt-1 .btn-letter:nth-child(6) { animation-delay: 0.25s; }
  .txt-1 .btn-letter:nth-child(7) { animation-delay: 0.3s; }
  .txt-1 .btn-letter:nth-child(8) { animation-delay: 0.35s; }
  .txt-1 .btn-letter:nth-child(9) { animation-delay: 0.4s; }
  .txt-1 .btn-letter:nth-child(10) { animation-delay: 0.45s; }
  .txt-1 .btn-letter:nth-child(11) { animation-delay: 0.5s; }
  .txt-1 .btn-letter:nth-child(12) { animation-delay: 0.55s; }
  .txt-1 .btn-letter:nth-child(13) { animation-delay: 0.6s; }
  .txt-1 .btn-letter:nth-child(14) { animation-delay: 0.65s; }
  .txt-1 .btn-letter:nth-child(15) { animation-delay: 0.7s; }
  .txt-1 .btn-letter:nth-child(16) { animation-delay: 0.75s; }
  .txt-1 .btn-letter:nth-child(17) { animation-delay: 0.8s; }

  /* Animation delays para "Contactando..." (14 caracteres) */
  .txt-2 .btn-letter:nth-child(1) { animation-delay: 0s; }
  .txt-2 .btn-letter:nth-child(2) { animation-delay: 0.05s; }
  .txt-2 .btn-letter:nth-child(3) { animation-delay: 0.1s; }
  .txt-2 .btn-letter:nth-child(4) { animation-delay: 0.15s; }
  .txt-2 .btn-letter:nth-child(5) { animation-delay: 0.2s; }
  .txt-2 .btn-letter:nth-child(6) { animation-delay: 0.25s; }
  .txt-2 .btn-letter:nth-child(7) { animation-delay: 0.3s; }
  .txt-2 .btn-letter:nth-child(8) { animation-delay: 0.35s; }
  .txt-2 .btn-letter:nth-child(9) { animation-delay: 0.4s; }
  .txt-2 .btn-letter:nth-child(10) { animation-delay: 0.45s; }
  .txt-2 .btn-letter:nth-child(11) { animation-delay: 0.5s; }
  .txt-2 .btn-letter:nth-child(12) { animation-delay: 0.55s; }
  .txt-2 .btn-letter:nth-child(13) { animation-delay: 0.6s; }
  .txt-2 .btn-letter:nth-child(14) { animation-delay: 0.65s; }

  .btn:active {
    border: solid 2px transparent;
    background-image: linear-gradient(var(--button-color), var(--button-color)), 
                      linear-gradient(135deg, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    filter: brightness(1.1);
  }
  
  .btn:active::before {
    box-shadow:
      0 -8px 12px -6px #fffa inset,
      0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 80%) inset,
      1px 1px 1px #fff4,
      2px 2px 2px #fff2,
      -1px -1px 1px #0002,
      -2px -2px 2px #0001;
  }
  
  .btn:active::after {
    opacity: 1;
    mask-image: linear-gradient(0deg, #fff, transparent);
    filter: brightness(200%);
  }
  
  .btn:active .btn-letter {
    text-shadow: 0 0 1px hsla(var(--highlight-color-hue), 100%, 90%, 90%);
    animation: none;
  }

  .btn:hover {
    border: solid 2px transparent;
    background-image: linear-gradient(var(--button-color), var(--button-color)), 
                      linear-gradient(135deg, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    filter: brightness(1.05);
  }

  .btn:hover::before {
    box-shadow:
      0 -8px 8px -6px #fffa inset,
      0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 30%) inset,
      1px 1px 1px #fff2,
      2px 2px 2px #fff1,
      -1px -1px 1px #0002,
      -2px -2px 2px #0001;
  }

  .btn:hover::after {
    opacity: 1;
    mask-image: linear-gradient(0deg, #fff, transparent);
  }

  .btn:hover .btn-svg {
    fill: #fff;
    filter: drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 100%, 70%))
      drop-shadow(0 -4px 6px #0009);
    animation: none;
  }
`;

export default Button;