export interface ProcessStep { number: string; title: string; description: string; tags: string[] }
export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "We learn your business, goals and audience to shape a clear brief and plan.", tags: ["Brief", "Research", "Strategy"] },
  { number: "02", title: "Design", description: "We craft intuitive interfaces and cohesive visuals that elevate the user experience.", tags: ["UI Design", "UX Design", "Visual System"] },
  { number: "03", title: "Development", description: "We build fast, clean, scalable solutions with modern, well-tested code.", tags: ["Frontend", "Backend", "QA"] },
  { number: "04", title: "Implementation", description: "We integrate solutions smoothly into workflows to ensure efficiency and adoption.", tags: ["Setup", "Configuration", "Automation"] },
  { number: "05", title: "Launch & Growth", description: "We go live, measure results and keep optimizing for performance and growth.", tags: ["Deployment", "Analytics", "Support"] },
];
