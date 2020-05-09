import React from "react";
import { Link } from "react-router-dom";
import R from "../../configs/routes";
import BurgerMenu from "../BurgerMenu";
import Logo from "../common/Logo";
import s from "./style.module.scss";

const Header = () => {
  return (
    <header className={s.container}>
      <Link to={R.HOME} className={s.link}>
        <Logo />
      </Link>
      <BurgerMenu />
    </header>
  );
};

export default Header;
