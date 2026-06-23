'use client';

import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { Counter } from '@/components/shared/counter';

export function Journey() {
  return (
    <Section id="journey">
      <div className="container">
        <SectionHeading
          eyebrow="Section 01 — The Journey"
          title="The Journey"
          description="From first principles to research labs and enterprise AI — a timeline of building, researching, and inventing."
        />

        <div className="mt-8 max-w-3xl text-lg text-white/85">
          <p>
            Her work includes developing enterprise AI systems at Puma, conducting research at DRDO, IISc, and AUT New Zealand, publishing research in IEEE, Springer, and Elsevier, and contributing to patented innovations across AI and IoT systems. She will be pursuing a Master of Science in Computer and Information Science at the University of Pennsylvania.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.02} className="h-full">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="font-display text-3xl font-semibold">
                <Counter value={4} />
              </div>
              <p className="mt-2 text-sm text-muted">Patents</p>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="h-full">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="font-display text-3xl font-semibold">
                <Counter value={5} />
              </div>
              <p className="mt-2 text-sm text-muted">Publications</p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="h-full">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="font-display text-3xl font-semibold">
                <Counter value={6} />
              </div>
              <p className="mt-2 text-sm text-muted">Research & Industry Internships</p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="font-display text-3xl font-semibold">
                <Counter value={50} suffix="+" />
              </div>
              <p className="mt-2 text-sm text-muted">Projects</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
