import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';

interface FooterContactProps {
  email: string;
  phone: string;
  location: string;
  locationText?: string; // Texto descriptivo de la ubicación
}

const FooterContact: React.FC<FooterContactProps> = ({ 
  email, 
  phone, 
  location,
  locationText = 'El Alto - Av. 6 de Marzo entre calle 2 y 3'
}) => {
  const { theme } = useTheme();

  return (
    <StyledWrapper theme={theme}>
      <div className="card">
        <ul>
          {/* Email */}
          <li className="contact-item">
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="currentColor" />
              </svg>
            </a>
            <div className="contact-info">
              <span className="contact-label">Email:</span>
              <a href={`mailto:${email}`} className="contact-value">{email}</a>
            </div>
          </li>

          {/* WhatsApp */}
          <li className="contact-item">
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" fill="currentColor" />
              </svg>
            </a>
            <div className="contact-info">
              <span className="contact-label">WhatsApp:</span>
              <a href={`https://wa.me/${phone}`} className="contact-value">{phone}</a>
            </div>
          </li>

          {/* Ubicación */}
          <li className="contact-item">
            <a href={location} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="currentColor" />
              </svg>
            </a>
            <div className="contact-info">
              <span className="contact-label">Ubicación:</span>
              <span className="contact-value">{locationText}</span>
            </div>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ theme: string }>`
  .card {
    max-width: fit-content;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(15px);
    box-shadow: ${props => props.theme === 'dark'
      ? 'inset 0 0 20px rgba(255, 31, 167, 0.1), inset 0 0 5px rgba(0, 240, 255, 0.1), 0 5px 5px rgba(0, 0, 0, 0.164)'
      : 'inset 0 0 20px rgba(255, 31, 167, 0.05), inset 0 0 5px rgba(0, 240, 255, 0.05), 0 5px 15px rgba(0, 0, 0, 0.1)'
    };
    transition: 0.5s;
    background: transparent;
    padding: 0.5rem;
  }

  .card:hover {
    background: ${props => props.theme === 'dark'
      ? 'rgba(173, 173, 173, 0.02)'
      : 'rgba(255, 255, 255, 0.5)'
    };
  }

  .card ul {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    margin: 0;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .contact-item:hover {
    transform: translateX(5px);
  }

  .icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .svg {
    transition: all 0.3s;
    padding: 0.8rem;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    color: #00F0FF;
    fill: currentColor;
    box-shadow: ${props => props.theme === 'dark'
      ? 'inset 0 0 20px rgba(255, 31, 167, 0.2), inset 0 0 5px rgba(0, 240, 255, 0.2), 0 5px 5px rgba(0, 0, 0, 0.164)'
      : 'inset 0 0 20px rgba(255, 31, 167, 0.1), inset 0 0 5px rgba(0, 240, 255, 0.1), 0 5px 10px rgba(0, 0, 0, 0.1)'
    };
    background: ${props => props.theme === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(255, 255, 255, 0.8)'
    };
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .contact-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'};
  }

  .contact-value {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: ${props => props.theme === 'dark' ? '#e0e0e0' : '#333'};
    text-decoration: none;
    transition: color 0.2s;
    word-break: break-word;
  }

  .contact-value:hover {
    color: #00F0FF;
    text-decoration: underline;
  }

  /* Responsive: en móviles quizás reducir tamaño */
  @media (max-width: 640px) {
    .svg {
      padding: 0.6rem;
      height: 40px;
      width: 40px;
    }
    .contact-value {
      font-size: 0.75rem;
    }
    .contact-label {
      font-size: 0.6rem;
    }
  }
`;

export default FooterContact;