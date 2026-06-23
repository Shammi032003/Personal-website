'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { builds, type BuildCard } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';

function Card({
  card,
  index,
  total,
  progress,
}: {
  card: BuildCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each card scales down slightly as the next one stacks over it.
  const targetScale = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-4">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 28}px)` }}
        className="glass relative flex h-[78vh] w-full max-w-5xl flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-12 md:p-16"
      >
        {/* Background image (cover whole tile) */}
        {card.image && (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${card.image.startsWith('/') ? card.image : `/${card.image}`})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        {/* Dark overlay to keep text readable */}
        <div className="pointer-events-none absolute inset-0 bg-black/60 z-10" />

        {/* Content above overlay */}
        <div className="relative z-20 flex flex-col justify-between h-full w-full">

          <div className="flex items-start justify-between">
            <span className="font-mono text-sm text-muted">{card.index}</span>
            <span className="rounded-full border border-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-accent-soft">
              {card.org}
            </span>
          </div>

          <div>
          <h3 className="font-display text-4xl font-semibold tracking-tighter text-white sm:text-6xl md:text-7xl">
            {card.domain}
          </h3>
          <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-6">
            {card.items.map((item) => (
              <li
                key={item}
                className="group flex items-center justify-between gap-2 border-t border-white/10 pt-4 text-base text-white/85 transition-colors hover:text-white sm:text-lg"
              >
                {item}
                <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft" />
              </li>
            ))}
          </ul>
        </div>
        </div>
      </motion.div>
    </div>
  );
}

export function WhatIBuild() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <Section id="build" flush className="py-12 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Section 03 — What I Build"
          title="Systems shipped across enterprise, defense, and research."
        />
      </div>

      <div ref={container} className="relative mt-10">
        {builds.map((card, i) => (
          <Card
            key={card.index}
            card={card}
            index={i}
            total={builds.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </Section>
  );
}
