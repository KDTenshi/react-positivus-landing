import type { FC } from "react";

import style from "./Landing.module.css";
import { Header } from "../../Header";
import { Banner } from "../../Banner";
import { Logotypes } from "../../Logotypes";

const Landing: FC = () => {
  return (
    <div className={style.Landing}>
      <Header />
      <Banner />
      <Logotypes />
    </div>
  );
};

export default Landing;
