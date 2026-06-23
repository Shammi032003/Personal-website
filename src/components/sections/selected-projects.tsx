'use client';

import { projects } from '@/lib/data';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { ProjectCard } from '@/components/cards/project-card';

export function Projects() {
  return (
    <Section id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Section 04 — Projects"
          title="Projects"
          description="Selected projects showcasing systems engineering and research applications."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
