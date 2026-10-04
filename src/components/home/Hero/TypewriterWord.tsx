"use client";
import { useEffect, useState } from "react";

export function TypewriterWord({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const word = words[wordIndex];
    let delay = deleting ? 40 : 80;
    if (!deleting && length === word.length) delay = 1800;
    if (deleting && length === 0) delay = 280;
    const timeout = window.setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) { setDeleting(false); setWordIndex((index) => (index + 1) % words.length); }
      else setLength((value) => value + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [deleting, length, wordIndex, words]);
  return <span className="inline-flex min-w-[7ch] bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent" aria-hidden="true">{words[wordIndex].slice(0, length)}<span className="type-caret" /></span>;
}
