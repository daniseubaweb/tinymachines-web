import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One markdown file per idea in src/content/ideas/. The file name is the URL: /ideas/<file-name>
const ideas = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ideas' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    icon: z.string(),
    // leave empty until the app is live; the button shows "soon on the App Store"
    appStore: z.string().url().optional(),
    color: z.enum(['paper', 'mint', 'blue', 'pink']).default('paper'),
    order: z.number().default(0),
    // false hides the idea everywhere
    published: z.boolean().default(true),
  }),
});

export const collections = { ideas };
