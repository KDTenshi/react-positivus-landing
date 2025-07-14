import type { FC } from "react";

import style from "./Button.module.css";

type ButtonColor = "black" | "green" | "transparent";

interface ButtonProps {
  color?: ButtonColor;
  text: string;
}

const buttonStyles: { [key in ButtonColor]: string } = {
  black: style.Black,
  transparent: style.Trans,
  green: style.Green,
};

const Button: FC<ButtonProps> = ({ color = "black", text }) => {
  return <button className={buttonStyles[color]}>{text}</button>;
};

export default Button;
