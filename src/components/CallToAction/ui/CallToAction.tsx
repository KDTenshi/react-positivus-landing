import type { FC } from "react";

import style from "./CallToAction.module.css";
import Button from "../../../shared/ui/Button/Button";

const CallToAction: FC = () => {
  return (
    <div className={style.Call}>
      <div className={style.Card}>
        <h3 className={style.Title}>Let’s make things happen</h3>
        <p className={style.Text}>
          Contact us today to learn more about how our digital marketing services can help your business grow and
          succeed online.
        </p>
        <Button text="Get your free proposal" />
        <div className={style.Image}>
          <img src="/cta.png" alt="CTA" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
