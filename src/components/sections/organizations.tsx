'use client';

import { motion } from 'framer-motion';

import { organizations } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';

export function Experience() {
  return (
    <Section id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Section 03 — Experience"
          title="Experience"
          description="Organizations where research, engineering, and innovation happened."
        />

        <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 md:grid-cols-3">
          {organizations.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              className="group relative flex aspect-[4/3] items-center justify-center border-b border-r border-white/10 p-6 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0"
              data-cursor="hover"
            >
              {/* Wordmark — grayscale until hovered */}
              <span className="font-display text-3xl font-semibold tracking-tight text-white/25 transition-all duration-500 group-hover:scale-95 group-hover:text-white/0 sm:text-4xl md:text-5xl">
                {org.name}
              </span>

              {/* Contribution reveal */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-accent/[0.06] to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-8">
                <p className="text-center text-sm leading-relaxed text-white/85">
                  <span className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-accent-soft">
                    {org.name}
                  </span>
                  {org.contribution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
