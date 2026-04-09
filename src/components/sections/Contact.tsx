import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../hooks/useTheme';
import Container from '../common/Container';
import Laptop from '../common/Laptop';
import ContactIcons from '../common/ContactIcons';
import ContactForm from '../common/ContactForm';
import ContactSEO from './HeroSEO';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef  = useRef<HTMLElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const leftColRef  = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: titleRef.current, start: 'top 88%', once: true } }
      );

      gsap.fromTo(
        leftColRef.current!.children,
        { opacity: 0, y: 45 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.14, scrollTrigger: { trigger: leftColRef.current, start: 'top 82%', once: true } }
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: rightColRef.current, start: 'top 82%', once: true } }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <ContactSEO />
      <section
        ref={sectionRef}
        id="contacto"
        className="py-40 transition-colors duration-300 overflow-hidden"
        style={{ backgroundColor: theme === 'dark' ? '#081022' : '#86C7F5' }}
      >
        <Container>
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-16">
            <span style={{ background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Contáctanos
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start -mb-20">
            <div ref={leftColRef} className="space-y-8">
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  ¿Cómo podemos ayudarte?
                </h3>
                <p className={`text-lg text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  ¿Tienes un proyecto en mente? Nos encantaría escuchar tu idea y ayudarte a convertirla en una solución tecnológica exitosa.
                </p>
              </div>
              <div className="flex justify-center h-[140px] lg:h-[350px] pt-10">
                <Laptop />
              </div>
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-center pt-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Información de Contacto
                </h3>
              </div>
              <div className="flex justify-center pt-0 lg:pt-5">
                <ContactIcons email="technological.world.dev@gmail.com" phone="77575921" location="https://maps.app.goo.gl/HWmuf5E2ntze7nQD6" />
              </div>
            </div>

            <div ref={rightColRef} className="w-full flex justify-center lg:justify-end overflow-hidden">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;