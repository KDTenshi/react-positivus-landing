import type { FC } from "react";

import style from "./Heading.module.css";

type HeadingColor = "green" | "black" | "white";

interface HeadingProps {
  text: string;
  color?: HeadingColor;
  level?: "first" | "second" | "third" | "fourth";
}

const colorStyles: { [key in HeadingColor]: string } = {
  black: style.Black,
  white: style.White,
  green: style.Green,
};

const Heading: FC<HeadingProps> = ({ text, color = "black", level = "first" }) => {
  if (level === "first") {
    return <h1 className={[style.First, colorStyles[color]].join(" ")}>{text}</h1>;
  }

  if (level === "second") {
    return <h2 className={[style.Second, colorStyles[color]].join(" ")}>{text}</h2>;
  }

  if (level === "third") {
    return <h3 className={[style.Third, colorStyles[color]].join(" ")}>{text}</h3>;
  }

  if (level === "fourth") {
    return <h4 className={[style.Fourth, colorStyles[color]].join(" ")}>{text}</h4>;
  }
};

export default Heading;
