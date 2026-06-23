'use client';

import { innovations } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { InnovationCard } from '@/components/cards/innovation-card';

export function Innovation() {
  return (
    <Section id="innovation">
      <div className="container">
        <SectionHeading
          eyebrow="Section 05 — Innovation Portfolio"
          title="Inventions, patented and pending."
          description="Hardware-aware intelligence and applied research distilled into filed and published patents."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {innovations.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className="h-full">
              <InnovationCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
