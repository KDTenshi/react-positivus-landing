import type { FC } from "react";

import style from "./Heading.module.css";

type HeadingColor = "green" | "black" | "white";

interface HeadingProps {
  text: string | string[];
  color?: HeadingColor;
  level?: "first" | "second" | "third" | "fourth";
}

const colorStyles: { [key in HeadingColor]: string } = {
  black: style.Black,
  white: style.White,
  green: style.Green,
};

const Heading: FC<HeadingProps> = ({ text, color = "black", level = "first" }) => {
  const strings = Array.isArray(text) ? text : [text];

  if (level === "first") {
    return (
      <h1 className={style.Heading}>
        {strings.map((string) => (
          <span className={[style.First, colorStyles[color]].join(" ")} key={string}>
            {string}
          </span>
        ))}
      </h1>
    );
  }

  if (level === "second") {
    return (
      <h2 className={style.Heading}>
        {strings.map((string) => (
          <span className={[style.Second, colorStyles[color]].join(" ")} key={string}>
            {string}
          </span>
        ))}
      </h2>
    );
  }

  if (level === "third") {
    return (
      <h3 className={style.Heading}>
        {strings.map((string) => (
          <span className={[style.Third, colorStyles[color]].join(" ")} key={string}>
            {string}
          </span>
        ))}
      </h3>
    );
  }

  if (level === "fourth") {
    return (
      <h4 className={style.Heading}>
        {strings.map((string) => (
          <span className={[style.Fourth, colorStyles[color]].join(" ")} key={string}>
            {string}
          </span>
        ))}
      </h4>
    );
  }
};

export default Heading;
