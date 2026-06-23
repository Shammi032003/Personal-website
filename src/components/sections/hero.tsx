'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, FileText } from 'lucide-react';

import { asset } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/shared/magnetic';
import { Typewriter } from '@/components/shared/typewriter';
import { useSmoothScroll } from '@/components/providers/smooth-scroll';

const NAME = siteConfig.name.toUpperCase();

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax: content drifts up and fades as the visitor scrolls past.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.7], [0, 6]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, filter: useTransform(blur, (b) => `blur(${b}px)`) }}
        className="container relative z-10 flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="mb-8 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-muted"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
          Engineering & Research
        </motion.span>

        {/* Name — large display type with masked per-letter reveal */}
        <h1 className="font-display text-[clamp(2.75rem,11vw,9.5rem)] font-semibold leading-[0.92] tracking-tighter">
          <span className="sr-only">{siteConfig.name}</span>
          <span aria-hidden className="flex flex-wrap justify-center">
            {NAME.split(' ').map((word, wi) => (
              <span key={wi} className="mr-[0.18em] flex overflow-hidden">
                {word.split('').map((char, ci) => (
                  <span key={ci} className="overflow-hidden">
                    <motion.span
                      className="inline-block text-gradient"
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{
                        delay: 0.5 + (wi * 6 + ci) * 0.04,
                        duration: 0.9,
                        ease,
                      }}
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease }}
          className="mt-8 text-lg font-medium tracking-tight text-white/90 sm:text-2xl"
        >
          Software and AI Engineer. Researcher. Inventor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8, ease }}
          className="mt-4 text-base text-muted sm:text-lg"
        >
          Building intelligent systems that{' '}
          <Typewriter
            words={['learn.', 'reason.', 'adapt.']}
            className="font-medium"
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.8, ease }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollTo('#journey', -80)}
            >
              Explore Journey
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button asChild variant="outline" size="lg">
              <a
                href={asset(siteConfig.resume)}
                target="_blank"
                rel="noreferrer"
              >
                <FileText />
                Download Resume
              </a>
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('#journey', -80)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
        aria-label="Scroll to journey"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
