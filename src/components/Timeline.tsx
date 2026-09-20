import Link from "next/link";
import type { Category, TimelineEntry } from "@/data/timeline";
import { categoryLabels } from "@/data/timeline";

const CATEGORIES: Category[] = ["experience", "agents", "side-quests"];

const SECTION_SUBTITLE: Record<Category, string> = {
  experience: "roles and what i owned in them.",
  agents: "agents and llm-shaped things i've built or poked at.",
  "side-quests": "experiments, side projects, and things made for fun.",
};

function sortKey(entry: TimelineEntry) {
  return entry.end ?? entry.start;
}

function href(entry: TimelineEntry) {
  if (entry.hasCaseStudy) return `/work/${entry.slug}`;
  if (entry.externalUrl) return entry.externalUrl;
  return undefined;
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="flex flex-col gap-20">
      {CATEGORIES.map((category) => {
        const items = [...entries]
          .filter((e) => e.category === category)
          .sort((a, b) => sortKey(b).localeCompare(sortKey(a)));

        if (items.length === 0) return null;

        return (
          <section key={category} id={category} className="scroll-mt-20">
            <h2 className="text-lg font-medium lowercase">{categoryLabels[category]}</h2>
            <p className="mt-1 text-sm text-muted">{SECTION_SUBTITLE[category]}</p>

            <ul className="mt-6 flex flex-col divide-y divide-line border-t border-line">
              {items.map((entry) => {
                const link = href(entry);
                const isExternal = !entry.hasCaseStudy && !!entry.externalUrl;

                const row = (
                  <div className="flex items-start justify-between gap-4 py-4">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="font-medium group-hover:text-accent transition-colors">
                          {entry.title}
                        </h3>
                        {entry.org ? (
                          <span className="text-sm text-muted">· {entry.org}</span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-muted max-w-md">{entry.summary}</p>
                      {entry.tags?.length ? (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {entry.tags.map((tag) => (
                            <span key={tag} className="text-xs text-muted/80">
                              #{tag.toLowerCase().replace(/\s+/g, "-")}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <span className="shrink-0 text-xs text-muted whitespace-nowrap pt-1">
                      {entry.start}
                      {entry.end ? `–${entry.end}` : ""}
                    </span>
                  </div>
                );

                return (
                  <li key={entry.slug}>
                    {link ? (
                      <Link
                        href={link}
                        className="group block -mx-2 px-2 rounded hover:bg-foreground/[0.03] transition-colors"
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {row}
                      </Link>
                    ) : (
                      <div className="group block">{row}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
