export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const pricingContent = {
  eyebrow: "Pricing",
  heading: "Simple plans, honest prices",
  subtext: "Start small or go fully custom — every plan is designed, built and supported by the same senior team.",
  plans: [
    {
      id: "basic",
      name: "Basic",
      price: "$149",
      period: "per project",
      tagline: "For founders who need a clean, fast presence online.",
      features: ["Single-page landing or brochure site", "Mobile-responsive build", "Basic on-page SEO", "Contact form + WhatsApp link", "1 revision round", "Delivery in ~7 days"],
      cta: "Start with Basic",
    },
    {
      id: "business",
      name: "Business",
      price: "$249",
      period: "per project",
      tagline: "For growing brands that need to sell, not just show.",
      features: ["Up to 5 pages or full product setup", "Shopify or CMS integration", "Performance & SEO optimization", "Analytics + ad pixel setup", "3 revision rounds", "Delivery in ~14 days"],
      cta: "Start with Business",
      featured: true,
    },
    {
      id: "custom",
      name: "Custom Project",
      price: "Custom",
      tagline: "For products that need their own roadmap.",
      features: ["Web, app or full e-commerce build", "Custom functionality & integrations", "Dedicated team & weekly demos", "Ongoing support & maintenance", "Tailored quote within 24h"],
      cta: "Get a quote",
    },
  ] satisfies PricingPlan[],
};
