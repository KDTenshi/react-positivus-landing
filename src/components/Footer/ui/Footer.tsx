import type { FC } from "react";

import style from "./Footer.module.css";
import Logo from "../../../shared/ui/Logo/Logo";
import Heading from "../../../shared/ui/Heading/Heading";
import Button from "../../../shared/ui/Button/Button";

const Footer: FC = () => {
  return (
    <div className={style.Wrapper}>
      <footer className={style.Footer}>
        <div className={style.Heading}>
          <Logo color={"white"} />
          <nav className={style.Links}>
            <a href="/" className={style.Link}>
              About us
            </a>
            <a href="/" className={style.Link}>
              Services
            </a>
            <a href="/" className={style.Link}>
              Use Cases
            </a>
            <a href="/" className={style.Link}>
              Pricing
            </a>
            <a href="/" className={style.Link}>
              Blog
            </a>
          </nav>
          <div className={style.Socials}>
            <a href="/" className={style.Social}>
              <img src="/linked_in_icon_white.svg" alt="Icon" />
            </a>
            <a href="/" className={style.Social}>
              <img src="/facebook_icon_white.svg" alt="Icon" />
            </a>
            <a href="/" className={style.Social}>
              <img src="/twitter_icon_white.svg" alt="Icon" />
            </a>
          </div>
        </div>
        <div className={style.Body}>
          <div className={style.Contacts}>
            <Heading level={"fourth"} text={"Contact us:"} color={"green"} />
            <div className={style.Info}>
              <p className={style.Contact}>Email: info@positivus.com</p>
              <p className={style.Contact}>Phone: 555-567-8901</p>
              <p className={style.Contact}>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <form className={style.Subscribe}>
            <input type="text" className={style.Input} placeholder="Email" />
            <Button text="Subscribe to news" color={"green"} />
          </form>
        </div>
        <div className={style.Bottom}>
          <p className={style.Text}>© 2023 Positivus. All Rights Reserved.</p>
          <a href="/" className={style.Link}>
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
