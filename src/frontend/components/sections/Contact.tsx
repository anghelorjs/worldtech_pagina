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
  const mapRef      = useRef<HTMLDivElement>(null);

  const isDark = theme === 'dark';

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

      gsap.fromTo(
        mapRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: mapRef.current, start: 'top 82%', once: true } }
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
        style={{ backgroundColor: isDark ? '#081022' : '#86C7F5' }}
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

          {/* ── Mapa ── */}
          <div ref={mapRef} className="mt-40">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={isDark ? '#FF1FA7' : '#C4006A'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: isDark ? 'rgba(160,200,230,0.6)' : 'rgba(0,0,0,0.45)' }}>
                Nuestra Oficina — La Paz, Bolivia
              </span>
            </div>

            <div style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: `1px solid ${isDark ? 'rgba(0,240,255,0.2)' : 'rgba(0,0,0,0.12)'}`,
              boxShadow: isDark ? '0 0 30px rgba(0,240,255,0.08)' : '0 4px 24px rgba(0,0,0,0.1)',
            }}>
              <iframe
                title="Oficina Technological World - La Paz Bolivia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.6921113591238!2d-68.16426039734885!3d-16.506689168030906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf004a2c9d19%3A0x398a83c451db3ee0!2sTechnological%20World!5e0!3m2!1ses-419!2sbo!4v1775762660466!5m2!1ses-419!2sbo"
                width="100%"
                height="340"
                style={{ border: 0, display: 'block', filter: isDark ? 'invert(0.9) hue-rotate(180deg) saturate(0.7) brightness(0.85)' : 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <a
                href="https://maps.app.goo.gl/HWmuf5E2ntze7nQD6"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: isDark ? '#00F0FF' : '#0085A1',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  opacity: 0.8,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
              >
                Ver en Google Maps ↗
              </a>
            </div>
          </div>

        </Container>
      </section>
    </>
  );
};

export default Contact;