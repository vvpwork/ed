import React, { useState } from "react";
import { Link } from "react-router-dom";
import T from "prop-types";

import MenuArr from "../../configs/menu";
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
        <section className={s.drawerList}>
          <ul>
            {menuArr.map(({ to, name }) => (
              <li key={name + to}>
                <Link to={to}>{name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

Menu.propTypes = {
  menuArr: T.arrayOf(T.object).isRequired
};

export default Menu;
