"use client";

import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const ACHIEVEMENTS = [
  'Best Final Year Project & Best Presenter Award (2025)',
  'Harvard Project for Asian and International Relations Delegate (2024, 2025)',
  'Smart India Hackathon — Runner-Up (2023)',
  'Techfest IIT Bombay Atom Quest — Top 5 (2023)',
  'IBM Evolve Hackathon — Third Runner-Up (2023)',
  'CoDecode National Competition — Top 5 Nationwide (2022)',
  'IEEE BNMIT Hackathon — Winner (2022)',
  'BNMIT Data Science Hackathon — First Runner-Up (2022)',
];

export function Achievements() {
  return (
    <Section id="achievements">
      <div className="container">
        <SectionHeading
          eyebrow="Section 08 — Achievements & Leadership"
          title="Achievements & Leadership"
          description="Selected awards and leadership roles."
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a} delay={i * 0.03} className="h-full">
              <div className="glass rounded-2xl p-6 h-full">
                <p className="font-semibold">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <div className="glass rounded-2xl p-6">
            <h4 className="font-display text-lg font-semibold">Leadership</h4>
            <ul className="mt-4 list-disc pl-5">
              <li>Team Lead — Smart India Hackathon</li>
              <li>Team Lead — Techfest IIT Bombay Atom Quest</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Achievements;
