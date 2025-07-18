import type { FC } from "react";

import style from "./Testimonials.module.css";

const Card: FC = () => {
  return (
    <div className={style.Card}>
      <p className={style.Text}>
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic
        and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success
        of our business. We highly recommend Positivus to any company looking to grow their online presence."
      </p>
      <div className={style.Info}>
        <h4 className={style.Name}>John Smith</h4>
        <p className={style.Title}>Marketing Director at XYZ Corp</p>
      </div>
    </div>
  );
};

const Testimonials: FC = () => {
  return (
    <div className={style.Testimonials}>
      <div className={style.Container}>
        <div className={style.Cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={style.Controls}>
          <button className={style.Button}>
            <img src="/arrow_left_icon.svg" alt="Arrow Left" />
          </button>
          <div className={style.Dots}>
            <button className={style.Button}>
              <img src="/star_green_icon.svg" alt="Star Green" />
            </button>
            <button className={style.Button}>
              <img src="/star_white_icon.svg" alt="Star White" />
            </button>
            <button className={style.Button}>
              <img src="/star_white_icon.svg" alt="Star White" />
            </button>
            <button className={style.Button}>
              <img src="/star_white_icon.svg" alt="Star White" />
            </button>
            <button className={style.Button}>
              <img src="/star_white_icon.svg" alt="Star White" />
            </button>
          </div>
          <button className={style.Button}>
            <img src="/arrow_right_icon.svg" alt="Arrow Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
