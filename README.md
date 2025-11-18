**Blog Project**

This is a simple blog built with Next.js. It includes a small set of components, a blog post page, and mock data used for development.

**Quick Links**
- **Source:** `src/`
- **Pages:** `src/pages/`
- **Styles:** `src/styles/` (see `color.css` for design tokens)

**Features**
- Article listing and single article page (`src/pages/blog/[slug].tsx`).
- Components for comments, authors, explore list and a simple editor.
- Uses a local mock dataset for development in `posts/mock.json` and `posts/mock.ts`.

**Prerequisites**
- Node.js (LTS recommended)
- npm, yarn or pnpm

**Install**

Open a terminal in the project root and run (cmd):

```cmd
npm install
```

**Run (development)**

```cmd
npm run dev
```

Open http://localhost:3000 in your browser.

**Build and Start (production)**

```cmd
npm run build
npm start
```

**Project Structure (important files)**
- `src/pages/` — Next.js pages (routing)
- `src/components/` — React components used across pages
- `src/styles/color.css` — Centralized CSS variables (colors/tokens)
- `src/styles/BlogPost.module.css` — Post-specific styles (now uses `color.css` variables)
- `posts/mock.json` — JSON mock dataset you can import directly
- `posts/mock.ts` — TypeScript mock module exporting the same mock data

**Using the mock data**

You can use the included mock data during development for pages and components. Examples:

Import the JSON directly:

```ts
import posts from '../posts/mock.json';

export async function getStaticProps() {
	return { props: { posts } };
}
```

Or import from the TypeScript module (if it exports named/ default exports):

```ts
import { mockPosts } from '../posts/mock';
```

Feel free to extend `posts/mock.json` to add extra articles, authors, or comments. The project reads the data locally for examples and development.

**Styling / Design tokens**

- All color tokens live in `src/styles/color.css`. Edit that file to change core colors across the blog.
- `src/styles/BlogPost.module.css` was refactored to use `var(--...)` values from `color.css`.

**Tips & Notes**
- When editing components or pages, Next.js will hot-reload the dev server.
- If you add TypeScript types to `posts/mock.ts`, you can improve type-safety for components consuming the mock data.
- Consider normalizing tokens in `color.css` if you plan to support theming (dark/light).

**Contributing / Next steps**
- Convert other stylesheets to use `color.css` variables for consistent theming.
- Add more example posts to `posts/mock.json` and update `src/lib/posts.ts` if needed.

**License**
- This repository doesn't include a license by default. Add one (e.g., MIT) if you intend to publish or share.

---

If you'd like, I can also:
- Convert other CSS files (`Home.module.css`, `globals.css`, etc.) to use the same variables.
- Create a short style token reference file documenting each `--` variable and their intended usage.
