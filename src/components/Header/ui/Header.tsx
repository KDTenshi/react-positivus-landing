import type { FC } from "react";

import style from "./Header.module.css";
import Logo from "../../../shared/ui/Logo/Logo";
import Button from "../../../shared/ui/Button/Button";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <Logo />
      <nav className={style.Nav}>
        <a href="/" className={style.Link}>
          About us
        </a>
        <a href="/" className={style.Link}>
          Services
        </a>
        <a href="/" className={style.Link}>
          Use cases
        </a>
        <a href="/" className={style.Link}>
          Pricing
        </a>
        <a href="/" className={style.Link}>
          Blog
        </a>
        <Button text="Request a quote" color={"transparent"} />
      </nav>
    </header>
  );
};

export default Header;
