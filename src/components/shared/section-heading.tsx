'use client';

import { cn } from '@/lib/utils';
import { Reveal, TextReveal } from '@/components/shared/reveal';

interface SectionHeadingProps {
  /** Small monospace eyebrow label, e.g. "Section 01". */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 mb-12',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-accent-soft">
            <span className="h-px w-8 bg-accent/50" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl">
        <TextReveal text={title} />
      </h2>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'max-w-prose text-base leading-relaxed text-muted sm:text-lg',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
