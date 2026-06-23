'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

/** Glass card with a pointer-tracked 3D tilt and a moving sheen highlight. */
export function TiltCard({ children, className, intensity = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 20,
  });

  const glareX = useTransform(mx, [0, 1], ['0%', '100%']);
  const glareY = useTransform(my, [0, 1], ['0%', '100%']);
  const sheen = useTransform([glareX, glareY], (latest) => {
    const [x, y] = latest as string[];
    return `radial-gradient(300px circle at ${x} ${y}, rgba(255,255,255,0.10), transparent 55%)`;
  });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={cn(
        'group relative overflow-hidden rounded-3xl will-change-transform',
        className,
      )}
    >
      {children}
      {/* Moving sheen */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: sheen }}
      />
    </motion.div>
  );
}
