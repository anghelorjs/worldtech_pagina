import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo-light.png'; // ajusta la ruta a tu logo

interface LaptopProps {
  logoSrc?: string;
}

const Laptop: React.FC<LaptopProps> = ({ logoSrc = logo }) => {
  return (
    <StyledWrapper>
      <div className="macbook">
        <div className="inner">
          <div className="screen">
            <div className="face-one">
              <div className="camera" />
              <div className="display">
                {/* Logo en la pantalla */}
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="screen-logo"
                />
                <div className="shade" />
              </div>
              <span className="text-white font-bold drop-shadow-lg">WORLD TECH</span>
            </div>
            <title>Layer 1</title>
          </div>
          <div className="macbody">
            <div className="face-one">
              <div className="touchpad" />
              <div className="keyboard">
                {[...Array(72)].map((_, i) => (
                  <div key={i} className={`key ${i === 41 ? 'space' : ''} ${i >= 58 && i <= 73 ? 'f' : ''}`} />
                ))}
              </div>
            </div>
            <div className="pad one" />
            <div className="pad two" />
            <div className="pad three" />
            <div className="pad four" />
          </div>
        </div>
        <div className="shadow" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Tamaño base (móvil) */
  --scale: 1;

  /* 2.5x en desktop */
  @media (min-width: 1024px) {
    --scale: 2.5;
  }

  .macbook {
    width: calc(150px * var(--scale));
    height: calc(96px * var(--scale));
    position: relative;
    margin: 0 auto;
    perspective: calc(500px * var(--scale));
  }

  .shadow {
    position: absolute;
    width: calc(60px * var(--scale));
    height: 0px;
    left: calc(40px * var(--scale));
    top: calc(160px * var(--scale));
    transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
    box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    animation: shadow infinite 7s ease;
  }

  .inner {
    z-index: 20;
    position: absolute;
    width: calc(150px * var(--scale));
    height: calc(96px * var(--scale));
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
    animation: rotate infinite 7s ease;
  }

  .screen {
    width: calc(150px * var(--scale));
    height: calc(96px * var(--scale));
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: calc(7px * var(--scale));
    background: #ddd;
    transform-style: preserve-3d;
    transform-origin: 50% calc(93px * var(--scale));
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    animation: lid-screen infinite 7s ease;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.34) 0%,rgba(0,0,0,0) 100%);
    background-position: left bottom;
    background-size: 300px 300px;
    box-shadow: inset 0 3px 7px rgba(255,255,255,0.5);
  }

  .screen .face-one {
    width: calc(150px * var(--scale));
    height: calc(96px * var(--scale));
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: calc(7px * var(--scale));
    background: #d3d3d3;
    transform: translateZ(calc(2px * var(--scale)));
    background-image: linear-gradient(45deg,rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .screen .face-one .camera {
    width: calc(3px * var(--scale));
    height: calc(3px * var(--scale));
    border-radius: 100%;
    background: #000;
    position: absolute;
    left: 50%;
    top: calc(4px * var(--scale));
    margin-left: calc(-1.5px * var(--scale));
  }

  .screen .face-one .display {
    width: calc(130px * var(--scale));
    height: calc(74px * var(--scale));
    margin: calc(10px * var(--scale));
    background-color: #000;
    background-size: 100% 100%;
    border-radius: calc(1px * var(--scale));
    position: relative;
    box-shadow: inset 0 0 2px rgba(0,0,0,1);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Logo dentro de la pantalla */
  .screen-logo {
    position: absolute;
    width: 70%;
    height: 70%;
    object-fit: contain;
    z-index: 1;
    filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.6));
  }

  .screen .face-one .display .shade {
    position: absolute;
    left: 0;
    top: 0;
    width: calc(130px * var(--scale));
    height: calc(74px * var(--scale));
    background: linear-gradient(-135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.1) 47%,rgba(255,255,255,0) 48%);
    animation: screen-shade infinite 7s ease;
    background-size: 300px 200px;
    background-position: 0px 0px;
    z-index: 2;
  }

  .screen .face-one span {
    position: absolute;
    top: calc(85px * var(--scale));
    left: calc(57px * var(--scale));
    font-size: calc(6px * var(--scale));
    color: #666;
  }

  .macbody {
    width: calc(150px * var(--scale));
    height: calc(96px * var(--scale));
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: calc(7px * var(--scale));
    background: #cbcbcb;
    transform-style: preserve-3d;
    transform-origin: 50% bottom;
    transform: rotateX(-90deg);
    animation: lid-macbody infinite 7s ease;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .macbody .face-one {
    width: calc(150px * var(--scale));
    height: calc(96px * var(--scale));
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: calc(7px * var(--scale));
    transform-style: preserve-3d;
    background: #dfdfdf;
    animation: lid-keyboard-area infinite 7s ease;
    transform: translateZ(calc(-2px * var(--scale)));
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .macbody .touchpad {
    width: calc(40px * var(--scale));
    height: calc(31px * var(--scale));
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: calc(4px * var(--scale));
    margin: calc(-44px * var(--scale)) 0 0 calc(-18px * var(--scale));
    background: #cdcdcd;
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
    box-shadow: inset 0 0 3px #888;
  }

  .macbody .keyboard {
    width: calc(130px * var(--scale));
    height: calc(45px * var(--scale));
    position: absolute;
    left: calc(7px * var(--scale));
    top: calc(41px * var(--scale));
    border-radius: calc(4px * var(--scale));
    transform-style: preserve-3d;
    background: #cdcdcd;
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
    box-shadow: inset 0 0 3px #777;
    padding: 0 0 0 calc(2px * var(--scale));
    display: flex;
    flex-wrap: wrap;
  }

  .keyboard .key {
    width: calc(6px * var(--scale));
    height: calc(6px * var(--scale));
    background: #444;
    margin: calc(1px * var(--scale));
    transform: translateZ(calc(-2px * var(--scale)));
    border-radius: calc(2px * var(--scale));
    box-shadow: 0 calc(-2px * var(--scale)) 0 #222;
    animation: keys infinite 7s ease;
  }

  .key.space {
    width: calc(45px * var(--scale));
  }

  .key.f {
    height: calc(3px * var(--scale));
  }

  .macbody .pad {
    width: calc(5px * var(--scale));
    height: calc(5px * var(--scale));
    background: #333;
    border-radius: 100%;
    position: absolute;
  }

  .pad.one { left: calc(20px * var(--scale)); top: calc(20px * var(--scale)); }
  .pad.two { right: calc(20px * var(--scale)); top: calc(20px * var(--scale)); }
  .pad.three { right: calc(20px * var(--scale)); bottom: calc(20px * var(--scale)); }
  .pad.four { left: calc(20px * var(--scale)); bottom: calc(20px * var(--scale)); }

  @keyframes rotate {
    0% { transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg); }
    5% { transform: rotateX(-20deg) rotateY(-20deg) rotateZ(0deg); }
    20% { transform: rotateX(30deg) rotateY(200deg) rotateZ(0deg); }
    25% { transform: rotateX(-60deg) rotateY(150deg) rotateZ(0deg); }
    60% { transform: rotateX(-20deg) rotateY(130deg) rotateZ(0deg); }
    65% { transform: rotateX(-20deg) rotateY(120deg) rotateZ(0deg); }
    80% { transform: rotateX(-20deg) rotateY(375deg) rotateZ(0deg); }
    85% { transform: rotateX(-20deg) rotateY(357deg) rotateZ(0deg); }
    87% { transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg); }
    100% { transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg); }
  }

  @keyframes lid-screen {
    0% { transform: rotateX(0deg); background-position: left bottom; }
    5% { transform: rotateX(50deg); background-position: left bottom; }
    20% { transform: rotateX(-90deg); background-position: -150px top; }
    25% { transform: rotateX(15deg); background-position: left bottom; }
    30% { transform: rotateX(-5deg); background-position: right top; }
    38% { transform: rotateX(5deg); background-position: right top; }
    48% { transform: rotateX(0deg); background-position: right top; }
    90% { transform: rotateX(0deg); background-position: right top; }
    100% { transform: rotateX(0deg); background-position: right center; }
  }

  @keyframes lid-macbody {
    0% { transform: rotateX(-90deg); }
    50% { transform: rotateX(-90deg); }
    100% { transform: rotateX(-90deg); }
  }

  @keyframes lid-keyboard-area {
    0% { background-color: #dfdfdf; }
    50% { background-color: #bbb; }
    100% { background-color: #dfdfdf; }
  }

  @keyframes screen-shade {
    0% { background-position: -20px 0px; }
    5% { background-position: -40px 0px; }
    20% { background-position: 200px 0; }
    50% { background-position: -200px 0; }
    80% { background-position: 0px 0px; }
    85% { background-position: -30px 0; }
    90% { background-position: -20px 0; }
    100% { background-position: -20px 0px; }
  }

  @keyframes keys {
    0% { box-shadow: 0 -2px 0 #222; }
    5% { box-shadow: 1 -1px 0 #222; }
    20% { box-shadow: -1px 1px 0 #222; }
    25% { box-shadow: -1px 1px 0 #222; }
    60% { box-shadow: -1px 1px 0 #222; }
    80% { box-shadow: 0 -2px 0 #222; }
    85% { box-shadow: 0 -2px 0 #222; }
    87% { box-shadow: 0 -2px 0 #222; }
    100% { box-shadow: 0 -2px 0 #222; }
  }

  @keyframes shadow {
    0% { transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg); box-shadow: 0 0 60px 40px rgba(0,0,0,0.3); }
    5% { transform: rotateX(80deg) rotateY(10deg) rotateZ(0deg); box-shadow: 0 0 60px 40px rgba(0,0,0,0.3); }
    20% { transform: rotateX(30deg) rotateY(-20deg) rotateZ(-20deg); box-shadow: 0 0 50px 30px rgba(0,0,0,0.3); }
    25% { transform: rotateX(80deg) rotateY(-20deg) rotateZ(50deg); box-shadow: 0 0 35px 15px rgba(0,0,0,0.1); }
    60% { transform: rotateX(80deg) rotateY(0deg) rotateZ(-50deg) translateX(30px); box-shadow: 0 0 60px 40px rgba(0,0,0,0.3); }
    100% { box-shadow: 0 0 60px 40px rgba(0,0,0,0.3); }
  }
`;

export default Laptop;