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
          <Link href="/#experience" className="case-link cobalt cs-back-link" style={{ marginBottom: 24 }}>
            ← Back to work
          </Link>

          {caseStudy.eyebrow ? (
            <div className="eyebrow accent-cobalt">
              <span className="dot" style={{ background: "var(--cobalt-light)" }} />
              {caseStudy.eyebrow}
            </div>
          ) : null}

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

          {caseStudy.coverImage ? (
            <div className="cs-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element -- source images vary too widely in aspect ratio for fixed next/image sizing */}
              <img src={caseStudy.coverImage} alt={caseStudy.coverAlt ?? caseStudy.title} />
            </div>
          ) : null}
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
      return (
        <div style={{ marginTop: 24 }}>
          {block.eyebrow ? <div className="cs-section-num">{block.eyebrow}</div> : null}
          <h2>{block.text}</h2>
        </div>
      );
    case "paragraph":
      return <p className="lede">{block.text}</p>;
    case "quote":
      return (
        <div className="pullquote">
          {block.text}
          {block.attribution ? <span>{block.attribution}</span> : null}
        </div>
      );
    case "list":
      return (
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "var(--mute)",
                paddingLeft: 18,
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "var(--pink)" }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element -- source images vary too widely in aspect ratio for fixed next/image sizing */}
          <img
            src={block.src}
            alt={block.alt}
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 12, border: "1px solid var(--line-dark)" }}
          />
          {block.caption ? (
            <figcaption
              style={{
                marginTop: 12,
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11.5,
                color: "var(--mute)",
              }}
            >
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case "stats":
      return (
        <div className="stats stats-4">
          {block.items.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
              <div className="desc">{s.desc}</div>
            </div>
          ))}
        </div>
      );
  }
}
