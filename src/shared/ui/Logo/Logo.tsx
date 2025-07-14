import type { FC } from "react";

import style from "./Logo.module.css";

interface LogoProps {
  color?: "black" | "white";
  size?: "normal" | "small";
}

const Logo: FC<LogoProps> = ({ color = "black", size = "normal" }) => {
  const logoClassName = size === "normal" ? style.Normal : style.Small;

  return (
    <div className={logoClassName}>
      {color === "black" && <img src="/logo_black.png" alt="Logo black" />}
      {color === "white" && <img src="/logo_white.png" alt="Logo white" />}
    </div>
  );
};

export default Logo;
