import { ChangeEvent, FormEvent, useState } from "react";

import { z } from "zod";

import { addPerson } from "@/entities/person";
import { selectPersons } from "@/entities/person/model/selectors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux";
import { Person, PersonFormData, personSchema } from "@/shared/types/schema";

import { formatPhoneNumber } from "../lib/formatPhoneNumber";

export const useAddPersonForm = () => {
  const dispatch = useAppDispatch();
  const persons = useAppSelector(selectPersons);
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState<string[] | null>(null);
  const [formData, setFormData] = useState<PersonFormData>({
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
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedValue });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const id = Math.max(0, ...persons.map((p) => p.id)) + 1;
      const newPerson: Person = { id, ...formData };
      personSchema.parse(formData);
      dispatch(addPerson(newPerson));
      setFormData({
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
