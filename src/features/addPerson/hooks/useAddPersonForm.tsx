import { ChangeEvent, FormEvent, useState } from "react";

import { z } from "zod";

import { addPerson } from "@/entities/person";
import { useAppDispatch } from "@/shared/lib/hooks/redux";

import { formatPhoneNumber } from "../lib/formatPhoneNumber";
import { Person, personSchema } from "../model/schema";

export const useAddPersonForm = () => {
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState<string[] | null>(null);
  const [formData, setFormData] = useState<Person>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      streetAddress: "",
      city: "",
      zip: "",
      state: "",
    },
    description: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formattedValue = name === "id" ? parseInt(value, 10) : value;
    setFormData({ ...formData, [name]: formattedValue });
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedValue });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      personSchema.parse(formData);
      dispatch(addPerson(formData));
      setFormData({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: {
          streetAddress: "",
          city: "",
          zip: "",
          state: "",
        },
        description: "",
      });
      setShowForm(false);
      setErrors(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map(
          (err) => `${err.path.join(" -> ")}: ${err.message}`
        );
        setErrors(formattedErrors);
      }
    }
  };

  return {
    showForm,
    setShowForm,
    formData,
    errors,
    handleInputChange,
    handlePhoneChange,
    handleSubmit,
  };
};
