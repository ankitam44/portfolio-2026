export type Category = "experience" | "agents" | "side-quests";

export type CaseStudyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] };

export type TimelineEntry = {
  slug: string;
  category: Category;
  title: string;
  org?: string;
  start: string; // e.g. "2024" or "2024-03"
  end?: string; // omit for ongoing
  summary: string;
  tags?: string[];
  /** External link to the live product/site, if this entry points out instead of to a case study. */
  externalUrl?: string;
  /** Set true to render a case study page at /work/[slug]. */
  hasCaseStudy?: boolean;
  caseStudy?: {
    role?: string;
    year?: string;
    coverImage?: string;
    blocks: CaseStudyBlock[];
  };
};

/**
 * PLACEHOLDER DATA — replace with real content.
 * Categories map to the three timeline lanes: Experience, Agents I've dabbled on, Side Quests.
 */
export const timeline: TimelineEntry[] = [
  {
    slug: "example-role",
    category: "experience",
    title: "Product Designer",
    org: "Company Name",
    start: "2023",
    summary:
      "Replace with a one- or two-line summary of what you owned and shipped in this role.",
    tags: ["Product Design", "0→1"],
    hasCaseStudy: true,
    caseStudy: {
      role: "Product Designer",
      year: "2023",
      blocks: [
        { type: "paragraph", text: "Replace with the case study narrative." },
      ],
    },
  },
  {
    slug: "example-agent",
    category: "agents",
    title: "Example Agent Project",
    start: "2025",
    summary: "Replace with what this agent does and why you built it.",
    tags: ["LLM", "Automation"],
    externalUrl: "https://example.com",
  },
  {
    slug: "example-side-quest",
    category: "side-quests",
    title: "Example Side Quest",
    start: "2024",
    summary: "Replace with a short description of this experiment or project.",
    tags: ["Experiment"],
  },
];

export const categoryLabels: Record<Category, string> = {
  experience: "Experience",
  agents: "Agents I've dabbled on",
  "side-quests": "Side Quests",
};
