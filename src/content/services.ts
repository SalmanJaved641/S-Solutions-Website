export interface Service { id: string; title: string; description: string; offers: string[] }
export const services: Service[] = [
  { id: "web", title: "Web Development", description: "Custom, high-performance websites built with clean code and tailored to scale your business.", offers: ["Full-stack dev", "Frontend build", "Custom code", "Speed optimization"] },
  { id: "shopify", title: "Shopify E-Commerce", description: "High-converting online stores built to maximize sales, streamline checkout, and scale revenue.", offers: ["Store setup", "Theme customization", "App integration", "Product listings"] },
  { id: "marketing", title: "Performance Marketing", description: "Data-driven advertising campaigns engineered to capture attention and lower acquisition costs.", offers: ["Meta Ads (FB & IG)", "Campaign strategy", "Retargeting funnels", "ROAS optimization"] },
  { id: "apps", title: "App Development", description: "Fast, intuitive mobile apps for Android and iOS, designed and engineered to keep users engaged.", offers: ["Android/iOS apps", "Cross-platform apps", "App UI/UX", "Google AdSense"] },
];
export const stackedServices = services;
