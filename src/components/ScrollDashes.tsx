"use client";

import { useEffect, useState } from "react";
import type { Category } from "@/data/timeline";

export default function ScrollDashes({ sections }: { sections: Category[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elements.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
      {sections.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          className={`h-px transition-all ${
            i === activeIndex ? "w-6 bg-accent" : "w-3 bg-line"
          }`}
        />
      ))}
    </div>
  );
}
