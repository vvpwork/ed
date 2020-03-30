import React, { useState } from "react";
import T from "prop-types";

import MenuArr from "configs/menu";
import Link from "../common/LinkItem";
import BurgerButton from "../BurgerButton";
import s from "./style.module.scss";

const Menu = ({ menuArr = MenuArr }) => {
  const [checked, setChecked] = useState(false);
  const width = window.innerWidth;
  console.log(width);
  const onChange = () => {
    width > 680
      ? setChecked(!checked)
      : setTimeout(() => setChecked(!checked), 500);
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
              <Link {...{ to, name }} key={to + name} onClick={onChange} />
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
