import Link from "next/link";
import { experience } from "@/data/timeline";

export default function ExperienceSection() {
  const cards = experience.filter((e) => !e.stats);
  const statsEntry = experience.find((e) => e.stats);

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow accent-pink">
            <span className="dot" style={{ background: "var(--pink)" }} />
            Experience — 01
          </div>
          <h2>
            Platforms <span className="accent-pink">built</span>
          </h2>
          <p className="lede">
            Roles, projects, and platforms shipped end to end — research, IA, visual systems, and the
            final pixel.
          </p>
        </div>

        <div className="design-grid">
          {cards.map((entry) => (
            <div className="design-card" key={entry.slug}>
              <div className="tag">{entry.tag}</div>
              <h4>{entry.title}</h4>
              <p>{entry.description}</p>
              {entry.caseStudy ? (
                <Link href={`/work/${entry.caseStudy.slug}`} className="case-link pink">
                  View case study →
                </Link>
              ) : entry.externalUrl ? (
                <a
                  href={entry.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-link pink"
                >
                  {entry.externalLabel ?? "Visit →"}
                </a>
              ) : (
                <span className="case-link mute">{entry.context}</span>
              )}
            </div>
          ))}
        </div>

        {statsEntry ? (
          <div style={{ marginTop: 56 }}>
            <div className="eyebrow accent-lime">
              <span className="dot" style={{ background: "var(--lime)" }} />
              {statsEntry.title} — {statsEntry.context}
            </div>
            <p className="lede" style={{ marginBottom: 32 }}>
              {statsEntry.description}
            </p>
            <div className="stats">
              {statsEntry.stats!.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="num">{s.num}</div>
                  <div className="label">{s.label}</div>
                  <div className="desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
