# Thoughts Corner

A personal notes-and-posts site, built with Astro. Markdown files are the database — no backend to run or pay for.

## Writing

- **Quick note** → add a `.md` file to `src/content/notes/`. Only `date` is required in the frontmatter.
- **Longer post** → add a `.md` file to `src/content/posts/`. Needs `title`, `date`, and `excerpt`.

Both show up together on the homepage, newest first.

## Run locally

```
npm install
npm run dev
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it in Vercel — it auto-detects Astro, no config needed.
3. Update `site` in `astro.config.mjs` to your real domain once you have one.

## Turn on comments (free, via Giscus)

1. Make sure the GitHub repo is public and has **Discussions** enabled (repo Settings → Features).
2. Go to https://giscus.app, fill in your repo name, pick the "Comments" discussion category, and it will generate config values.
3. Open `src/components/Giscus.astro` and replace the four `REPLACE_ME` values with what giscus.app gave you.

Comments will then appear on every post and note page automatically.

## Structure

```
src/content/notes/    quick entries (markdown, no title)
src/content/posts/    long-form posts (markdown, with title/excerpt/tags)
src/layouts/          page shells (Base, PostLayout)
src/components/       Giscus comments widget
src/pages/            routes: homepage feed, /posts/[slug], /notes/[slug], /about
src/styles/global.css design tokens (colors, type, spacing) in one place
```
