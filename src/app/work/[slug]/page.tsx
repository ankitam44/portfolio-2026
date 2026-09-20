import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { timeline, type CaseStudyBlock } from "@/data/timeline";

export function generateStaticParams() {
  return timeline
    .filter((entry) => entry.hasCaseStudy)
    .map((entry) => ({ slug: entry.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = timeline.find((e) => e.slug === slug && e.hasCaseStudy);
  if (!entry) notFound();

  return (
    <main className="flex-1 w-full max-w-2xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <Link href="/" className="text-sm font-mono text-muted hover:text-accent transition-colors">
        ← Back
      </Link>

      <header className="mt-8 mb-12">
        <p className="font-mono text-xs text-muted">
          {entry.caseStudy?.year ?? entry.start}
          {entry.org ? ` · ${entry.org}` : ""}
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight">
          {entry.title}
        </h1>
        {entry.caseStudy?.role ? (
          <p className="mt-2 text-muted">{entry.caseStudy.role}</p>
        ) : null}
      </header>

      {entry.caseStudy?.coverImage ? (
        <Image
          src={entry.caseStudy.coverImage}
          alt={entry.title}
          width={1200}
          height={675}
          className="w-full rounded-lg border border-line mb-12"
        />
      ) : null}

      <div className="flex flex-col gap-6">
        {entry.caseStudy?.blocks.map((block, i) => (
          <CaseStudyBlockView key={i} block={block} />
        ))}
      </div>
    </main>
  );
}

function CaseStudyBlockView({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="text-lg font-medium mt-4">{block.text}</h2>;
    case "paragraph":
      return <p className="text-foreground/90 leading-relaxed">{block.text}</p>;
    case "list":
      return (
        <ul className="list-disc list-inside space-y-1 text-foreground/90">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure>
          <Image
            src={block.src}
            alt={block.alt}
            width={1200}
            height={675}
            className="w-full rounded-lg border border-line"
          />
          {block.caption ? (
            <figcaption className="mt-2 text-xs text-muted font-mono">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
  }
}
