export type Accent = "cobalt" | "lime" | "pink";

export type CaseStudyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; eyebrow?: string; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "stats"; items: { num: string; label: string; desc: string }[] };

export type CaseStudy = {
  slug: string;
  title: string;
  lede: string;
  eyebrow?: string;
  coverImage?: string;
  coverAlt?: string;
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
  thumbnail?: string;
};

export type SideQuestEntry = {
  slug: string;
  title: string;
  description: string;
  externalUrl?: string;
  forClient?: string; // e.g. "For Nomerra"
  pill?: string;
  thumbnail?: string;
  caseStudy?: CaseStudy;
};

/**
 * Real content ported from the current live portfolio (ankitamenon.netlify.app)
 * and the full case study pages (case-studies/*.html).
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
      title: "vāsanā, Behavioral Genome",
      eyebrow: "Product design · case study · 01",
      lede: "Turning a founder's proprietary behavioral-science IP into a real, shippable product, and watching the foundation we built carry it to 27,400+ members.",
      coverImage: "/case-studies/vasana-1.jpg",
      coverAlt: "Vasana member dashboard and report, desktop and mobile",
      meta: [
        { label: "Client", value: "RedAzure" },
        { label: "Industry", value: "Mental Health, Ed-tech & HR" },
        { label: "Duration", value: "6 months" },
        { label: "Role", value: "Product Design Lead" },
      ],
      blocks: [
        { type: "heading", eyebrow: "02 / The Ask", text: "A science, not yet a product." },
        {
          type: "paragraph",
          text: "vāsanā's founders came in with real IP, a psychometric behavioral assessment built on decades of practitioner research, but no defined product, no scoped MVP, and no go-to-market. The brief was open enough to go nowhere. My job was to turn it into something a team could actually ship.",
        },
        {
          type: "quote",
          text: "Want it to be the Khan Academy for mental health and behavioural science.",
          attribution: "Founder, during discovery interviews",
        },
        { type: "heading", eyebrow: "03 / My Role", text: "Further than the pixel." },
        {
          type: "paragraph",
          text: "I was brought on as the design lead, but the real gap sat upstream of screens. Stakeholder facilitation, competitive research, scoping the MVP, and the engineering handoff didn't have another owner, so I took a lead role in continuous stakeholder engagement with the founder, product, and dev teams, driving product strategy and direction for the full six-month engagement.",
        },
        {
          type: "paragraph",
          text: "That same instinct, sensing where the real bottleneck is and picking it up, not just where the brief says \"design\", is what I now run as a PM.",
        },
        { type: "heading", eyebrow: "04 / Process", text: "Four beats, six months." },
        {
          type: "list",
          items: [
            "Discovery & scope — workshop with founder, product, and dev, scoped MVP 1, \"vāsanā for Teams,\" corporate-first.",
            "Research — stakeholder + member interviews, distilled into 5 personas mapped to real workplace friction (12 members interviewed).",
            "Definition & IA — three-tier access (Basic, Secondary, Complete) gated to onboarding progress.",
            "Visual system & delivery — five-elements visual language, end-to-end journey, shipped with engineering.",
          ],
        },
        { type: "heading", eyebrow: "05 / The Work", text: "A product members actually use." },
        {
          type: "paragraph",
          text: "Each member's vāsanā type drives everything downstream: which courses surface on their dashboard, which coach they're matched to, and how their team's composition reads to a manager. The five-elements visual system gave it one consistent face; the harder work was keeping that personalization consistent from an individual's home screen up to a manager's view across every team.",
        },
        {
          type: "image",
          src: "/case-studies/vasana-4.jpg",
          alt: "Individual member home dashboard",
          caption: "The individual home dashboard: courses, coaching, and content tailored to each member's type.",
        },
        {
          type: "image",
          src: "/case-studies/vasana-5.jpg",
          alt: "Team dashboard for managers",
          caption: "The same logic, rolled up for managers: team composition mapped from individual member types.",
        },
        {
          type: "image",
          src: "/case-studies/vasana-6.jpg",
          alt: "Manager view across teams",
          caption: "A manager's view across every team's activity, replacing scattered status checks with one feed.",
        },
        { type: "heading", eyebrow: "06 / Outcome", text: "Design Impact" },
        {
          type: "stats",
          items: [
            { num: "75%", label: "Teamwork", desc: "Increase in teamwork through leadership coaching." },
            { num: "80%", label: "Productivity", desc: "Members experienced a productivity surge via small achievement recognition." },
            { num: "7/10", label: "Communication", desc: "Members tackled communication challenges after implementation." },
            { num: "60%", label: "Process", desc: "Streamlined processes with an all-in-one platform, easing access to tools." },
          ],
        },
        { type: "heading", eyebrow: "07 / What This Proves", text: "The same instinct, a different title." },
        {
          type: "paragraph",
          text: "Research-led structure, stakeholder facilitation under ambiguity, and information architecture discipline, that's what shipped vāsanā for Teams. It's the same instinct I bring to product management now, finding the real problem before being asked to solve it.",
        },
      ],
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
    title: "SmartSwipe, Personalized Banking",
    context: "UX Design & Research",
    tag: "The foundation",
    description: "A banking journey personalized to you, designed end-to-end for a fintech context.",
    accent: "pink",
    caseStudy: {
      slug: "smartswipe",
      title: "SmartSwipe, Personalized Banking",
      eyebrow: "Product design · case study · 02",
      lede: "Your credit card already knows your spend categories. Your savings account doesn't know you at all. A one-month sprint to make IDFC Bank's two flagship products feel built for the person holding them, not the average of everyone who might.",
      coverImage: "/case-studies/smartswipe-1.jpg",
      coverAlt: "Multiple SmartSwipe app screens shown together",
      meta: [
        { label: "Client", value: "IDFC Bank" },
        { label: "Industry", value: "Banking & Finance" },
        { label: "Duration", value: "1 month" },
        { label: "Role", value: "UX Design & Research" },
      ],
      blocks: [
        { type: "heading", eyebrow: "02 / The Ask", text: "Generic cards, generic accounts." },
        {
          type: "paragraph",
          text: "IDFC Bank's credit cards and savings accounts looked like everyone else's, built for an average customer who doesn't exist. The brief: revamp the pre-sales digital experience for both products to match the personalization customers already expect everywhere else in their lives, and use it to win a new generation of Indian banking customers.",
        },
        {
          type: "quote",
          text: "Building the future of digital banking experience that aims to win over the hearts and minds of a new generation of Indians.",
          attribution: "Project brief, IDFC Bank",
        },
        { type: "heading", eyebrow: "03 / My Role", text: "Two products, one month, one researcher-designer." },
        {
          type: "paragraph",
          text: "UX design and research, solo, against a one-month clock. That meant compressing what's usually three separate workstreams (competitive and psychometric research, persona definition, and full UX for two distinct products) into a single sprint, without either product feeling like the one that got less attention.",
        },
        {
          type: "paragraph",
          text: "The constraint forced a discipline that's stayed with me since: build the personalization logic once, then let two different journeys run on it.",
        },
        { type: "heading", eyebrow: "04 / Process", text: "Four beats, four weeks." },
        {
          type: "list",
          items: [
            "Discovery & opportunity — audited competitor products, market trends, and psychometric research.",
            "Personas & focus areas — split users by what drives their money behavior; set design principles per product.",
            "Credit card strategy — a customize-and-match logic: income and occupation feed a benefits picker, a reward-points calculator, and a ranked, percentage-matched card recommendation.",
            "Designed in parallel — both flows built side by side on a shared screen library and component set.",
          ],
        },
        { type: "heading", eyebrow: "05 / The Work", text: "Two journeys, one personalization engine." },
        {
          type: "paragraph",
          text: "The credit card experience and the savings account experience needed to feel like siblings, not strangers: same trust signals, same personalization logic, different goals.",
        },
        {
          type: "image",
          src: "/case-studies/smartswipe-2.jpg",
          alt: "IDFC credit card customization form: employment, earnings, and benefits",
          caption: "Credit card — customize & match. Personalized offers shown based on benefits selection.",
        },
        {
          type: "image",
          src: "/case-studies/smartswipe-5.jpg",
          alt: "Top recommended IDFC credit cards with percentage match",
          caption: "Matched benefits: a percentage-matched view of the recommended cards against a user's picks.",
        },
        {
          type: "image",
          src: "/case-studies/smartswipe-6.jpg",
          alt: "IDFC savings account goal form: what to save for, amount, and timeline",
          caption: "Savings account — goal & match, with cross-sell into related products like an education loan.",
        },
        { type: "heading", eyebrow: "06 / Outcome", text: "Design impact" },
        {
          type: "stats",
          items: [
            { num: "2", label: "Products", desc: "Flagship credit card and savings account journeys redesigned end-to-end." },
            { num: "8", label: "Screens", desc: "Personalized touchpoints shipped to clickable prototype." },
            { num: "4 wks", label: "Timeline", desc: "From competitor research to a tested, clickable prototype." },
            { num: "1", label: "Framework", desc: "Shared personalization logic powering two different products." },
          ],
        },
        { type: "heading", eyebrow: "07 / What This Proves", text: "Same instinct, a tighter clock." },
        {
          type: "paragraph",
          text: "Same muscle as Vasana, find where a product is being generic when it should be personal, compressed into a fraction of the time, working solo end-to-end from research to final screen. That's the part that carries into product management: build the framework once, let it power more than one journey.",
        },
      ],
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
    thumbnail: "/builds/ai-adoption-scorer.webp",
  },
  {
    slug: "elli-pricing-signals-dashboard",
    title: "Elli Pricing Signals Dashboard",
    pill: "Live tool · Sales enablement",
    description: "Auto-updating competitive tariff tracking across five charging providers.",
    externalUrl: "https://pricing-eight-psi.vercel.app/",
    thumbnail: "/builds/elli-pricing-dashboard.webp",
  },
];

export const sideQuests: SideQuestEntry[] = [
  {
    slug: "side-quest",
    title: "Side Quest",
    description: "Pick a vibe, get an adventure.",
    externalUrl: "https://analog-adventures-now.lovable.app/",
    thumbnail: "/builds/side-quest.webp",
  },
  {
    slug: "bureaucrazy-buddy",
    title: "Bureaucrazy Buddy",
    description: "Your personal guide to getting settled in Germany.",
    externalUrl: "https://bureaucrazy.lovable.app",
    thumbnail: "/builds/bureaucrazy-buddy.png",
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
      eyebrow: "Self-initiated · Nomerra · 2026",
      lede: "Designing the moment AI hands work to you.",
      coverImage: "/case-studies/nomerra-1.png",
      coverAlt: "Nomerra reconcile review prototype screenshot",
      meta: [
        { label: "Role", value: "Product Design & Strategy" },
        { label: "Type", value: "Self-initiated" },
        { label: "Format", value: "Interactive prototype" },
        { label: "Domain", value: "Private markets · Fund ops" },
      ],
      blocks: [
        { type: "heading", eyebrow: "The problem space", text: "A rhythm nobody sees." },
        {
          type: "paragraph",
          text: "Private market fund administration runs on invisible labour. Capital calls land in inboxes. Bank statements arrive in portals. Journal entries get retyped into systems that don't talk to each other. Nomerra's agents capture from all sources, match and reconcile, and prepare journal entries — so the job becomes deciding, not re-entering. That decision moment is what this design is for.",
        },
        { type: "heading", eyebrow: "Thinking in systems, not screens", text: "What earns the right to interrupt?" },
        {
          type: "paragraph",
          text: "Not every matched transaction does. The routing logic uses two variables — AI confidence and dollar materiality — combined to produce four distinct cases, and four distinct experiences.",
        },
        {
          type: "list",
          items: [
            "Low confidence · high amount → \"Needs your judgment now\": interrupts, requires an active decision before anything moves.",
            "High confidence · high amount → \"Confirm individually\": materiality means accountability regardless of model confidence, still requires sign-off.",
            "High confidence · low amount → \"Ready to batch\": near-frictionless, approve all in one action, expandable for any that warrant a look.",
            "Low confidence · low amount → \"Flagged, low impact\": collapsible, available when convenient, not surfaced as urgent.",
          ],
        },
        { type: "heading", eyebrow: "Two surfaces, not one", text: "The division isn't a design preference." },
        {
          type: "paragraph",
          text: "It's the answer to the question the workflow was already asking. Surface A — \"needs your judgment now\" — is low-confidence, high-value items where the AI has done the heavy lifting but the final call is yours; small in count, never populated for long. Surface B — \"review when convenient\" — is everything else, sorted by what it actually needs: high-confidence items confirm individually if material, low-value matches batch in a single action.",
        },
        { type: "heading", eyebrow: "Design decisions", text: "What the interface makes visible." },
        {
          type: "list",
          items: [
            "Confidence rings — a radial indicator that fills to the AI's confidence and shifts colour at the threshold, readable in a glance rather than a read.",
            "Provenance trace — not a summary of what the agent found, but an actual three-node chain from bank account to source document to ledger entry, collapsed by default, one tap away when trust needs to be earned.",
            "Resolve motion — items fold out rather than vanish; the audit trail entry arrives a beat after, cause and effect as a sequence.",
          ],
        },
        { type: "heading", eyebrow: "Scope decisions", text: "The discipline is in what gets cut." },
        {
          type: "list",
          items: [
            "No bulk-approve across the judgment tier — surfacing those items individually is the point; a bulk action would undo the interface's own logic.",
            "No inline editing of agent output — correcting a match inside the review view creates a second source of truth before the matching logic has earned that kind of trust.",
            "No zero-touch auto-approve, even for the highest-confidence tier — Nomerra's own language is \"you review, you approve.\" Removing the action entirely contradicts the product's promise.",
          ],
        },
        {
          type: "paragraph",
          text: "What I'd instrument from day one: dwell time per item before approval, investigate-to-approve ratio by transaction category, and any item that gets undone within a session. Those three signals would tell more about where the interface is failing you than any amount of upfront assumption.",
        },
        { type: "heading", text: "From source to done." },
        {
          type: "paragraph",
          text: "This is one screen of one workflow in one product. But building it meant working through the same questions Nomerra works through every day: where does the AI earn trust, and where does the call belong to you.",
        },
      ],
      isStub: false,
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
      eyebrow: "Peec AI · Navigation teardown",
      lede: "A teardown of what happens to navigation when a product grows fast.",
      coverImage: "/case-studies/peec-1.png",
      coverAlt: "Peec AI dashboard overview",
      meta: [{ label: "For", value: "Peec AI" }],
      blocks: [
        { type: "heading", eyebrow: "What's currently happening", text: "Peec AI is shipping fast." },
        { type: "paragraph", text: "Chats. Agent Analytics. AI Shopping. All in months, not years." },
        { type: "heading", eyebrow: "The problem — 01", text: "Open the sidebar. Feel your eyes struggle." },
        {
          type: "image",
          src: "/case-studies/peec-2.png",
          alt: "Peec AI collapsed sidebar showing 22 navigation items",
          caption: "22 icons. Same size, same weight, same color.",
        },
        {
          type: "paragraph",
          text: "Nothing here is wrong on its own. Every item is useful. But stacked together, with equal visual weight, the sidebar stops being a tool and starts being a wall.",
        },
        { type: "heading", eyebrow: "The problem — 02", text: "Collapse the sidebar. Now you're guessing." },
        {
          type: "image",
          src: "/case-studies/peec-3.png",
          alt: "Peec AI collapsed sidebar showing only icons, no labels",
          caption: "No groups. No priority. No system.",
        },
        {
          type: "paragraph",
          text: "Labels gave each item a name. Take them away and what's left is a flat list pretending to be a structure. Nothing here tells you what to check first, what's related, or what's just noise.",
        },
        { type: "heading", eyebrow: "The problem — 03", text: "Two different pages. One name." },
        {
          type: "image",
          src: "/case-studies/peec-4.png",
          alt: "Two sidebar rows both labeled Overview, each marked with an arrow",
          caption: "Same label. Different destinations.",
        },
        {
          type: "paragraph",
          text: "A user scanning this sidebar has no way to know which \"Overview\" they already checked. They click one, see a chart, assume that's the whole picture, and never find the other one. Support tickets start with \"I already looked at Overview.\" They're not lying. They just found the wrong one.",
        },
        { type: "heading", eyebrow: "The stakes — 04", text: "This doesn't scale. It just grows." },
        {
          type: "paragraph",
          text: "22 icons today — what about 30? Peec is shipping new features every few months. The sidebar has no plan for where the next one goes.",
        },
        { type: "heading", eyebrow: "The reframe — 05", text: "A structured pathway. Every feature answers one question." },
        {
          type: "list",
          items: [
            "Monitor — what's happening right now?",
            "Diagnose — why is it happening?",
            "Act — what do I do about it?",
            "Configure — how does this account work?",
          ],
        },
        { type: "heading", eyebrow: "The solution — 06", text: "Same product. Same features. Fewer things to parse." },
        {
          type: "image",
          src: "/case-studies/peec-5.png",
          alt: "Redesigned Peec AI sidebar grouped into Monitor, Diagnose, Act, and Configure",
        },
        {
          type: "paragraph",
          text: "Nothing was removed. Every feature still has a home, it just has a clearer one. The goal isn't fewer options. It's helping users navigate to what actually brings them value.",
        },
        { type: "heading", eyebrow: "The solution — 07", text: "Act & Configure stay out of the way until you need them." },
        {
          type: "paragraph",
          text: "Collapsed by default, so they don't compete with Monitor and Diagnose. One click reveals Earned, Owned, and Impact, and the rest of the nav makes room.",
        },
        { type: "heading", eyebrow: "The stakes — 08", text: "More features. More decisions. More fatigue." },
        {
          type: "paragraph",
          text: "Growth isn't optional. But unmanaged growth has a cost, paid by the user, in confusion, and eventually by the team, in a redesign that's harder than this one. That's solvable, but only with UX thinking applied early, not bolted on later.",
        },
        { type: "heading", eyebrow: "Closing — 09", text: "Every feature deserves a seat at the table. So does this thinking." },
        {
          type: "paragraph",
          text: "This is thinking I bring to a team, close to the product, close to the user, before the cost of fixing it gets any higher. This took a few hours. I have ideas for a lot more.",
        },
      ],
      isStub: false,
    },
  },
];

export const allCaseStudies: CaseStudy[] = [
  ...experience.flatMap((e) => (e.caseStudy ? [e.caseStudy] : [])),
  ...sideQuests.flatMap((s) => (s.caseStudy ? [s.caseStudy] : [])),
];
