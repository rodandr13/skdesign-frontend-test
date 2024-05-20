import { z } from "zod";

export const addressSchema = z.object({
  streetAddress: z.string(),
  city: z.string(),
  zip: z.string(),
  state: z.string(),
});

export const personSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\(\d{3}\)\d{3}-\d{2}-\d{2}$/),
  address: addressSchema,
  description: z.string(),
});

export type Person = z.infer<typeof personSchema> & { id: number };
export type PersonFormData = Omit<Person, "id">;
