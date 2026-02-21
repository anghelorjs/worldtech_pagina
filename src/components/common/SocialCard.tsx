import React from 'react';
import styled from 'styled-components';

const SocialCard: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="social-icons">
          <p>@Facebook</p>
          <a href="https://www.facebook.com/profile.php?id=61576156485234" target="_blank" rel="noopener noreferrer">Follow</a>
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#1877F2" />
          </svg>
        </div>
        <div className="social-icons">
          <p>@GitHub</p>
          <a href="https://github.com/TechnologicalWorld" target="_blank" rel="noopener noreferrer">Follow</a>
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="white" />
          </svg>
        </div>
        <div className="social-icons">
          <p>@YouTube</p>
          <a href="https://www.youtube.com/@TechnologicalWorld-b1z" target="_blank" rel="noopener noreferrer">Follow</a>
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000" />
          </svg>
        </div>
        <div className="social-icons">
          <p>@Discord</p>
          <a href="https://discord.gg/DsbjuVyArS" target="_blank" rel="noopener noreferrer">Follow</a>
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515c-.21.38-.45.89-.61 1.3a18.25 18.25 0 0 0-5.443 0 14.115 14.115 0 0 0-.62-1.3A19.65 19.65 0 0 0 3.68 4.37c-2.914 4.34-3.69 8.57-3.26 12.68a20.09 20.09 0 0 0 6.03 3.02c.48-.66 1.01-1.39 1.44-2.14a13.6 13.6 0 0 1-2.31-1.11c.19-.14.38-.29.56-.44a15.31 15.31 0 0 0 13.31 0c.19.15.38.3.56.44a13.6 13.6 0 0 1-2.31 1.11c.43.75.96 1.48 1.44 2.14a20.09 20.09 0 0 0 6.03-3.02c.5-4.58-.87-8.77-3.26-12.68zM8.02 15.33c-1.18 0-2.14-1.08-2.14-2.4 0-1.32.96-2.4 2.14-2.4s2.15 1.08 2.15 2.4c0 1.32-.96 2.4-2.15 2.4zm7.97 0c-1.18 0-2.14-1.08-2.14-2.4 0-1.32.96-2.4 2.14-2.4s2.15 1.08 2.15 2.4c0 1.32-.96 2.4-2.15 2.4z" fill="#5865F2" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    width: 250px;
    height: 50px;
    background-color: whitesmoke;
    border-radius: 115px;
    padding-inline: 15px;
    position: relative;
    justify-content: space-around;
  }

  .social-icons {
    cursor: pointer;
    display: flex;
    transition: all 0.5s;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
    font-weight: bold;
    font-size: small;
  }

  .social-icons > p {
    --var: -0%;
    position: absolute;
    top: var(--var);
    transition: all 0.7s;
    background-color: dodgerblue;
    border-radius: 7px;
    opacity: 0;
    padding-inline: 7px;
    padding-block: 3px;
    width: max-content;
  }
  .social-icons > p::after {
    content: "";
    position: absolute;
    border-top: 10px solid dodgerblue;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    top: 100%;
    left: 50%;
    transform: translate(-50%);
  }
  .social-icons > a {
    --var: -0%;
    position: absolute;
    bottom: var(--var);
    width: max-content;
    transition: all 0.7s;
    opacity: 0;
    padding-inline: 7px;
    padding-block: 3px;
    background-color: crimson;
    border-radius: 7px;
    color: white;
    text-decoration: none;
  }
  .social-icons > a::after {
    content: "";
    position: absolute;
    border-bottom: 10px solid crimson;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%);
  }

  .social-icons:hover > a,
  .social-icons:hover > p {
    --var: -65%;
    opacity: 1;
  }

  .social-icons:hover {
    z-index: 15;
  }

  .card:hover > .social-icons:not(:hover) {
    filter: blur(3px);
    transform: scale(0.8);
  }

  .card svg {
    height: 30px;
  }
`;

export default SocialCard;