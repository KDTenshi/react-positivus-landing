import type { FC } from "react";

import style from "./ContactUs.module.css";
import Button from "../../../shared/ui/Button/Button";

const ContactUs: FC = () => {
  return (
    <div className={style.Contact}>
      <div className={style.Container}>
        <form className={style.Form}>
          <div className={style.Selects}></div>
          <div className={style.Inputs}>
            <label htmlFor="name" className={style.Label}>
              Name
            </label>
            <input type="text" name="name" className={style.Input} placeholder="Name" />
            <label htmlFor="email" className={style.Label}>
              Email*
            </label>
            <input type="text" name="email" className={style.Input} placeholder="Email" />
            <label htmlFor="message" className={style.Label}>
              Message*
            </label>
            <textarea name="message" placeholder="Message" className={style.Textarea}></textarea>
          </div>
          <Button text="Send Message" />
        </form>
        <div className={style.Image}>
          <img src="/contact_us_image.png" alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
