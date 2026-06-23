'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { institutions } from '@/lib/data';

export function Institutions() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Research & Industry Experience"
          title="Research & Industry Experience"
          description="Organizations where I built, researched, and shipped intelligent systems."
          align="center"
        />

        <div className="mt-8 flex justify-center">
          <div className="w-full" style={{ maxWidth: 1200 }}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {institutions.map((inst) => {
                const isActive = hovered === inst.id;

                return (
                  <motion.div
                    key={inst.id}
                    onMouseEnter={() => setHovered(inst.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(inst.id)}
                    onBlur={() => setHovered(null)}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.28 }}
                    className={`relative h-[340px] rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-shadow duration-200 flex flex-col items-center text-center p-6 ${isActive ? 'ring-1 ring-blue-400/25 shadow-md' : 'shadow-sm'}`}
                    role="group"
                    tabIndex={0}
                  >
                    <div className="flex-none w-full">
                      <div className="w-full flex items-center justify-center" style={{ height: 100 }}>
                        <Image
                          src={inst.img}
                          alt={`${inst.name} logo`}
                          width={200}
                          height={80}
                          className={`object-contain transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}
                          style={{ maxHeight: 80 }}
                        />
                      </div>
                    </div>

                    <div className="flex-none w-full mt-4">
                      <h3 className="font-display text-base font-semibold text-white">{inst.name}</h3>
                      <p className="text-sm text-muted mt-1">{inst.role} • {inst.dates}</p>
                    </div>

                    <div className="flex-grow w-full mt-3 overflow-visible">
                      <p className="text-sm text-white/90 leading-relaxed">{inst.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Institutions;
