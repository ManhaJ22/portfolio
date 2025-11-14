import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    techStack: z.array(z.string()),
    github: z.string().url(),
    demo: z.string().url().optional(),
    description: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};