export interface ToolItem {
  name: string;
  category: string;
  logo: string;
}

export const toolLogos: Record<string, string> = {
  Webflow: "/images/toolkit/webflow.png",
  Slack: "/images/toolkit/slack.png",
  ChatGPT: "/images/toolkit/chatgpt.png",
  Clarity: "/images/toolkit/clarity.jpg",
  "Microsoft Clarity": "/images/toolkit/clarity.jpg",
  Dovetail: "/images/toolkit/dovetail.png",
  Lottie: "/images/toolkit/lottie.png",
  WordPress: "/images/toolkit/wordpress.png",
  "VS Code": "/images/toolkit/vscode.jpg",
  "Visual Studio Code": "/images/toolkit/vscode.jpg",
  "Adobe XD": "/images/toolkit/adobexd.png",
  Maze: "/images/toolkit/maze.png",
  Miro: "/images/toolkit/miro.png",
  Hotjar: "/images/toolkit/hotjar.png",
  Notion: "/images/toolkit/notion.png",
  Spline: "/images/toolkit/spline.jpg",
  Framer: "/images/toolkit/framer.png",
  Figma: "/images/toolkit/figma.png",
};

export const toolkitRows: ToolItem[][] = [
  [["Figma", "UI Design"], ["Framer", "Web Design"], ["Spline", "3D Design"], ["Notion", "Docs & PM"]],
  [["Maze", "UX Research"], ["Webflow", "No-code Dev"], ["Hotjar", "User Analytics"], ["Miro", "Collaboration"]],
  [["Lottie", "Animation"], ["Adobe XD", "UI Design"], ["VS Code", "Code Editor"], ["WordPress", "CMS & Web"]],
  [["Clarity", "Behaviour Analytics"], ["Slack", "Team Comms"], ["ChatGPT", "AI Assistant"], ["Dovetail", "Research Mgmt"]],
].map((row) =>
  row.map(([name, category]) => ({
    name,
    category,
    logo: toolLogos[name] ?? `/images/toolkit/${name.toLowerCase().replace(/\s+/g, "")}.png`,
  }))
);
