import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../common/Container';
import Button from '../common/Button';
import { useTheme } from '../../hooks/useTheme';
import HeroSEO from './HeroSEO';
import SchemaHome from './SchemaHome';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef  = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef     = useRef<HTMLParagraphElement>(null);
  const btnRef      = useRef<HTMLDivElement>(null);
  const imgRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });

      tl.fromTo(
        headlineRef.current!.children,
        { opacity: 0, y: 55 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.2 }
      )
      .fromTo(paraRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo(btnRef.current, { opacity: 0, scale: 0.75 }, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.4')
      .fromTo(imgRef.current, { opacity: 0, x: 90 }, { opacity: 1, x: 0, duration: 1.1, ease: 'power2.out' }, '-=1.1')
      .to(imgRef.current, { y: -16, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <HeroSEO />
      <SchemaHome />
      <section
        ref={sectionRef}
        id="inicio"
        className={`min-h-screen flex items-center overflow-hidden ${
          theme === 'dark' ? 'bg-black' : 'bg-[#DAF5FF]'
        }`}
      >
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 mt-20">
            <div className="flex-1 text-center md:text-center">
              <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-5xl font-bold">
                <span
                  className="block leading-[1.5] font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Soluciones Tecnológicas
                </span>
                <span className={`block leading-[1.5] ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Para Impulsar Tu Negocio
                </span>
              </h1>
              <p ref={paraRef} className={`mt-4 text-lg max-w-2xl mx-auto md:mx-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Transformamos tus ideas en soluciones tecnológicas innovadoras, optimizando procesos y maximizando tu productividad.
              </p>
              <div ref={btnRef} className="mt-14 flex justify-center md:justify-center">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full opacity-30 blur-xl" style={{ background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)' }} />
                  <Button href="#contacto" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <div ref={imgRef} className="relative">
                <img
                  src="/src/frontend/assets/images/hero-image.webp"
                  alt="Tecnología e innovación - Desarrollo de software por Technological World"
                  className="w-full max-w-md md:max-w-lg lg:min-w-xl relative z-10"
                  style={{
                    filter: theme === 'dark'
                      ? 'drop-shadow(0 0 25px rgba(255,31,167,0.3)) drop-shadow(0 0 25px rgba(0,240,255,0.3))'
                      : 'drop-shadow(0 0 25px rgba(255,31,167,0.2)) drop-shadow(0 0 25px rgba(0,240,255,0.2))',
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;