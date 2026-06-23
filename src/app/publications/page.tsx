import type { Metadata } from 'next';

import { publications } from '@/lib/data';
import { PageHeader } from '@/components/shared/page-header';
import { Reveal } from '@/components/shared/reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'A complete register of peer-reviewed publications.',
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="The complete register."
        description="Every peer-reviewed publication, in full. Each entry links to its DOI."
      />

      <div className="container pb-32">
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.04}>
              <li className="group grid grid-cols-1 gap-6 py-8 md:grid-cols-[auto,1fr,auto] md:items-start md:gap-10">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <h2 className="text-xl font-medium tracking-tight text-white transition-colors group-hover:text-accent-soft sm:text-2xl">
                    {pub.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {pub.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Badge variant="accent">{pub.venue}</Badge>
                    <Badge>{pub.year}</Badge>
                  </div>
                </div>

                <Button asChild variant="outline" size="sm" className="md:mt-1">
                  <a href={pub.doi} target="_blank" rel="noreferrer">
                    <FileText />
                    DOI
                  </a>
                </Button>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </>
  );
}
