import React, { ChangeEvent, FocusEvent, forwardRef } from "react";

import styles from "../styles.module.scss";

interface Props {
  label: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  error?: string;
}

export const PersonFormField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      type,
      name,
      value,
      onChange,
      onBlur,
      placeholder,
      maxLength,
      error,
    },
    ref
  ) => {
    return (
      <div className={styles.formField}>
        <label htmlFor={name}>{label}:</label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          className={error ? styles.inputError : ""}
          ref={ref}
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
);

PersonFormField.displayName = "PersonFormField";
