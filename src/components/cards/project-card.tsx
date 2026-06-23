'use client';

import { Github, ArrowUpRight } from 'lucide-react';

import type { Project } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 sm:p-8"
      data-cursor="hover"
    >
      {/* Sliding accent wash on hover */}
      <div className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-accent/[0.08] to-transparent transition-transform duration-700 group-hover:translate-y-0" />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <h3 className="relative mt-6 text-2xl font-medium leading-tight tracking-tight text-white">
        {project.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted">
        {project.overview}
      </p>

      <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </article>
  );
}
