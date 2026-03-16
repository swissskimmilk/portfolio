import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    slug: z.string().optional(),
    order: z.number().optional(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    linkToPage: z.boolean().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
  }),
});

export const collections = { projects, about };
