import { defineCollection, z } from 'astro:content';

// Notes: quick, low-friction fragments. Just a date and body — no title required.
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

// Posts: longer, structured writing.
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, posts };
