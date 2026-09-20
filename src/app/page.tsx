import ExperienceSection from "@/components/ExperienceSection";
import AgentsSection from "@/components/AgentsSection";
import SideQuestsSection from "@/components/SideQuestsSection";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow accent-cobalt">
            <span className="dot" style={{ background: "var(--cobalt-light)" }} />
            Berlin
          </div>
          <h1>
            Designs the system.
            <br />
            Owns the <em>outcome.</em>
          </h1>
          <p className="subtitle">
            AI-Native Product Manager with UX Design Expertise.
            <br />
            Trained as a lead product designer, sharpened by early-stage innovation work, proven
            across B2B SaaS product management.
          </p>
          <div className="hero-meta">
            <div>
              <span className="k">Currently</span>Product Manager, Elli (VW Group)
            </div>
          </div>
          <div className="cta-row">
            <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View resume
            </a>
            <a
              href="https://www.linkedin.com/in/ankitabmenon/"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <ExperienceSection />
      <AgentsSection />
      <SideQuestsSection />

      <section className="section" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-col">
              <div className="head">
                <div className="eyebrow accent-cobalt">
                  <span className="dot" style={{ background: "var(--cobalt-light)" }} />
                  About — 04
                </div>
                <h2>
                  A bit about{" "}
                  <em style={{ color: "var(--cobalt-light)", fontStyle: "normal" }}>me</em>
                </h2>
              </div>
              <p className="about-body">
                I think about products the way I think about design, as systems that either earn
                someone&apos;s trust or lose it in the first five seconds. I started as a designer
                because I wanted to make things people actually want to use, and moved into product
                management because I wanted to own why those things existed in the first place.
              </p>
              <p className="about-body">
                In practice that means I move across the full arc of a product decision, spotting
                where the UX breaks down, shaping the strategy that decides what&apos;s worth fixing,
                then working with engineering on how it actually ships.
              </p>
              <div className="about-pills">
                <span className="about-pill">
                  <span className="dot" style={{ background: "var(--cobalt-light)" }} />
                  Lately: building with an AI-native mindset and workflow
                </span>
              </div>
            </div>
            <div className="about-photo" />
          </div>
        </div>
      </section>
    </>
  );
}
