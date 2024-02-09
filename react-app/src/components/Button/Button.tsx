import React from "react";
import styles from "./Button.module.css"

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClickEvent: () => void;
}

const Button = ({ children, onClickEvent, color = "primary" }: Props) => {
  return (
    <button className={[styles.btn, styles['btn-primary']].join(' ')} onClick={onClickEvent}>
      children
    </button>
  );
};

export default Button;
