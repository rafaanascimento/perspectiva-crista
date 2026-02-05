import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    authorId: z.string(),
    coverImage: z.string().url(),
    excerpt: z.string(),
  }),
});

export const collections = { posts };
