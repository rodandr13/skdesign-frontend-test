import { ChangeEvent, FormEvent } from "react";

import { FieldErrors, UseFormRegister } from "react-hook-form";

import { PersonFormData } from "@/shared/types/schema";
import { Button } from "@/shared/ui/button/Button";

import { PersonFormField } from "./PersonFormField";
import styles from "../styles.module.scss";

interface Props {
  register: UseFormRegister<PersonFormData>;
  errors: FieldErrors<PersonFormData>;
  isValid: boolean;
  handlePhoneChange: (value: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const PersonForm = ({
  register,
  errors,
  isValid,
  handlePhoneChange,
  handleSubmit,
}: Props) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <PersonFormField
        label="firstName"
        type="text"
        {...register("firstName")}
        error={errors.firstName?.message}
      />

      <PersonFormField
        label="lastName"
        type="text"
        {...register("lastName")}
        error={errors.lastName?.message}
      />

      <PersonFormField
        label="email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <PersonFormField
        label="phone"
        type="text"
        {...register("phone", {
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            handlePhoneChange(e.target.value),
        })}
        placeholder="(xxx)xxx-xx-xx"
        maxLength={15}
        error={errors.phone?.message}
      />

      <Button type="submit" title="Добавить в таблицу" disabled={!isValid} />
    </form>
  );
};
