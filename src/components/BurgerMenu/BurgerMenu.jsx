import React, { useState } from "react";
import T from "prop-types";

import MenuArr from "configs/menu";
import Link from "../common/LinkItem";
import BurgerButton from "../BurgerButton";
import s from "./style.module.scss";

const Menu = ({ menuArr = MenuArr }) => {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div>
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
              <Link {...{ to, name }} key={to + name} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

Menu.propTypes = {
  menuArr: T.arrayOf(T.object)
};

export default Menu;
