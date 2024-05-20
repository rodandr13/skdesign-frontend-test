import React from "react";

import styles from "./styles.module.scss";

interface Props {
  onClick?: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ onClick, title, type = "button" }: Props) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
};
