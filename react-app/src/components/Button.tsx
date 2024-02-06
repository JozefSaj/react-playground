import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClickEvent: () => void;
}

const Button = ({ children, onClickEvent, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={() => onClickEvent}>
      children
    </button>
  );
};

export default Button;
