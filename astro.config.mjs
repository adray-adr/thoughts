import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Update `site` to your real domain before deploying (needed for RSS/SEO tags).
export default defineConfig({
  site: 'https://your-domain.vercel.app',
  integrations: [mdx()],
});
