'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { cn, asset } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';
import { useSmoothScroll } from '@/components/providers/smooth-scroll';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollTo } = useSmoothScroll();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    setOpen(false);
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      scrollTo(href, -80);
    }
  };

  // Track active section while scrolling (only on home)
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!isHome) return;
    let raf = 0;
    const ids = siteConfig.nav.map((i) => i.href).filter((h) => h.startsWith('#'));
    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        let closest: string | null = null;
        let min = Infinity;
        ids.forEach((id) => {
          const el = document.querySelector(id) as HTMLElement | null;
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const diff = Math.abs(rect.top - 120);
          if (diff < min) {
            min = diff;
            closest = id;
          }
        });
        setActive(closest);
      });
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isHome]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[75] flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            'flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5',
            scrolled
              ? 'glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
              : 'border border-transparent bg-transparent',
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] font-display text-sm font-semibold tracking-tight text-white transition-colors group-hover:border-accent/60">
              SG
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-white/90 sm:block">
              {siteConfig.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={handleNav(item.href)}
                  className={cn(
                    'rounded-full px-3.5 py-2 text-sm transition-colors hover:text-white',
                    active === item.href ? 'text-white' : 'text-muted',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="hidden sm:inline-flex"
            >
              <a href={asset(siteConfig.resume)} target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-strong fixed inset-0 z-[74] flex flex-col items-center justify-center gap-2 lg:hidden"
          >
            {siteConfig.nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={handleNav(item.href)}
                  className="font-display text-3xl font-medium tracking-tight text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <a
              href={asset(siteConfig.resume)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 text-sm uppercase tracking-[0.3em] text-accent-soft"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
