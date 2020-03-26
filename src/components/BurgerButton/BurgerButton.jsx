import React from "react";
import T from "prop-types";
import s from "./style.module.scss";

const BurgerButton = ({ checked = true }) => {
  return (
    <div className={`${s.hamburger} ${checked ? s.isActive : ""}`}>
      <div className={s.hamburger__container}>
        <div className={s.hamburger__inner}></div>
        <div className={s.hamburger__hidden}></div>
      </div>
    </div>
  );
};

BurgerButton.propTypes = {
  checked: T.bool.isRequired
};

export default BurgerButton;
