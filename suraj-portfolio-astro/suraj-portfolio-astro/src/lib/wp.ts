import { fallbackProjects, type Project } from "../data/content";

const endpoint = import.meta.env.WP_GRAPHQL_URL;

// Expects a "projects" custom post type (GraphQL names: project / projects)
// with an ACF field group exposed as "projectFields":
//   description (text), tags (text, comma separated), link (url), order (number)
const QUERY = `
  query Projects {
    projects(first: 20) {
      nodes {
        title
        projectFields { description tags link order }
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  if (!endpoint) return fallbackProjects;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
    });
    const json = await res.json();
    const nodes = json?.data?.projects?.nodes ?? [];
    if (!nodes.length) return fallbackProjects;
    return nodes
      .map((n: any) => ({
        title: n.title,
        description: n.projectFields?.description ?? "",
        tags: (n.projectFields?.tags ?? "").split(",").map((t: string) => t.trim()).filter(Boolean),
        link: n.projectFields?.link ?? "#",
        order: n.projectFields?.order ?? 99,
      }))
      .sort((a: Project, b: Project) => (a.order ?? 99) - (b.order ?? 99));
  } catch (e) {
    console.warn("WordPress fetch failed, using fallback data.", e);
    return fallbackProjects;
  }
}
