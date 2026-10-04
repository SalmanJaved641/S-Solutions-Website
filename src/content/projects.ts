export interface Project { id: string; name: string; category: string; description: string; tags: string[] }
export const projects: Project[] = [
  { id: "northline", name: "Northline Atelier", category: "Concept Shopify store", description: "A fashion commerce concept focused on editorial merchandising and a frictionless path to checkout.", tags: ["Shopify", "E-commerce"] },
  { id: "morrow", name: "Morrow Home", category: "Concept Shopify store", description: "A calm home-goods storefront demonstrating collection discovery and product storytelling.", tags: ["Shopify", "UX"] },
  { id: "signal", name: "Signal Desk", category: "Concept SaaS dashboard", description: "A focused analytics workspace designed to make complex operational data easier to act on.", tags: ["React", "Dashboard"] },
  { id: "fieldwork", name: "Fieldwork Studio", category: "Concept agency site", description: "A polished corporate presence balancing clear service information with confident visual direction.", tags: ["Web", "Brand"] },
  { id: "stride", name: "Stride Daily", category: "Concept fitness app", description: "A mobile product concept for simple habit tracking, guided routines and daily momentum.", tags: ["App", "UI/UX"] },
  { id: "funnel", name: "Orbit Funnel", category: "Demo campaign", description: "A demonstration funnel showing campaign structure, retargeting stages and clear performance reporting.", tags: ["Meta Ads", "Strategy"] },
];
