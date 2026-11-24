# Suraj Sharma: Astro + Headless WordPress Portfolio

## Run
    npm install
    cp .env.example .env   # add your WP_GRAPHQL_URL
    npm run dev

Without WP_GRAPHQL_URL, the site uses the fallback projects in src/data/content.ts.

## WordPress setup
1. Install plugins: WPGraphQL, Advanced Custom Fields (ACF), WPGraphQL for ACF, and optionally CPT UI.
2. Create a custom post type "Projects" with GraphQL Single Name `project`, Plural Name `projects`, and Show in GraphQL on.
3. Create an ACF field group with GraphQL field name `projectFields`, assigned to Projects:
   - description (Text area)
   - tags (Text, comma separated, e.g. WordPress, Elementor)
   - link (URL)
   - order (Number)
4. Add your projects and set WP_GRAPHQL_URL=https://your-site.com/graphql

## Deploy
Vercel or Netlify (build: `npm run build`, output: `dist`). Add a deploy-hook webhook in WordPress
(WP Webhooks plugin) on post publish/update so the site rebuilds automatically.

## Where to edit
- Experience, skills, education: src/data/content.ts
- Animations: src/scripts/animations.ts
- Colors and styles: src/styles/global.css
