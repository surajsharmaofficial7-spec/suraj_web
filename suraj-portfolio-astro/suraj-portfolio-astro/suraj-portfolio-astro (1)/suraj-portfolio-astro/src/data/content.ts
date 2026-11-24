export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  order?: number;
};

export type Home = {
  name: string; email: string; phone: string;
  eyebrow: string; heroPrefix: string; heroAccent: string; heroSuffix: string;
  heroText: string; meta1: string; meta2: string; meta3: string;
};

// Used when WordPress is not connected yet (or a field is empty).
export const fallbackHome: Home = {
  name: "Suraj Sharma",
  email: "surajsharmaofficial7@gmail.com",
  phone: "+91 79884 21657",
  eyebrow: "Portfolio · 2026 · Sirsa, India",
  heroPrefix: "Web &",
  heroAccent: "graphic",
  heroSuffix: "designer.",
  heroText: "I design clean, responsive WordPress websites and brand creatives that help small businesses look sharp and perform better online.",
  meta1: "1+ year experience",
  meta2: "WordPress · Elementor · HTML/CSS",
  meta3: "Available for projects",
};

// Used when WordPress is not connected yet (or the request fails).
export const fallbackProjects: Project[] = [
  { title: "Modern Edge", description: "Responsive business website designed and developed end to end.", tags: ["WordPress", "Elementor", "HTML/CSS"], link: "https://modernedge.in" },
  { title: "Sunshine Seeds", description: "Responsive layouts with a focus on a smooth user experience.", tags: ["WordPress", "UX", "Responsive"], link: "https://sunshineseeds.in" },
  { title: "Upliquidation", description: "Responsive web pages with custom-built Elementor sections.", tags: ["Elementor", "Custom sections"], link: "https://upliquidation.com" },
  { title: "Brand Builder Studio", description: "Brand-led web presence for a creative studio.", tags: ["Branding", "Web design"], link: "https://brandbuilder.studio" },
];

export type StackCard = {
  kind: string;
  title: string;
  sub?: string;
  layout: "list" | "chips";
  items: { b?: string; t: string }[];
  order?: number;
};

const L = (lines: string[]) => lines.map((x) => { const [b, ...r] = x.split("|"); return r.length ? { b: b.trim(), t: r.join("|").trim() } : { t: b.trim() }; });

export const fallbackStack: StackCard[] = [
  { kind: "Current", title: "Atnod", sub: "Graphic & Web Designer · 1 year", layout: "list", items: L([
    "Responsive sites|built WordPress websites with Elementor.",
    "Creatives|banners, social media posts and website graphics.",
    "Custom code|tuned pages with HTML & CSS.",
    "SEO|basic on-page improvements."]) },
  { kind: "Previous", title: "DG Rocket", sub: "Graphic & Web Designer Intern · 6 months", layout: "list", items: L([
    "Websites|responsive builds in WordPress (Elementor).",
    "Landing pages|business sites and campaign pages.",
    "Marketing|creatives in Canva and Photoshop.",
    "Upkeep|maintenance and content updates."]) },
  { kind: "Toolkit", title: "Skills & tools", layout: "chips", items: L(["Web Design", "Graphic Design", "WordPress", "Elementor", "HTML & CSS", "Photoshop", "Illustrator", "Canva", "ChatGPT", "Basic SEO"]) },
  { kind: "Background", title: "Education", layout: "list", items: L([
    "B.Com|Govt. National College (2021–2024)",
    "Diploma|Digital Marketing",
    "12th|Central Senior Secondary School, 90%",
    "10th|Jai Shree High School, 84%",
    "Languages|Hindi, English"]) },
];
