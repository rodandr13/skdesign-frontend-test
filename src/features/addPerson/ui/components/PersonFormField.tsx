import React from "react";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
}

export const PersonFormField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
}: Props) => {
  return (
    <div>
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};
