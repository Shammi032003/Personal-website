import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Core brand palette — luxury tech, monochrome with a single blue accent.
        ink: '#050505',
        canvas: '#050505',
        foreground: '#FFFFFF',
        muted: '#A1A1AA',
        accent: {
          DEFAULT: '#3B82F6',
          soft: '#60A5FA',
          deep: '#1D4ED8',
        },
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
      },
      maxWidth: {
        prose: '68ch',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.16), transparent 60%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'cursor-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        shimmer: 'shimmer 2.4s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'cursor-blink': 'cursor-blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
