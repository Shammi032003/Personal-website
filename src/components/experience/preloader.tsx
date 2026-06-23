'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { siteConfig } from '@/lib/site-config';
import { useSmoothScroll } from '@/components/providers/smooth-scroll';

const NAME = siteConfig.name.toUpperCase();

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const { lenis } = useSmoothScroll();

  // Lock scrolling while the loader is on screen.
  useEffect(() => {
    if (done) {
      lenis?.start();
      document.body.style.overflow = '';
      return;
    }
    lenis?.stop();
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  }, [done, lenis]);

  // Eased fake-progress that accelerates as it nears 100.
  useEffect(() => {
    let frame: number;
    let value = 0;
    const tick = () => {
      const step = value < 80 ? 1.4 : 0.6;
      value = Math.min(100, value + step * (0.6 + Math.random() * 0.8));
      setProgress(Math.floor(value));
      if (value < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 650);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 1.05, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="absolute inset-0 bg-radial-fade opacity-60" />

          <div className="relative flex flex-col items-center">
            <div className="mb-8 overflow-hidden">
              <motion.div
                className="flex flex-wrap justify-center gap-x-[0.12em]"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.045 } },
                }}
              >
                {NAME.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
                    variants={{
                      hidden: { y: '110%', opacity: 0 },
                      visible: {
                        y: '0%',
                        opacity: 1,
                        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    {char === ' ' ? ' ' : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Progress line */}
            <div className="relative h-px w-56 overflow-hidden bg-white/10 sm:w-72">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent/40 via-accent to-accent-soft"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-5 flex w-56 items-center justify-between text-[0.7rem] uppercase tracking-[0.3em] text-muted sm:w-72">
              <span>Initializing</span>
              <span className="font-mono text-white/80">
                {String(progress).padStart(3, '0')}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
