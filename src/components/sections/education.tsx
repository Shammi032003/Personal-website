"use client";

import Image from 'next/image';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

export function Education() {
  return (
    <Section id="education">
      <div className="container">
        <SectionHeading
          eyebrow="Section 02 — Education"
          title="Education"
          description="Academic background and selected coursework."
        />

        <div className="mt-8 space-y-8">
          <Reveal delay={0.02} className="h-full">
            <div className="rounded-2xl p-10 bg-black/50 border border-white/15 backdrop-blur-sm shadow-[0_0_40px_rgba(59,130,246,0.08)]">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                {/* Left column: 40% */}
                <div className="md:w-2/5 flex-shrink-0 flex flex-col items-start gap-6">
                  <div className="bg-white rounded-xl p-4 flex items-center justify-center" style={{ width: 190, height: 190 }}>
                    <Image src="/penn-logo.jpeg" alt="University of Pennsylvania logo" width={160} height={160} className="object-contain" />
                  </div>

                  <div className="mt-1">
                    <h3 className="text-5xl font-bold leading-tight">University of Pennsylvania</h3>
                    <p className="text-2xl font-medium mt-4">Master of Science in Computer and Information Science</p>
                    <p className="text-lg text-white/70 mt-2">Expected Fall 2026</p>
                    <div className="mt-4 text-base text-white/80 space-y-1">
                      <p>Scholarships: Research Fellowship</p>
                    </div>
                  </div>
                </div>

                {/* Right column: 60% */}
                <div className="md:w-3/5 mt-8 md:mt-0">
                  <h4 className="text-xl font-semibold text-white/80">Relevant Coursework</h4>
                  <ul className="mt-4 space-y-3 list-disc pl-6 text-xl text-white/80">
                    <li>CIS 5200 — Applied Machine Learning</li>
                    <li>CIS 5300 — Natural Language Processing</li>
                    <li>ESE 5420 — Statistics for Data Science</li>
                    <li>CIS 5810 — Computer Vision &amp; Computational Photography</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="h-full">
            <div className="rounded-2xl p-10 bg-black/50 border border-white/15 backdrop-blur-sm shadow-[0_0_40px_rgba(59,130,246,0.08)]">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="md:w-2/5 flex-shrink-0 flex flex-col items-start gap-6">
                  <div className="bg-white rounded-xl p-4 flex items-center justify-center" style={{ width: 190, height: 190 }}>
                    <Image src="/bnmit-logo.jpeg" alt="BNM Institute of Technology logo" width={160} height={160} className="object-contain" />
                  </div>

                  <div className="mt-1">
                    <h3 className="text-5xl font-bold leading-tight">BNM Institute of Technology</h3>
                    <p className="text-2xl font-medium mt-4">Bachelor of Engineering in Artificial Intelligence and Machine Learning</p>
                    <p className="text-lg text-white/70 mt-2">2021 – 2025</p>
                    <p className="text-lg text-white/70 mt-1">CGPA: 8.9 / 10</p>
                  </div>
                </div>

                <div className="md:w-3/5 mt-8 md:mt-0">
                  <h4 className="text-xl font-semibold text-white/80">Relevant Coursework</h4>
                  <ul className="mt-4 space-y-3 list-disc pl-6 text-xl text-white/80">
                    <li>Machine Learning</li>
                    <li>Artificial Intelligence</li>
                    <li>Data Structures &amp; Algorithms</li>
                    <li>Object-Oriented Programming</li>
                    <li>Database Management Systems</li>
                    <li>Computer Networks</li>
                    <li>Operating Systems</li>
                    <li>Software Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default Education;
