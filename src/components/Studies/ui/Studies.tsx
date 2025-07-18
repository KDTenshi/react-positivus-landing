import type { FC } from "react";

import style from "./Studies.module.css";
import Link from "../../../shared/ui/Link/Link";

const studiesTexts = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

const Studies: FC = () => {
  return (
    <div className={style.Studies}>
      <div className={style.Container}>
        {studiesTexts.map((text) => (
          <div className={style.Study} key={text}>
            <p className={style.Text}>{text}</p>
            <Link text="Learn more" color={"green"} type={"simple"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studies;
