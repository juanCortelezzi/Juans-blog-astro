import { z } from "zod";

export const mdxFrontmatterValidator = z
  .object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.string(),
  })
  .transform((frontmatter) => {
    return { ...frontmatter, date: new Date() };
  });

export type MDXFrontmatterIn = z.input<typeof mdxFrontmatterValidator>;

export type MDXFrontmatterOut = z.output<typeof mdxFrontmatterValidator>;

// tailwind className string builder
export const classNames = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");
