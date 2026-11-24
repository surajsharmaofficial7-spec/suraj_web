export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  order?: number;
};

export const profile = {
  name: "Suraj Sharma",
  email: "surajsharmaofficial7@gmail.com",
  phone: "+91 79884 21657",
  location: "Sirsa, India",
};

// Used when WordPress is not connected yet (or the request fails).
export const fallbackProjects: Project[] = [
  { title: "Modern Edge", description: "Responsive business website designed and developed end to end.", tags: ["WordPress", "Elementor", "HTML/CSS"], link: "https://modernedge.in" },
  { title: "Sunshine Seeds", description: "Responsive layouts with a focus on a smooth user experience.", tags: ["WordPress", "UX", "Responsive"], link: "https://sunshineseeds.in" },
  { title: "Upliquidation", description: "Responsive web pages with custom-built Elementor sections.", tags: ["Elementor", "Custom sections"], link: "https://upliquidation.com" },
  { title: "Brand Builder Studio", description: "Brand-led web presence for a creative studio.", tags: ["Branding", "Web design"], link: "https://brandbuilder.studio" },
];

export type StackCard =
  | { kind: string; title: string; sub?: string; list: { b: string; t: string }[] }
  | { kind: string; title: string; chips: string[] };

export const stack: StackCard[] = [
  { kind: "Current", title: "Atnod", sub: "Graphic & Web Designer · 1 year", list: [
    { b: "Responsive sites", t: "built WordPress websites with Elementor." },
    { b: "Creatives", t: "banners, social media posts and website graphics." },
    { b: "Custom code", t: "tuned pages with HTML & CSS." },
    { b: "SEO", t: "basic on-page improvements." } ] },
  { kind: "Previous", title: "DG Rocket", sub: "Graphic & Web Designer Intern · 6 months", list: [
    { b: "Websites", t: "responsive builds in WordPress (Elementor)." },
    { b: "Landing pages", t: "business sites and campaign pages." },
    { b: "Marketing", t: "creatives in Canva and Photoshop." },
    { b: "Upkeep", t: "maintenance and content updates." } ] },
  { kind: "Toolkit", title: "Skills & tools", chips: ["Web Design", "Graphic Design", "WordPress", "Elementor", "HTML & CSS", "Photoshop", "Illustrator", "Canva", "ChatGPT", "Basic SEO"] },
  { kind: "Background", title: "Education", list: [
    { b: "B.Com", t: "Govt. National College (2021–2024)" },
    { b: "Diploma", t: "Digital Marketing" },
    { b: "12th", t: "Central Senior Secondary School, 90%" },
    { b: "10th", t: "Jai Shree High School, 84%" },
    { b: "Languages", t: "Hindi, English" } ] },
];
