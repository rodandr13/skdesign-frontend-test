import { z } from "zod";

export const personSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\(\d{3}\)\d{3}-\d{2}-\d{2}$/),
  address: z
    .array(
      z.object({
        streetAddress: z.string().optional().default(""),
        city: z.string().optional().default(""),
        state: z.string().optional().default(""),
        zip: z.string().optional().default(""),
      })
    )
    .optional()
    .default([]),
  description: z.string().optional().default(""),
});

export type Person = z.infer<typeof personSchema>;
