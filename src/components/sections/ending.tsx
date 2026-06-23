'use client';

import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

import { asset } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/shared/magnetic';
import { TextReveal, Reveal } from '@/components/shared/reveal';

const links = [
  { label: 'Resume', icon: FileText, href: asset(siteConfig.resume) },
  { label: 'GitHub', icon: Github, href: siteConfig.socials.github },
  { label: 'LinkedIn', icon: Linkedin, href: siteConfig.socials.linkedin },
  { label: 'Email', icon: Mail, href: `mailto:${siteConfig.email}` },
];

export function Ending() {
  return (
    <Section
      id="contact"
      flush
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden py-32"
    >
      {/* Slowly drifting background light */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(59,130,246,0.18), transparent 40%, rgba(96,165,250,0.12), transparent 80%, rgba(59,130,246,0.18))',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tighter">
          <span className="block text-gradient-muted">
            <TextReveal text="I build systems that" />
          </span>
          <span className="block text-gradient">
            <TextReveal text="learn, reason, and adapt." stagger={0.08} />
          </span>
        </h2>

        <Reveal delay={0.2} className="mt-8">
          <p className="text-xl text-muted sm:text-2xl">
            Let&rsquo;s build the future.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {links.map(({ label, icon: Icon, href }) => (
              <Magnetic key={label} strength={0.3}>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                  >
                    <Icon />
                    {label}
                  </a>
                </Button>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="container relative z-10 mt-24 flex w-full flex-col items-center gap-4 border-t border-white/10 pt-8 text-sm text-muted sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.25em]">
          Designed &amp; engineered with intent
        </span>
      </div>
    </Section>
  );
}
