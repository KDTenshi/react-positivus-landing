import type { FC } from "react";

import style from "./TextBlock.module.css";
import Heading from "../../../shared/ui/Heading/Heading";

interface TextBlockProps {
  title: string;
  text: string;
}

const TextBlock: FC<TextBlockProps> = ({ title, text }) => {
  return (
    <div className={style.Block}>
      <Heading text={title} color={"green"} level={"second"} />
      <p className={style.Text}>{text}</p>
    </div>
  );
};

export default TextBlock;
