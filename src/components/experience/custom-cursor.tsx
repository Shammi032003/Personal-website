'use client';

import { useEffect, useRef, useState } from 'react';

import { lerp } from '@/lib/utils';

/**
 * A two-part custom cursor: an instant dot and a trailing ring that eases
 * toward the pointer. The ring expands over interactive elements. Only mounts
 * on fine-pointer devices.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!canHover.matches) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let hovering = false;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        visible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
      const target = e.target as HTMLElement;
      hovering = !!target.closest(
        'a, button, [data-cursor="hover"], input, textarea, [role="button"]',
      );
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const render = () => {
      ring.x = lerp(ring.x, mouse.x, 0.18);
      ring.y = lerp(ring.y, mouse.y, 0.18);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        const scale = hovering ? 1.9 : 1;
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.borderColor = hovering
          ? 'rgba(59,130,246,0.9)'
          : 'rgba(255,255,255,0.35)';
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[120] h-1.5 w-1.5 rounded-full bg-white opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[120] h-9 w-9 rounded-full border border-white/35 opacity-0 transition-[opacity,border-color] duration-300"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
