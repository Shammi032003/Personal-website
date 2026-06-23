'use client';

import { Lightbulb } from 'lucide-react';

import type { Innovation } from '@/lib/data';
import { cn } from '@/lib/utils';
import { TiltCard } from '@/components/shared/tilt-card';

const statusStyles: Record<Innovation['status'], string> = {
  Granted: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
  Published: 'text-accent-soft border-accent/30 bg-accent/10',
  Filed: 'text-amber-200 border-amber-300/30 bg-amber-300/10',
};

export function InnovationCard({ item }: { item: Innovation }) {
  return (
    <div className="perspective-1000 h-full" data-cursor="hover">
      <TiltCard className="glass h-full p-7 sm:p-8" intensity={9}>
        <div className="preserve-3d flex h-full flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
              <Lightbulb className="h-5 w-5" />
            </span>
            <span
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-medium tracking-wide',
                statusStyles[item.status],
              )}
            >
              {item.status}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-medium leading-tight tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.summary}
            </p>
          </div>

          <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-5">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted">
                Patent No.
              </p>
              <p className="mt-1 font-mono text-sm text-white/90">
                {item.patentNumber}
              </p>
            </div>
            <span className="font-display text-2xl font-semibold tracking-tighter text-gradient">
              {item.year}
            </span>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
