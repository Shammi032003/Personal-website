'use client';

import { publications } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { PublicationCard } from '@/components/cards/publication-card';

export function Research() {
  return (
    <Section id="research">
      <div className="container">
        <SectionHeading
          eyebrow="Section 05 — Innovation Portfolio"
          title="Innovation Portfolio"
          description="Publications, research papers, and journal work showcasing applied and theoretical contributions. Open any card for the abstract and DOI."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.06} className="h-full">
              <PublicationCard pub={pub} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
