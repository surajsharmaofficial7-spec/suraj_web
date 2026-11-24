import { defineConfig } from "astro/config";

// Static output: WordPress data is fetched at build time.
// Rebuild on WP publish via a webhook (Vercel/Netlify deploy hook).
export default defineConfig({ output: "static" });
