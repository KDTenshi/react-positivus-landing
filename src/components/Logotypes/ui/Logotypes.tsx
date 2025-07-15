import type { FC } from "react";

import style from "./Logotypes.module.css";

const Logotypes: FC = () => {
  return (
    <div className={style.Logotypes}>
      <img src="/company_logo_1.svg" alt="Company logo" />
      <img src="/company_logo_2.svg" alt="Company logo" />
      <img src="/company_logo_3.svg" alt="Company logo" />
      <img src="/company_logo_4.svg" alt="Company logo" />
      <img src="/company_logo_5.svg" alt="Company logo" />
      <img src="/company_logo_6.svg" alt="Company logo" />
    </div>
  );
};

export default Logotypes;
