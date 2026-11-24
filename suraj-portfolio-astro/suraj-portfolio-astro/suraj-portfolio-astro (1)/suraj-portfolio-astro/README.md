# Suraj Sharma: Astro + Headless WordPress Portfolio

## Run
    npm install
    cp .env.example .env   # add WP_GRAPHQL_URL
    npm run dev

If WordPress is not connected (or a field is empty), the site falls back to the defaults in src/data/content.ts.

## What is editable from WordPress
| Website section             | Where in WP admin                |
|-----------------------------|----------------------------------|
| Hero text, contact details  | Pages > Home (ACF: homeFields)   |
| Project cards (horizontal)  | Projects (ACF: projectFields)    |
| Experience / Skills / Edu   | Stack Cards (ACF: cardFields)    |

See WORDPRESS-SETUP.md for the exact fields.

## Deploy
Static build. Rebuild on every WP change using a deploy hook / GitHub Action (see Cloudways notes).
