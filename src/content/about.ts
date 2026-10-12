export interface AboutStat { value: number; suffix?: string; label: string }
export interface AboutPrinciple { index: string; title: string; body: string }
export interface AboutContent {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lead: string;
  paragraphs: string[];
  quote: string;
  quoteAttribution: string;
  signature: string;
  stats: AboutStat[];
  principles: AboutPrinciple[];
}

export const aboutContent: AboutContent = {
  eyebrow: "About",
  title: "A studio that ships",
  titleAccent: "like it owns the outcome.",
  lead: "S Solutions is a digital studio in Lahore, Pakistan. We design, build and grow web products, Shopify stores and mobile apps for founders who measure success in revenue — not screenshots.",
  paragraphs: [
    "We started from a simple frustration: too many agencies hand over a beautiful website that nobody can maintain, rank or actually sell with. So we built the opposite — a team where designers read analytics, developers sit in on brand reviews, and marketers argue about typography.",
    "Every engagement runs like a product, not a deliverable. Real roadmaps, weekly demos, code you own outright, and a launch plan that keeps working long after the invoice is paid.",
    "We stay deliberately small. Senior people only, no silent hand-offs to a bench you never met, and a hard cap on concurrent clients so the work stays sharp.",
  ],
  quote: "Good work is a conversation, not a hand-off.",
  quoteAttribution: "How we run every engagement",
  signature: "— The S Solutions team, Lahore",
  stats: [
    { value: 120, suffix: "+", label: "Projects shipped" },
    { value: 8, suffix: " yrs", label: "In the craft" },
    { value: 14, label: "Countries served" },
    { value: 98, suffix: "%", label: "Clients who return" },
  ],
  principles: [
    { index: "01", title: "Speed is a feature", body: "We ship in weeks, not quarters. Momentum compounds — slow projects die of boredom long before they die of bugs." },
    { index: "02", title: "Own the outcome", body: "We don't vanish at launch. We watch the numbers, fix what underperforms and keep iterating until the curve bends." },
    { index: "03", title: "Craft over volume", body: "Fewer clients, deeper work. Every pixel, query and paragraph gets a second pair of eyes before it ships." },
    { index: "04", title: "No black boxes", body: "You own the code, the accounts and the roadmap. Transparency is our default setting, not a paid extra." },
  ],
};
