import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EntranceOptions {
  targets: string;
  preset?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeIn' | 'scaleUp';
  stagger?: number;
  delay?: number;
  duration?: number;
  start?: string;
}

export function useGsapEntrance<T extends HTMLElement>(options: EntranceOptions) {
  const containerRef = useRef<T>(null);

  const {
    targets,
    preset = 'fadeUp',
    stagger = 0.12,
    delay = 0,
    duration = 0.75,
    start = 'top 85%',
  } = options;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const from: gsap.TweenVars = { opacity: 0, duration, ease: 'power3.out', delay };

      switch (preset) {
        case 'fadeUp':    Object.assign(from, { y: 50 }); break;
        case 'fadeLeft':  Object.assign(from, { x: -60 }); break;
        case 'fadeRight': Object.assign(from, { x: 60 }); break;
        case 'scaleUp':   Object.assign(from, { scale: 0.85, y: 30 }); break;
        case 'fadeIn':    break;
      }

      gsap.fromTo(
        targets,
        { ...from, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          ease: 'power3.out',
          stagger,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}