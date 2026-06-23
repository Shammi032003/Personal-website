'use client';

import { stats } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Counter } from '@/components/shared/counter';
import { Reveal } from '@/components/shared/reveal';

export function Stats() {
  return (
    <Section id="numbers">
      <div className="container">
        <SectionHeading
          eyebrow="Section 02 — By the Numbers"
          title="Impact, measured."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.05}
              className="group relative flex flex-col justify-between gap-6 bg-ink/40 p-8 transition-colors duration-500 hover:bg-white/[0.03] sm:p-10 lg:p-12"
            >
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display text-6xl font-semibold tracking-tighter text-gradient sm:text-7xl lg:text-8xl"
                />
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </p>
              </div>
              {/* Accent underline grows on hover */}
              <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-10 lg:inset-x-12" />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
