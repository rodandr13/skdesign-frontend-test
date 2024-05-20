import React from "react";
import { ChangeEvent, FormEvent } from "react";

import { PersonFormField } from "./PersonFormField";
import { Person } from "../../model/schema";

interface Props {
  formData: Person;
  errors: string[] | null;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export const PersonForm = ({
  formData,
  errors,
  onInputChange,
  onPhoneChange,
  onSubmit,
}: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <PersonFormField
        label="id"
        type="number"
        name="id"
        value={formData.id}
        onChange={onInputChange}
      />
      <PersonFormField
        label="firstName"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={onInputChange}
      />
      <PersonFormField
        label="lastName"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={onInputChange}
      />
      <PersonFormField
        label="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
      />
      <PersonFormField
        label="phone"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={onPhoneChange}
        placeholder="(xxx)xxx-xx-xx"
        maxLength={15}
      />
      {errors && (
        <div style={{ color: "red" }}>
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
      <button type="submit">Добавить в таблицу</button>
    </form>
  );
};
