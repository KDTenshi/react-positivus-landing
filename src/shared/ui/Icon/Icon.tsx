import type { FC } from "react";

import style from "./Icon.module.css";

interface IconProps {
  type?: "plus" | "minus";
}

const Icon: FC<IconProps> = ({ type = "plus" }) => {
  return (
    <div className={style.Icon}>
      {type === "plus" && <img src="/plus_icon.svg" alt="Plus icon" />}
      {type === "minus" && <img src="/minus_icon.svg" alt="Minus icon" />}
    </div>
  );
};

export default Icon;
