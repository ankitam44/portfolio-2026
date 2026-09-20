import Link from "next/link";
import { notFound } from "next/navigation";
import { allCaseStudies, type CaseStudyBlock } from "@/data/timeline";

export function generateStaticParams() {
  return allCaseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = allCaseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) notFound();

  return (
    <div className="case-study-page">
      <section className="cs-hero">
        <div className="wrap">
          <h1>{caseStudy.title}</h1>
          <p className="lede">{caseStudy.lede}</p>

          {caseStudy.meta.length ? (
            <div className="meta-row">
              {caseStudy.meta.map((m) => (
                <div className="item" key={m.label}>
                  <div className="label">{m.label}</div>
                  <div className="value">{m.value}</div>
                </div>
              ))}
            </div>
          ) : null}

          {caseStudy.isStub ? (
            <div className="pill pill-mute">
              <span className="dot" />
              Draft — full write-up pending
            </div>
          ) : null}

          <Link href="/#experience" className="case-link cobalt cs-back-link">
            ← Back
          </Link>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap">
          {caseStudy.blocks.map((block, i) => (
            <CaseStudyBlockView key={i} block={block} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CaseStudyBlockView({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "paragraph":
      return <p className="lede">{block.text}</p>;
    case "list":
      return (
        <ul style={{ listStyle: "disc", paddingLeft: 20, color: "var(--mute)" }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>
      );
  }
}
