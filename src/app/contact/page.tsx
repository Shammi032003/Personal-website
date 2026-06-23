import type { Metadata } from 'next';
import { ArrowUpRight, Github, Linkedin, GraduationCap, Mail } from 'lucide-react';

import { siteConfig } from '@/lib/site-config';
import { PageHeader } from '@/components/shared/page-header';
import { Reveal } from '@/components/shared/reveal';
import { CopyEmail } from '@/components/shared/copy-email';

const channels = [
  {
    label: 'GitHub',
    handle: '@shamithagaddam',
    icon: Github,
    href: siteConfig.socials.github,
  },
  {
    label: 'LinkedIn',
    handle: 'in/shamithagaddam',
    icon: Linkedin,
    href: siteConfig.socials.linkedin,
  },
  {
    label: 'Google Scholar',
    handle: 'Publications',
    icon: GraduationCap,
    href: siteConfig.socials.scholar,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build the future."
        description="Open to research collaborations, ambitious engineering, and conversations about agentic and brain-inspired AI."
      />

      <div className="container pb-32">
        {/* Email hero */}
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-soft">
              Email
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-flex items-center gap-3 break-all font-display text-3xl font-semibold tracking-tighter text-white transition-colors hover:text-accent-soft sm:text-5xl"
              data-cursor="hover"
            >
              <Mail className="hidden h-8 w-8 shrink-0 text-accent sm:block" />
              {siteConfig.email}
            </a>
            <div className="mt-6">
              <CopyEmail email={siteConfig.email} />
            </div>
          </div>
        </Reveal>

        {/* Channels */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="glass group flex h-full flex-col gap-6 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-soft" />
                </div>
                <div>
                  <p className="text-lg font-medium text-white">{c.label}</p>
                  <p className="mt-1 text-sm text-muted">{c.handle}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
