import { fallbackProjects, fallbackHome, fallbackStack, type Project, type Home, type StackCard } from "../data/content";

const endpoint = import.meta.env.WP_GRAPHQL_URL;

async function gql<T>(query: string): Promise<T | null> {
  if (!endpoint) return null;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const json = await res.json();
    if (json.errors) console.warn("GraphQL errors:", JSON.stringify(json.errors));
    return json.data ?? null;
  } catch (e) {
    console.warn("WordPress fetch failed, using fallback data.", e);
    return null;
  }
}

const byOrder = (a: { order?: number }, b: { order?: number }) => (a.order ?? 99) - (b.order ?? 99);
const lines = (s?: string) => (s ?? "").split(/\r?\n/).map((x) => x.trim()).filter(Boolean);

/* 1. PROJECTS  (CPT: projects, ACF group graphql name: projectFields) */
export async function getProjects(): Promise<Project[]> {
  const data = await gql<any>(`{ projects(first: 30) { nodes { title projectFields { description tags link order } } } }`);
  const nodes = data?.projects?.nodes ?? [];
  if (!nodes.length) return fallbackProjects;
  return nodes
    .map((n: any) => ({
      title: n.title,
      description: n.projectFields?.description ?? "",
      tags: (n.projectFields?.tags ?? "").split(",").map((t: string) => t.trim()).filter(Boolean),
      link: n.projectFields?.link ?? "#",
      order: n.projectFields?.order ?? 99,
    }))
    .sort(byOrder);
}

/* 2. HOME  (Page with slug "home", ACF group graphql name: homeFields) */
export async function getHome(): Promise<Home> {
  const data = await gql<any>(`{ page(id: "home", idType: URI) { homeFields {
    name email phone eyebrow heroPrefix heroAccent heroSuffix heroText meta1 meta2 meta3 } } }`);
  const f = data?.page?.homeFields;
  if (!f) return fallbackHome;
  const out: any = { ...fallbackHome };
  for (const k of Object.keys(fallbackHome)) if (f[k]) out[k] = f[k]; // empty field -> keep fallback
  return out as Home;
}

/* 3. EXPERIENCE / SKILLS / EDUCATION CARDS  (CPT: stack_cards, ACF group: cardFields) */
export async function getStack(): Promise<StackCard[]> {
  const data = await gql<any>(`{ stackCards(first: 20) { nodes { title cardFields { kind subtitle layout items order } } } }`);
  const nodes = data?.stackCards?.nodes ?? [];
  if (!nodes.length) return fallbackStack;
  return nodes
    .map((n: any) => ({
      kind: n.cardFields?.kind ?? "",
      title: n.title,
      sub: n.cardFields?.subtitle ?? "",
      layout: n.cardFields?.layout === "chips" ? "chips" : "list",
      items: lines(n.cardFields?.items).map((l) => {
        const [b, ...r] = l.split("|");
        return r.length ? { b: b.trim(), t: r.join("|").trim() } : { t: b.trim() };
      }),
      order: n.cardFields?.order ?? 99,
    }))
    .sort(byOrder);
}
