import { z } from "zod";

export const markdownFrontmatterValidator = z
  .object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.string(),
  })
  .transform((frontmatter) => {
    return { ...frontmatter, date: new Date() };
  });

export type MarkdownFrontmatter = z.input<typeof markdownFrontmatterValidator>;
export type MarkdownFrontmatterOut = z.output<
  typeof markdownFrontmatterValidator
>;

// tailwind className string builder
export const classNames = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");
