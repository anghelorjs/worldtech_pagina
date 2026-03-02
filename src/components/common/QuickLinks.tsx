import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';

interface QuickLinksProps {
  links: { name: string; href: string }[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ links }) => {
  const { theme } = useTheme();

  return (
    <StyledWrapper theme={theme} totalLinks={links.length}>
      <div className="radio-container lg:text-center text-center">
        {links.map((link, index) => (
          <React.Fragment key={link.name}>
            <input 
              type="radio" 
              name="quick-links" 
              id={`link-${index}`} 
              defaultChecked={index === 0}
            />
            <label htmlFor={`link-${index}`}>
              <a href={link.href}>{link.name}</a>
            </label>
          </React.Fragment>
        ))}
        <div className="glider-container">
          <div className="glider" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ theme: string; totalLinks: number }>`
  .radio-container {
    --main-color: #FF1FA7;
    --main-color-opacity: rgba(255, 31, 167, ${props => props.theme === 'dark' ? '0.1' : '0.2'});
    --total-radio: 4;

    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 0.5rem;
  }
  
  .radio-container input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    opacity: 0;
  }
  
  .radio-container .glider-container {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: ${props => props.theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(27, 27, 27, 1) 50%, rgba(0, 0, 0, 0) 100%)'
      : 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(200, 200, 200, 1) 50%, rgba(0, 0, 0, 0) 100%)'
    };
    width: 1px;
  }
  
  .radio-container .glider-container .glider {
    position: relative;
    height: calc(100% / var(--total-radio));
    --total-radio: ${({ totalLinks }) => totalLinks};
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      var(--main-color) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
  }
  
  .radio-container .glider-container .glider::before {
    content: "";
    position: absolute;
    height: 60%;
    width: 300%;
    top: 50%;
    transform: translateY(-50%);
    background: var(--main-color);
    filter: blur(10px);
  }
  
  .radio-container .glider-container .glider::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      90deg,
      var(--main-color-opacity) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  
  .radio-container label {
    cursor: pointer;
    padding: 0.75rem 1rem;
    position: relative;
    color: ${props => props.theme === 'dark' ? 'grey' : '#666'};
    transition: all 0.3s ease-in-out;
  }

  .radio-container label a {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  .radio-container input:checked + label {
    color: var(--main-color);
  }

  /* REEMPLAZA el bloque problemático por: */
  ${({ totalLinks }) => {
    let styles = '';
    for (let i = 0; i < totalLinks; i++) {
      styles += `
        .radio-container input:nth-of-type(${i + 1}):checked ~ .glider-container .glider {
          transform: translateY(${i * 100}%);
        }
      `;
    }
    return styles;
  }}
`;

export default QuickLinks;