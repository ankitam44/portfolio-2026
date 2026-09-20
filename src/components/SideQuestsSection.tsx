import Link from "next/link";
import { sideQuests } from "@/data/timeline";

export default function SideQuestsSection() {
  const explorations = sideQuests.filter((s) => s.externalUrl && !s.caseStudy);
  const discoveries = sideQuests.filter((s) => s.caseStudy);

  return (
    <section className="section" id="side-quests" style={{ borderBottom: "none" }}>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow accent-lime">
            <span className="dot" style={{ background: "var(--lime)" }} />
            Side Quests — 03
          </div>
          <h2>
            Out in the <span className="accent-lime">wild</span>
          </h2>
          <p className="lede">
            Vibe-coded side projects, self-initiated concept work — not client work, not assigned
            work. Problems noticed and decided worth solving.
          </p>
        </div>

        {explorations.length ? (
          <div className="explore-grid" style={{ marginBottom: discoveries.length ? 48 : 0 }}>
            {explorations.map((entry) => (
              <a
                key={entry.slug}
                href={entry.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="explore-card"
              >
                {entry.thumbnail ? (
                  <div className="explore-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element -- fixed-container thumbnail, dimensions vary per screenshot */}
                    <img src={entry.thumbnail} alt={entry.title} />
                  </div>
                ) : null}
                <div className="explore-info">
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                </div>
              </a>
            ))}
          </div>
        ) : null}

        {discoveries.length ? (
          <div className="case-mini-grid">
            {discoveries.map((entry) => (
              <div className="case-mini" key={entry.slug}>
                <div className="case-mini-head">
                  {entry.pill ? (
                    <div className="pill pill-cobalt">
                      <span className="dot" />
                      {entry.pill}
                    </div>
                  ) : null}
                  {entry.forClient ? <span className="case-target">{entry.forClient}</span> : null}
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <Link href={`/work/${entry.caseStudy!.slug}`} className="case-link cobalt">
                  View case study →
                </Link>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
