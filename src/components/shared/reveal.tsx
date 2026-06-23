'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

/** Fade + rise a block into view as it enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const child: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  once?: boolean;
}

/** Word-by-word masked reveal — the signature headline animation. */
export function TextReveal({
  text,
  className,
  wordClassName,
  stagger = 0.06,
  once = true,
}: TextRevealProps) {
  return (
    <motion.span
      className={cn('inline-flex flex-wrap', className)}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-10% 0px' }}
      aria-label={text}
    >
      {text.split(' ').map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.25em] inline-flex overflow-hidden py-[0.05em]"
        >
          <motion.span
            className={cn('inline-block', wordClassName)}
            variants={child}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
