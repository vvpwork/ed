import React, { useState } from "react";
import T from "prop-types";

import MenuArr from "configs/menu";
import Link from "../common/LinkItem";
import BurgerButton from "../BurgerButton";
import s from "./style.module.scss";

const Menu = ({ menuArr = MenuArr }) => {
  const [checked, setChecked] = useState(false);
  const width = window.innerWidth;
  const onChange = () => {
    checked
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
    if (width < 768) {
      checked
        ? setTimeout(() => setChecked(!checked), 500)
        : setChecked(!checked);
    } else {
      setChecked(!checked);
    }
  };
  return (
    <>
      <input
        id="hamburger"
        className={s.hamburger}
        type="checkbox"
        {...{ onChange, checked }}
      />
      <label className={s.hamburger} htmlFor="hamburger">
        <BurgerButton {...{ checked }} />
      </label>
      <nav className={s.drawerList}>
        <ul>
          {menuArr.map(({ to, name }) => (
            <Link {...{ to, name }} key={to + name} onClick={onChange} />
          ))}
        </ul>
      </nav>
    </>
  );
};

Menu.propTypes = {
  menuArr: T.arrayOf(T.object),
};

export default Menu;
