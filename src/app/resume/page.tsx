import type { Metadata } from 'next';
import { Download } from 'lucide-react';

import { asset } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';
import { journey, organizations, interestNodes, stats } from '@/lib/data';
import { PageHeader } from '@/components/shared/page-header';
import { Reveal } from '@/components/shared/reveal';
import { Counter } from '@/components/shared/counter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Experience, highlights, and capabilities at a glance.',
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="The short version."
        description="A snapshot of experience and capabilities. Download the full PDF for the complete record."
      />

      <div className="container pb-32">
        <Reveal>
          <Button asChild variant="accent" size="lg" className="mb-16">
            <a href={asset(siteConfig.resume)} target="_blank" rel="noreferrer">
              <Download />
              Download full resume (PDF)
            </a>
          </Button>
        </Reveal>

        {/* Highlights */}
        <div className="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink/40 p-6">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-semibold tracking-tighter text-gradient sm:text-5xl"
              />
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.4fr,1fr]">
          {/* Experience timeline */}
          <section>
            <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight text-white">
              Experience &amp; milestones
            </h2>
            <div className="space-y-8 border-l border-white/10 pl-8">
              {journey.map((entry) => (
                <Reveal key={entry.year}>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(59,130,246,0.6)]" />
                    <p className="font-display text-xl font-semibold text-gradient">
                      {entry.year}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
                      {entry.title}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {entry.items.map((item) => (
                        <li key={item} className="text-white/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Sidebar: orgs + skills */}
          <aside className="space-y-12">
            <section>
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight text-white">
                Organizations
              </h2>
              <ul className="space-y-2">
                {organizations.map((org) => (
                  <li
                    key={org.name}
                    className="flex items-center justify-between border-b border-white/10 pb-2 text-white/85"
                  >
                    {org.name}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight text-white">
                Focus areas
              </h2>
              <div className="flex flex-wrap gap-2">
                {interestNodes.map((node) => (
                  <Badge key={node.id} variant="outline">
                    {node.label}
                  </Badge>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
