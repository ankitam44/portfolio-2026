import { agents } from "@/data/timeline";

export default function AgentsSection() {
  return (
    <section className="section" id="agents">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow accent-cobalt">
            <span className="dot" style={{ background: "var(--cobalt-light)" }} />
            Agents I&apos;ve dabbled on — 02
          </div>
          <h2>Live tools, not slideware</h2>
          <p className="lede">
            AI-native tools I designed, prompted, and shipped. Live and usable right now, not mockups
            in a deck.
          </p>
        </div>

        <div className="ai-grid">
          {agents.map((agent) => (
            <a
              key={agent.slug}
              href={agent.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ai-card"
            >
              {agent.thumbnail ? (
                <div className="ai-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element -- fixed-container thumbnail, dimensions vary per screenshot */}
                  <img src={agent.thumbnail} alt={agent.title} />
                </div>
              ) : null}
              <div className="ai-info">
                <div className="pill pill-cobalt">
                  <span className="dot" />
                  {agent.pill}
                </div>
                <h3>{agent.title}</h3>
                <p>{agent.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
