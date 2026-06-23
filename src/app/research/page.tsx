import type { Metadata } from 'next';

import { publications } from '@/lib/data';
import { PageHeader } from '@/components/shared/page-header';
import { Reveal } from '@/components/shared/reveal';
import { PublicationCard } from '@/components/cards/publication-card';
import { ResearchInterests } from '@/components/sections/research-interests';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research focus areas and published work.',
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Questions worth chasing."
        description="My research sits at the intersection of agentic reasoning, perception, and brain-inspired computation — building systems that learn, reason, and adapt."
      />

      <ResearchInterests />

      <div className="container pb-32">
        <h2 className="mb-10 font-display text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
          Published work
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.05} className="h-full">
              <PublicationCard pub={pub} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
