import type { Metadata } from 'next';

import { projects } from '@/lib/data';
import { PageHeader } from '@/components/shared/page-header';
import { Reveal } from '@/components/shared/reveal';
import { ProjectCard } from '@/components/cards/project-card';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected engineering and research projects.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I have built."
        description="A broader look at the systems, tools, and experiments — from generative motion to real-time signal processing and assistive computer vision."
      />

      <div className="container pb-32">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
