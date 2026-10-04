export interface ToolItem { name: string; category: string }
export const toolkitRows: ToolItem[][] = [
  [["Figma", "UI Design"], ["Framer", "Web Design"], ["Spline", "3D Design"], ["Notion", "Docs & PM"]],
  [["Maze", "UX Research"], ["Webflow", "No-code Dev"], ["Hotjar", "User Analytics"], ["Miro", "Collaboration"]],
  [["Lottie", "Animation"], ["Adobe XD", "UI Design"], ["VS Code", "Code Editor"], ["WordPress", "CMS & Web"]],
  [["Clarity", "Behaviour Analytics"], ["Slack", "Team Comms"], ["ChatGPT", "AI Assistant"], ["Dovetail", "Research Mgmt"]],
].map((row) => row.map(([name, category]) => ({ name, category })));
