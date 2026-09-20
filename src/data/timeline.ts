export type Accent = "cobalt" | "lime" | "pink";

export type CaseStudyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type CaseStudy = {
  slug: string;
  title: string;
  lede: string;
  meta: { label: string; value: string }[];
  blocks: CaseStudyBlock[];
  /** True once the real narrative from the source case-studies/*.html has been pasted in. */
  isStub?: boolean;
};

export type ExperienceEntry = {
  slug: string;
  title: string;
  context: string; // e.g. "Lead Product Designer, 2022–24"
  tag: string; // small caption shown above the title
  description: string;
  accent: Accent;
  externalUrl?: string;
  externalLabel?: string;
  caseStudy?: CaseStudy;
  /** Rendered as the lime stat readout instead of a card, when present. */
  stats?: { num: string; label: string; desc: string }[];
};

export type AgentEntry = {
  slug: string;
  title: string;
  pill: string;
  description: string;
  externalUrl: string;
};

export type SideQuestEntry = {
  slug: string;
  title: string;
  description: string;
  externalUrl?: string;
  forClient?: string; // e.g. "For Nomerra"
  pill?: string;
  caseStudy?: CaseStudy;
};

/**
 * Real content ported from the current live portfolio (ankitamenon.netlify.app).
 * Case studies marked isStub only have the short card blurb from the source site —
 * the full narrative from your local case-studies/*.html files still needs to be pasted in.
 */

export const experience: ExperienceEntry[] = [
  {
    slug: "elli",
    title: "Elli, Volkswagen Group",
    context: "Product Manager · Current",
    tag: "Where it pays off",
    description:
      "Design thinking taken into fraud systems, account activation, and rebuilding workflows to be AI-driven.",
    accent: "lime",
    stats: [
      {
        num: "83%",
        label: "Fraud detection",
        desc: "Reduction in investigation time via an AI-assisted detection initiative, coordinated across Engineering, Legal, and Operations.",
      },
      {
        num: "15%",
        label: "Account activation",
        desc: "Lift in first-card completions, from a multi-touchpoint program targeting 900+ dormant accounts.",
      },
      {
        num: "30%",
        label: "Competitive intel",
        desc: "Cut in leadership time-to-insight via an AI dashboard tracking 15+ competitors across 5+ markets.",
      },
    ],
  },
  {
    slug: "vasana",
    title: "Vasana, Behavioral Genome",
    context: "Design & Product Strategy",
    tag: "Now live · 27,400+ members",
    description:
      "End-to-end design and product strategy for an AI-driven behavioral health platform, now live, trusted by EY, Accenture, and Starbucks.",
    accent: "pink",
    caseStudy: {
      slug: "vasana",
      title: "Vasana, Behavioral Genome",
      lede: "End-to-end design and product strategy for an AI-driven behavioral health platform.",
      meta: [
        { label: "Role", value: "Product design & strategy" },
        { label: "Status", value: "Live · 27,400+ members" },
        { label: "Trusted by", value: "EY, Accenture, Starbucks" },
      ],
      blocks: [
        {
          type: "paragraph",
          text: "This case study is a stub — paste in the full narrative from your local case-studies/vasana.html to replace this placeholder.",
        },
      ],
      isStub: true,
    },
  },
  {
    slug: "yuj",
    title: "yuj, a global design company",
    context: "Lead Product Designer, 2022–24",
    tag: "The foundation",
    description:
      "Spotted the gap in yuj's own website and led the fix, working directly with the CEO and CDO to rethink its IA and content strategy for real organic reach.",
    accent: "pink",
    externalUrl: "https://www.yujdesigns.com/",
    externalLabel: "Visit yuj.com",
  },
  {
    slug: "smartswipe",
    title: "SmartSwipe",
    context: "Case study",
    tag: "The foundation",
    description: "A banking journey personalized to you, designed end-to-end for a fintech context.",
    accent: "pink",
    caseStudy: {
      slug: "smartswipe",
      title: "SmartSwipe",
      lede: "A banking journey personalized to you, designed end-to-end for a fintech context.",
      meta: [],
      blocks: [
        {
          type: "paragraph",
          text: "This case study is a stub — paste in the full narrative from your local case-studies/smartswipe.html to replace this placeholder.",
        },
      ],
      isStub: true,
    },
  },
];

export const agents: AgentEntry[] = [
  {
    slug: "ai-adoption-maturity-scorer",
    title: "AI Adoption Maturity Scorer",
    pill: "Live tool · Claude API",
    description: "A live, Claude-scored maturity assessment with generated recommendations.",
    externalUrl: "https://adoption-maturity-scorer.vercel.app/",
  },
  {
    slug: "elli-pricing-signals-dashboard",
    title: "Elli Pricing Signals Dashboard",
    pill: "Live tool · Sales enablement",
    description: "Auto-updating competitive tariff tracking across five charging providers.",
    externalUrl: "https://pricing-eight-psi.vercel.app/",
  },
];

export const sideQuests: SideQuestEntry[] = [
  {
    slug: "side-quest",
    title: "Side Quest",
    description: "Pick a vibe, get an adventure.",
    externalUrl: "https://analog-adventures-now.lovable.app/",
  },
  {
    slug: "bureaucrazy-buddy",
    title: "Bureaucrazy Buddy",
    description: "Your personal guide to getting settled in Germany.",
    externalUrl: "https://bureaucrazy.lovable.app",
  },
  {
    slug: "nomerra",
    title: "From source to done.",
    description:
      "Private fund reconciliation runs on retyped numbers and quiet re-checking. Designed the screen where a fund controller decides when an AI's match is trustworthy, and when the call is theirs alone.",
    forClient: "For Nomerra",
    pill: "Concept design · Prototype",
    caseStudy: {
      slug: "nomerra",
      title: "From source to done.",
      lede: "Designing the screen where a fund controller decides when an AI's match is trustworthy.",
      meta: [{ label: "For", value: "Nomerra" }],
      blocks: [
        {
          type: "paragraph",
          text: "This case study is a stub — paste in the full narrative from your local case-studies/nomerra.html to replace this placeholder.",
        },
      ],
      isStub: true,
    },
  },
  {
    slug: "peec",
    title: "Every feature gets a seat at the table",
    description:
      "A teardown of what happens to navigation when a product grows fast, diagnosed where Peec's IA breaks under feature growth, then designed and prototyped a fix.",
    forClient: "For Peec AI",
    pill: "Navigation teardown · Product audit",
    caseStudy: {
      slug: "peec",
      title: "Every feature gets a seat at the table",
      lede: "A teardown of what happens to navigation when a product grows fast.",
      meta: [{ label: "For", value: "Peec AI" }],
      blocks: [
        {
          type: "paragraph",
          text: "This case study is a stub — paste in the full narrative from your local case-studies/peec.html to replace this placeholder.",
        },
      ],
      isStub: true,
    },
  },
];

export const allCaseStudies: CaseStudy[] = [
  ...experience.flatMap((e) => (e.caseStudy ? [e.caseStudy] : [])),
  ...sideQuests.flatMap((s) => (s.caseStudy ? [s.caseStudy] : [])),
];
