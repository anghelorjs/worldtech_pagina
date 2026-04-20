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
    // Colores para modo oscuro
    darkAccent: '#00F0FF',
    darkDim: 'rgba(0,240,255,0.15)',
    darkBorder: 'rgba(0,240,255,0.5)',
    // Colores para modo claro
    lightAccent: '#0085A1',
    lightDim: 'rgba(0,133,161,0.12)',
    lightBorder: 'rgba(0,133,161,0.4)',
  },
  {
    label: 'Servicio Técnico en PC',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    darkAccent: '#FF1FA7',
    darkDim: 'rgba(255,31,167,0.15)',
    darkBorder: 'rgba(255,31,167,0.5)',
    lightAccent: '#C4006A',
    lightDim: 'rgba(196,0,106,0.12)',
    lightBorder: 'rgba(196,0,106,0.4)',
  },
  {
    label: 'Recuperación de Datos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    darkAccent: '#7B61FF',
    darkDim: 'rgba(123,97,255,0.15)',
    darkBorder: 'rgba(123,97,255,0.5)',
    lightAccent: '#5A3DCC',
    lightDim: 'rgba(90,61,204,0.12)',
    lightBorder: 'rgba(90,61,204,0.4)',
  },
  {
    label: 'Informática Forense',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    darkAccent: '#00E5A0',
    darkDim: 'rgba(0,229,160,0.15)',
    darkBorder: 'rgba(0,229,160,0.5)',
    lightAccent: '#008A63',
    lightDim: 'rgba(0,138,99,0.12)',
    lightBorder: 'rgba(0,138,99,0.4)',
  },
];

interface BadgeProps {
  label: string;
  icon: React.ReactNode;
  darkAccent: string;
  darkDim: string;
  darkBorder: string;
  lightAccent: string;
  lightDim: string;
  lightBorder: string;
}

const SpecialtyBadge: React.FC<BadgeProps & { isDark: boolean }> = ({ 
  label, 
  icon, 
  darkAccent, 
  darkDim, 
  darkBorder,
  lightAccent,
  lightDim,
  lightBorder,
  isDark 
}) => {
  const accent = isDark ? darkAccent : lightAccent;
  const dim = isDark ? darkDim : lightDim;
  const border = isDark ? darkBorder : lightBorder;

  return (
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
};

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
              <SpecialtyBadge 
                key={s.label} 
                {...s} 
                isDark={isDark}
              />
            ))}
          </div>

          <div ref={profileRef} className="flex justify-center mb-16">
            <ProfileCircle />
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