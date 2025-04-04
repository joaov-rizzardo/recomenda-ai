import { z } from "zod";

export const PreferenceSchema = z.object({
  mediaType: z.enum(["movie", "serie"]),
  recommendationType: z.enum(["custom", "tendencies"]),
  categories: z.array(z.number()),
  keywords: z.array(z.string()),
});

export type PreferencesType = z.infer<typeof PreferenceSchema>;
