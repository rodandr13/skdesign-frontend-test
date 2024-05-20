import React from "react";

import { Controller } from "react-hook-form";

import { Button } from "@/shared/ui/button/Button";

import { PersonFormField } from "./PersonFormField";
import styles from "../styles.module.scss";

interface Props {
  control: any;
  errors: any;
  isValid: boolean;
  handlePhoneChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const PersonForm = ({
  control,
  errors,
  isValid,
  handlePhoneChange,
  handleSubmit,
}: Props) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <PersonFormField
            label="firstName"
            type="text"
            {...field}
            error={errors.firstName?.message}
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <PersonFormField
            label="lastName"
            type="text"
            {...field}
            error={errors.lastName?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <PersonFormField
            label="email"
            type="email"
            {...field}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <PersonFormField
            label="phone"
            type="text"
            {...field}
            onChange={(e) => handlePhoneChange(e.target.value)}
            placeholder="(xxx)xxx-xx-xx"
            maxLength={15}
            error={errors.phone?.message}
          />
        )}
      />

      <Button type="submit" title="Добавить в таблицу" disabled={!isValid} />
    </form>
  );
};
