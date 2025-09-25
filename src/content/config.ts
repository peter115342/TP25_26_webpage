import { defineCollection, z } from "astro:content";

const minutes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    date: z.date(),
    attendees: z.array(z.string()).optional(),
    location: z.string().optional(),
    topics: z.array(z.string()).optional(),
  }),
});

export const collections = {
  minutes,
};
