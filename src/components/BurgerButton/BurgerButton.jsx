import React from "react";
import s from "./style.module.scss";

const BurgerButton = ({ checked = true }) => {
  return (
    <div className={`${s.hamburger} ${checked ? s.isActive : ''}`}>
      <div className={s.hamburger__container}>
        <div className={s.hamburger__inner}></div>
        <div className={s.hamburger__hidden}></div>
      </div>
    </div>
  );
};

export default BurgerButton;
