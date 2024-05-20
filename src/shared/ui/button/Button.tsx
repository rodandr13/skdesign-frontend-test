import React from "react";

import styles from "./styles.module.scss";

interface Props {
  onClick?: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  onClick,
  title,
  type = "button",
  disabled = false,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
