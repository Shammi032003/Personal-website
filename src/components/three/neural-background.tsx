'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// The WebGL field is client-only and code-split so it never blocks first paint
// and is excluded from the static-export prerender.
const NeuralField = dynamic(() => import('./neural-field'), { ssr: false });

export function NeuralBackground() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    // Defer mounting WebGL until after the preloader handoff for a smooth start.
    const t = setTimeout(() => setShow(!prefersReduced), 200);

    // Dynamic lighting: a soft accent glow that follows the pointer.
    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,0.10), transparent 60%)`;
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      {/* Base vignette + grid scaffold (always present, zero-cost). */}
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-[0.35] mask-fade-y" />

      {/* Live neural net */}
      {show && (
        <div className="absolute inset-0 opacity-80">
          <NeuralField />
        </div>
      )}

      {/* Pointer-tracked dynamic light */}
      <div ref={glowRef} className="absolute inset-0 transition-[background] duration-200" />

      {/* Bottom fade so content always sits on solid ink. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
