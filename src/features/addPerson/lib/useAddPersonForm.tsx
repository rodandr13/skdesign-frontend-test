import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { addPerson } from "@/entities/person";
import { selectPersons } from "@/entities/person/model/selectors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux";
import { Person, PersonFormData, personSchema } from "@/shared/types/schema";

import { formatPhoneNumber } from "./formatPhoneNumber";

export const useAddPersonForm = () => {
  const dispatch = useAppDispatch();
  const persons = useAppSelector(selectPersons);
  const [showForm, setShowForm] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
    trigger,
  } = useForm<PersonFormData>({
    resolver: zodResolver(personSchema),
    mode: "onChange",
    defaultValues: {
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
    },
  });

  const handleInputChange = (name: keyof PersonFormData) => (value: any) => {
    setValue(name, value);
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    setValue("phone", formattedValue);
    trigger("phone");
  };

  const onSubmit = (data: PersonFormData) => {
    try {
      const id = Math.max(0, ...persons.map((p) => p.id)) + 1;
      const newPerson: Person = { id, ...data };
      dispatch(addPerson(newPerson));
      reset();
      setShowForm(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map(
          (err) => `${err.path.join(" -> ")}: ${err.message}`
        );
        console.error(formattedErrors);
      }
    }
  };

  return {
    showForm,
    setShowForm,
    control,
    errors,
    isValid,
    handleInputChange,
    handlePhoneChange,
    handleSubmit: handleSubmit(onSubmit),
  };
};
