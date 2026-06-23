'use client';

import { ArrowUpRight, FileText, Quote } from 'lucide-react';

import type { Publication } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="glass group relative flex h-full w-full flex-col items-start gap-5 rounded-3xl p-7 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 sm:p-8"
          data-cursor="hover"
        >
          <div className="flex w-full items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
              <Quote className="h-4 w-4" />
            </span>
            <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-soft" />
          </div>

          <h3 className="text-xl font-medium leading-snug tracking-tight text-white">
            {pub.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {pub.summary}
          </p>

          <div className="mt-auto flex items-center gap-2 pt-2">
            <Badge variant="accent">{pub.venue}</Badge>
            <Badge>{pub.year}</Badge>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="accent">{pub.venue}</Badge>
            <Badge>{pub.year}</Badge>
          </div>
          <DialogTitle>{pub.title}</DialogTitle>
          <DialogDescription className="pt-2 text-base">
            {pub.summary}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="accent" size="sm">
            <a href={pub.doi} target="_blank" rel="noreferrer">
              <FileText />
              View DOI
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
