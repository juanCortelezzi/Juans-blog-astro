import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    // image: z.object({ src: z.string(), alt: z.string() }),
    image: z.string(),
    date: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  blogs: blogCollection,
};
