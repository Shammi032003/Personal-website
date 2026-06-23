'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

/** Loops through phrases with a type/erase effect and a blinking caret. */
export function Typewriter({
  words,
  className,
  typingSpeed = 85,
  deletingSpeed = 45,
  pause = 1500,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          );
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={cn('text-gradient', className)}>
      {text}
      <span className="ml-0.5 inline-block w-[0.06em] animate-cursor-blink bg-accent align-middle">
        &nbsp;
      </span>
    </span>
  );
}
