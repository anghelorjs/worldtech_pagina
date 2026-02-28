import React from 'react';
import styled from 'styled-components';

interface ContactIconsProps {
  email: string;
  phone: string;
  location: string;
}

const ContactIcons: React.FC<ContactIconsProps> = ({ email, phone, location }) => {
  return (
    <StyledWrapper>
      <ul className="example-2">
        <li className="icon-content">
          <a href={`mailto:${email}`} aria-label="Email" data-social="email">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">Email</div>
        </li>
        <li className="icon-content">
          <a href={`https://wa.me/${phone}`} aria-label="WhatsApp" data-social="whatsapp">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.099-.832-.307-1.585-.98a5.973 5.973 0 0 1-1.098-1.367c-.114-.197-.012-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.676-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">WhatsApp</div>
        </li>
        <li className="icon-content">
          <a href={location} target="_blank" rel="noopener noreferrer" aria-label="Location" data-social="location">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">Ubicación</div>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0;
  }
  
  .example-2 .icon-content {
    margin: 0;
    position: relative;
  }
  
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
    white-space: nowrap;
  }
  
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }
  
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  
  .example-2 .icon-content a:hover {
    color: white;
  }
  
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 0.3s ease-in-out;
  }
  
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="email"] .filled,
  .example-2 .icon-content a[data-social="email"] ~ .tooltip {
    background-color: #ea4335;
  }

  .example-2 .icon-content a[data-social="whatsapp"] .filled,
  .example-2 .icon-content a[data-social="whatsapp"] ~ .tooltip {
    background-color: #25d366;
  }
  
  .example-2 .icon-content a[data-social="location"] .filled,
  .example-2 .icon-content a[data-social="location"] ~ .tooltip {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

export default ContactIcons;