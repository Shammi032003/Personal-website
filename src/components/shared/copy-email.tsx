'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

import { cn } from '@/lib/utils';

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <button
      onClick={copy}
      data-cursor="hover"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-white"
      aria-label="Copy email address"
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-300" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span className={cn(copied && 'text-emerald-300')}>
        {copied ? 'Copied' : 'Copy email'}
      </span>
    </button>
  );
}
