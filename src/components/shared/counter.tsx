'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

/** Counts from 0 → value once it scrolls into view. */
export function Counter({
  value,
  suffix = '',
  className,
  duration = 2,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = Math.floor(latest).toLocaleString('en-US');
      },
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
