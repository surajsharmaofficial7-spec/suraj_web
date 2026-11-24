# WordPress setup (ACF Free is enough: no Pro, no repeaters)

In every ACF field group: Settings > turn ON "Show in GraphQL" and set the "GraphQL Field Name".
Field names below are the ACF "Field Name" (snake_case). GraphQL exposes them as camelCase automatically.

## 1. Projects (already created)
CPT UI > Projects > Show in GraphQL: Yes, Single `project`, Plural `projects`.
ACF group, GraphQL name `projectFields`, location: Post Type = Projects
- description (Text Area)
- tags (Text, comma separated)
- link (URL)
- order (Number)  <- 1, 2, 3 ... decides the card order

## 2. Home page
Pages > Add New > title "Home", slug `home`, Publish.
ACF group, GraphQL name `homeFields`, location: Page = Home
- name (Text)
- email (Email)
- phone (Text)
- eyebrow (Text)
- hero_prefix (Text)   e.g. Web &
- hero_accent (Text)   e.g. graphic   (shown in grey italic)
- hero_suffix (Text)   e.g. designer.
- hero_text (Text Area)
- meta_1, meta_2, meta_3 (Text)

## 3. Stack Cards (Experience / Skills / Education)
CPT UI > Add New Post Type:
- Slug `stack_cards`, Plural label "Stack Cards", Singular "Stack Card"
- Show in GraphQL: Yes, GraphQL Single Name `stackCard`, Plural `stackCards`
- Supports: Title only
ACF group, GraphQL name `cardFields`, location: Post Type = Stack Cards
- kind (Text)       e.g. Current / Previous / Toolkit / Background
- subtitle (Text)   e.g. Graphic & Web Designer · 1 year
- layout (Select)   choices: list : List, chips : Chips
- items (Text Area) one item per line.
    layout=list  ->  Bold part | normal text      e.g. SEO | basic on-page improvements.
    layout=chips ->  one skill per line            e.g. Photoshop
- order (Number)

Add one Stack Card per block: Atnod, DG Rocket, Skills & tools, Education.

## 4. Test
Open https://YOUR-WP/graphql (GraphiQL IDE under GraphQL menu) and run:
    { page(id:"home", idType:URI){ homeFields{ heroPrefix } }  projects{ nodes{ title } }  stackCards{ nodes{ title } } }
