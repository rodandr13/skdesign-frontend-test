import { z } from "zod";

const nameRegex = /^[a-zA-Z]+$/;

export const addressSchema = z.object({
  streetAddress: z.string(),
  city: z.string(),
  zip: z.string(),
  state: z.string(),
});

export const personSchema = z.object({
  firstName: z.string().regex(nameRegex, {
    message: "firstName должен содержать только латинские буквы",
  }),
  lastName: z.string().regex(nameRegex, {
    message: "lastName должен содержать только латинские буквы",
  }),
  email: z.string().email({ message: "Некорректный email" }),
  phone: z.string().regex(/^\(\d{3}\)\d{3}-\d{2}-\d{2}$/, {
    message: "Формат телефона должен быть (000)00-00-00",
  }),
  address: addressSchema,
  description: z.string(),
});

export type Person = z.infer<typeof personSchema> & { id: number };
export type PersonFormData = Omit<Person, "id">;
