import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent-soft">
        Error 404
      </p>
      <h1 className="mt-6 font-display text-7xl font-semibold tracking-tighter text-gradient sm:text-9xl">
        Lost in latent space.
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        This page drifted out of the manifold. Let&rsquo;s get you back to a known
        state.
      </p>
      <Button asChild variant="accent" size="lg" className="mt-10">
        <Link href="/">Return home</Link>
      </Button>
    </section>
  );
}
