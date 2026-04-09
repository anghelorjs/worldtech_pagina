import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../hooks/useTheme';
import Container from '../common/Container';
import ProfileCircle from '../common/ProfileCircle';
import FeatureCard from '../common/FeatureCard';
import StatsCarousel from '../common/StatItem';
import SocialCard from '../common/SocialCard';
import AboutSEO from './HeroSEO';

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    label: 'Desarrollo de Software',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: '#00F0FF',
    dim: 'rgba(0,240,255,0.10)',
    border: 'rgba(0,240,255,0.35)',
  },
  {
    label: 'Servicio Técnico en PC',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    accent: '#FF1FA7',
    dim: 'rgba(255,31,167,0.10)',
    border: 'rgba(255,31,167,0.35)',
  },
  {
    label: 'Recuperación de Datos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    accent: '#7B61FF',
    dim: 'rgba(123,97,255,0.10)',
    border: 'rgba(123,97,255,0.35)',
  },
  {
    label: 'Informática Forense',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    accent: '#00E5A0',
    dim: 'rgba(0,229,160,0.10)',
    border: 'rgba(0,229,160,0.35)',
  },
];

interface BadgeProps {
  label: string;
  icon: React.ReactNode;
  accent: string;
  dim: string;
  border: string;
}

const SpecialtyBadge: React.FC<BadgeProps> = ({ label, icon, accent, dim, border }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 20px',
      borderRadius: '50px',
      background: dim,
      border: `1px solid ${border}`,
      color: accent,
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '0.875rem',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 16px 2px ${border}`;
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
    }}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const About: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef     = useRef<HTMLElement>(null);
  const titleRef       = useRef<HTMLHeadingElement>(null);
  const paraRef        = useRef<HTMLParagraphElement>(null);
  const badgesRef      = useRef<HTMLDivElement>(null);
  const profileRef     = useRef<HTMLDivElement>(null);
  const mapRef         = useRef<HTMLDivElement>(null);
  const cardsRef       = useRef<HTMLDivElement>(null);
  const statsRef       = useRef<HTMLDivElement>(null);
  const socialRef      = useRef<HTMLDivElement>(null);

  const features = [
    { title: 'Innovación Constante', description: 'Nos mantenemos a la vanguardia de las últimas tecnologías para ofrecer soluciones cutting-edge.' },
    { title: 'Calidad Garantizada', description: 'Cada proyecto pasa por rigurosos controles de calidad para asegurar la máxima satisfacción de nuestros clientes.' },
    { title: 'Compromiso Total', description: 'Trabajamos en estrecha colaboración con nuestros clientes hasta lograr sus objetivos y entregarle un producto de calidad.' },
  ];

  const stats = [
    { value: '10+',  label: 'Proyectos Completados' },
    { value: '99%',  label: 'Satisfacción del Cliente' },
    { value: '5+',   label: 'Años de Experiencia' },
    { value: '24/7', label: 'Soporte Técnico' },
    { value: '0',    label: 'Visitas' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = (trigger: Element | null, start = 'top 85%') => ({
        scrollTrigger: { trigger, start, once: true },
      });

      gsap.fromTo(
        [titleRef.current, paraRef.current],
        { opacity: 0, y: 45 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.15, ...st(titleRef.current) }
      );

      if (badgesRef.current) {
        gsap.fromTo(
          badgesRef.current.children,
          { opacity: 0, y: 25, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1, ...st(badgesRef.current, 'top 88%') }
        );
      }

      gsap.fromTo(
        profileRef.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.5)', ...st(profileRef.current, 'top 80%') }
      );

      gsap.fromTo(
        mapRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', ...st(mapRef.current, 'top 82%') }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 55, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out', stagger: 0.14, ...st(cardsRef.current, 'top 82%') }
        );
      }

      gsap.fromTo(statsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', ...st(statsRef.current, 'top 88%') });
      gsap.fromTo(socialRef.current, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', ...st(socialRef.current, 'top 90%') });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const isDark = theme === 'dark';

  return (
    <>
      <AboutSEO />
      <section
        ref={sectionRef}
        id="sobre-nosotros"
        className="pt-40 pb-20 transition-colors duration-300 overflow-hidden"
        style={{ backgroundColor: isDark ? '#081022' : '#86C7F5' }}
      >
        <Container>

          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-6 -mt-10">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Sobre </span>
            <span style={{ background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Technological World
            </span>
          </h2>

          <p ref={paraRef} className={`text-lg text-center max-w-3xl mx-auto mb-10 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Somos una empresa de desarrollo de software y servicio técnico en computadoras con sede en{' '}
            <strong style={{ color: isDark ? '#fff' : '#111' }}>La Paz, Bolivia</strong>. También ofrecemos{' '} recuperación de información e{' '} informática forense, brindando soluciones tecnológicas integrales a empresas y personas.
          </p>

          <div
            ref={badgesRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '64px',
            }}
          >
            {specialties.map((s) => (
              <SpecialtyBadge key={s.label} {...s} />
            ))}
          </div>

          <div ref={profileRef} className="flex justify-center mb-16">
            <ProfileCircle />
          </div>

          <div ref={mapRef} className="mb-20">
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={isDark ? '#FF1FA7' : '#C4006A'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: isDark ? 'rgba(160,200,230,0.6)' : 'rgba(0,0,0,0.45)' }}>
                Nuestra Oficina — La Paz, Bolivia
              </span>
            </div>

            <div
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                border: `1px solid ${isDark ? 'rgba(0,240,255,0.2)' : 'rgba(0,0,0,0.12)'}`,
                boxShadow: isDark ? '0 0 30px rgba(0,240,255,0.08)' : '0 4px 24px rgba(0,0,0,0.1)',
                position: 'relative',
              }}
            >
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

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} index={index} />
            ))}
          </div>

          <div ref={statsRef} className="mb-20">
            <StatsCarousel stats={stats} />
          </div>

          <div ref={socialRef} className="flex justify-center text-center">
            <SocialCard />
          </div>

        </Container>
      </section>
    </>
  );
};

export default About;