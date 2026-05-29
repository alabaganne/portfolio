# Ala Baganne — Portfolio + Blog (source)

Static site built with **React 18 + Babel (in-browser, no build step)**. Each `.html`
page loads React, ReactDOM and Babel from a CDN, then loads `.jsx` files as
`<script type="text/babel">`. There is no bundler, no npm, no package.json — open any
`.html` file directly in a browser and it runs.

## Pages

| File | Purpose | Scripts it loads (in order) |
|------|---------|------------------------------|
| `Portfolio.html` | Main one-page portfolio (hero, about, experience, projects, skills, education, contact) | `data.jsx`, `icons.jsx`, `app.jsx` |
| `Blog.html` | Blog listing (featured post + filterable card grid) | `icons.jsx`, `blog-data.jsx`, `blog-shared.jsx`, `blog-list.jsx` |
| `Blog Post.html` | Single article detail. Reads `?slug=<slug>` from the URL to pick the post | `icons.jsx`, `blog-data.jsx`, `blog-shared.jsx`, `blog-post.jsx` |

All pages share `styles.css`.

## Source files

- **`styles.css`** — the entire design system + all component styles. CSS custom
  properties (colors, radii, shadows) are defined at the top under `:root`.
- **`data.jsx`** — all portfolio content: profile, stats, about copy, services,
  `EXPERIENCE[]`, `PROJECTS[]`, `SKILLS[]`, `EDUCATION[]`, `CERTS[]`. Edit content here.
- **`icons.jsx`** — inline-SVG `<Icon name=…>` set, the `<ProjectThumb>` placeholder
  illustrations, and the `useReveal()` scroll-animation hook.
- **`app.jsx`** — the portfolio page components (Nav, Hero, About, Experience,
  Projects, Skills, Education, Contact) + mounts `<App>` to `#root`.
- **`blog-data.jsx`** — `POSTS[]` (list metadata) and `POST_BODY{}` (full article
  content keyed by slug). Add a post by appending to `POSTS` and, optionally, adding
  its body to `POST_BODY`.
- **`blog-shared.jsx`** — shared `BlogNav`, `BlogFooter`, themed `BlogCover` SVGs,
  and the blog reveal hook.
- **`blog-list.jsx`** — the listing page components + mount.
- **`blog-post.jsx`** — the article detail components + mount.

## Conventions / gotchas (important when editing)

- Components are shared across `.jsx` files via the global `window` scope (each Babel
  script gets its own scope, so anything reused is assigned to `window` at the bottom
  of the file that defines it). Keep that pattern if you add files.
- Do **not** name any object literal `const styles = {…}` at module scope — names are
  global and will collide. Use prefixed names (e.g. `heroStyles`) or inline styles.
- Project & blog cover images are currently inline-SVG placeholders. To use real
  images, replace `<ProjectThumb>` / `<BlogCover>` with `<img src=…>`.
- Fonts: Space Grotesk (headings), Manrope (body), JetBrains Mono (mono accents),
  loaded from Google Fonts in each HTML `<head>`.
- Colors: blue primary `#2563eb`, dark navy sections `#0b1c3a`, white background.

## Running locally

Just open `Portfolio.html` in a browser. For the blog links and `?slug=` routing to
work without CORS issues, serve the folder over a tiny static server, e.g.:

```
npx serve .
# or
python3 -m http.server
```
