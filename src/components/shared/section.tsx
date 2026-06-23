import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Removes the default vertical padding for full-bleed sections. */
  flush?: boolean;
}

/** Consistent section shell: scroll anchor, max width, vertical rhythm. */
export function Section({ id, children, className, flush }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative z-10 scroll-mt-24',
        !flush && 'py-12 md:py-20',
        className,
      )}
    >
      {children}
    </section>
  );
}
