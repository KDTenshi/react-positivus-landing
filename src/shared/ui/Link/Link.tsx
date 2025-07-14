import type { FC } from "react";

import style from "./Link.module.css";

type LinkColor = "black" | "green" | "white";
type LinkType = "normal" | "alt" | "simple";

type StylesList = {
  [key in LinkColor]: {
    [key in LinkType]: string;
  };
};

interface LinkProps {
  color?: LinkColor;
  type?: LinkType;
  text: string;
}

const arrowColors: StylesList = {
  black: {
    normal: "/arrow_green_icon.svg",
    alt: "/arrow_white_icon.svg",
    simple: "/arrow_black_icon.svg",
  },
  white: {
    normal: "/arrow_green_icon.svg",
    alt: "/arrow_black_icon.svg",
    simple: "/arrow_white_icon.svg",
  },
  green: {
    normal: "/arrow_black_icon.svg",
    alt: "/arrow_white_icon.svg",
    simple: "/arrow_green_icon.svg",
  },
};

const linkStyles: StylesList = {
  black: {
    normal: style.Link_Black,
    alt: style.Link_Black,
    simple: style.Link_Black,
  },
  white: {
    normal: style.Link_White,
    alt: style.Link_White,
    simple: style.Link_White,
  },
  green: {
    normal: style.Link_Black,
    alt: style.Link_White,
    simple: style.Link_Green,
  },
};

const iconStyles: { [key in LinkColor]: string } = {
  black: style.Icon_Black,
  white: style.Icon_White,
  green: style.Icon_Green,
};

const Link: FC<LinkProps> = ({ color = "black", type = "normal", text }) => {
  const iconClassName = type === "simple" ? style.Icon_Simple : iconStyles[color];

  const Icon = (
    <span className={iconClassName}>
      <img src={arrowColors[color][type]} alt="Arrow white" />
    </span>
  );

  return (
    <a href="/" className={linkStyles[color][type]}>
      {type !== "simple" && Icon}
      {text}
      {type === "simple" && Icon}
    </a>
  );
};

export default Link;
