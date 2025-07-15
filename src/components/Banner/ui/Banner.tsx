import type { FC } from "react";

import style from "./Banner.module.css";
import Button from "../../../shared/ui/Button/Button";

const Banner: FC = () => {
  return (
    <div className={style.Banner}>
      <div className={style.Info}>
        <h1 className={style.Title}>Navigating the digital landscape for success</h1>
        <p className={style.Text}>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including
          SEO, PPC, social media marketing, and content creation.
        </p>
        <Button text="Book a consultation" />
      </div>
      <div className={style.Image}>
        <img src="/banner.png" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
