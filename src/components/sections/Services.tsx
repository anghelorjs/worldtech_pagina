import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../hooks/useTheme';
import Container from '../common/Container';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/services';
import { CodeIcon, SearchIcon, LayoutIcon, UserIcon, ShoppingCartIcon, BookIcon } from '../../assets/icons';
import ServicesSEO from './HeroSEO';
import SchemaServices from './SchemaServices';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  CodeIcon: <CodeIcon />,
  SearchIcon: <SearchIcon />,
  LayoutIcon: <LayoutIcon />,
  UserIcon: <UserIcon />,
  ShoppingCartIcon: <ShoppingCartIcon />,
  BookIcon: <BookIcon />,
};

function reveal(
  trigger: Element | null,
  targets: gsap.TweenTarget,
  from: gsap.TweenVars,
  stagger = 0,
  start = 'top 82%'
) {
  if (!trigger) return;
  gsap.fromTo(
    targets,
    { opacity: 0, ...from },
    {
      opacity: 1, x: 0, y: 0, scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger,
      scrollTrigger: { trigger, start, once: true },
    }
  );
}

const Services: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef   = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef  = useRef<HTMLParagraphElement>(null);
  const advTitleRef  = useRef<HTMLDivElement>(null);
  const advCardsRef  = useRef<HTMLDivElement>(null);
  const webTitleRef  = useRef<HTMLDivElement>(null);
  const webCardsRef  = useRef<HTMLDivElement>(null);

  const avanzadas = services.filter(s => s.category === 'avanzadas');
  const web       = services.filter(s => s.category === 'web');

  useEffect(() => {
    const ctx = gsap.context(() => {

      // All animations use y only (no x) to avoid horizontal scrollbar
      reveal(heroTitleRef.current, [heroTitleRef.current!, heroDescRef.current!], { y: 40 }, 0.15);

      if (advTitleRef.current) {
        reveal(advTitleRef.current, advTitleRef.current.querySelectorAll('h3, p'), { y: 35 }, 0.12, 'top 85%');
      }

      if (advCardsRef.current) {
        advCardsRef.current.querySelectorAll('[data-service-card]').forEach((card) => {
          reveal(card, card, { y: 50, scale: 0.97 }, 0, 'top 88%');
        });
      }

      if (webTitleRef.current) {
        reveal(webTitleRef.current, webTitleRef.current.querySelectorAll('h3, p'), { y: 35 }, 0.12, 'top 85%');
      }

      if (webCardsRef.current) {
        webCardsRef.current.querySelectorAll('[data-service-card]').forEach((card) => {
          reveal(card, card, { y: 50, scale: 0.97 }, 0, 'top 88%');
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <ServicesSEO />
      <SchemaServices />
      <section
        ref={sectionRef}
        id="servicios"
        className="py-40 transition-colors duration-300 overflow-hidden"
        style={{ backgroundColor: theme === 'dark' ? '#000000' : '#DAF5FF' }}
      >
        <Container>
          <h2 ref={heroTitleRef} className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-6">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Nuestros</span>{' '}
            <span style={{ background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Servicios
            </span>
          </h2>

          <p ref={heroDescRef} className={`text-lg text-center max-w-3xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Ofrecemos una amplia gama de servicios tecnológicos y de desarrollo web para satisfacer todas las necesidades digitales de tu empresa.
          </p>

          {/* Avanzadas */}
          <div className="mb-20">
            <div ref={advTitleRef}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                <span style={{ background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Soluciones Tecnológicas Avanzadas
                </span>
              </h3>
              <p className={`text-lg text-center max-w-3xl mx-auto mb-16 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Servicios especializados para empresas que requieren soluciones tecnológicas de alta complejidad.
              </p>
            </div>
            <div ref={advCardsRef} className="space-y-12">
              {avanzadas.map((service, idx) => (
                <div key={service.id} data-service-card="">
                  <ServiceCard title={service.title} description={service.description} image={service.image} icon={iconMap[service.icon]} isReversed={idx % 2 === 1} />
                </div>
              ))}
            </div>
          </div>

          {/* Web */}
          <div>
            <div ref={webTitleRef}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                <span style={{ background: 'linear-gradient(135deg, #FF1FA7, #00F0FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Desarrollo Web Profesional
                </span>
              </h3>
              <p className={`text-lg text-center max-w-3xl mx-auto mb-16 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Creamos experiencias web excepcionales que impulsan tu presencia digital y conectan con tu audiencia.
              </p>
            </div>
            <div ref={webCardsRef} className="space-y-12">
              {web.map((service, idx) => (
                <div key={service.id} data-service-card="">
                  <ServiceCard title={service.title} description={service.description} image={service.image} icon={iconMap[service.icon]} isReversed={idx % 2 === 1} />
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>
    </>
  );
};

export default Services;