'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SmoothScrollContextValue {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, offset?: number) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Honour reduced-motion: skip the inertial scroll entirely.
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });

    lenisRef.current = instance;
    setLenis(instance);

    instance.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker so scroll + scroll-triggered timelines
    // share a single render loop (no double RAF, no jank).
    const raf = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  const scrollTo: SmoothScrollContextValue['scrollTo'] = (target, offset = 0) => {
    const l = lenisRef.current;
    if (l) {
      l.scrollTo(target, { offset, duration: 1.4 });
      return;
    }
    // Fallback for reduced-motion / SSR-less environments.
    if (typeof target === 'string') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollTo }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </SmoothScrollContext.Provider>
  );
}
