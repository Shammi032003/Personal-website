import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind class names with conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a public asset path with the configured basePath so static assets
 * resolve correctly when the site is served from a GitHub Pages subdirectory.
 */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Linear interpolation helper used by pointer-driven animations. */
export function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

/** Clamp a value to a range. */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
