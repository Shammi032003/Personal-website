'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { Reveal, TextReveal } from '@/components/shared/reveal';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="container relative z-10 pb-12 pt-36 sm:pt-44">
      <Reveal>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Reveal>

      <Reveal>
        <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-accent-soft">
          <span className="h-px w-8 bg-accent/50" />
          {eyebrow}
        </span>
      </Reveal>

      <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tighter text-white sm:text-6xl md:text-7xl">
        <TextReveal text={title} />
      </h1>

      {description && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}
