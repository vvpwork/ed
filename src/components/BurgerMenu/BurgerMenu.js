import React, { useState } from "react";
import BurgerButton from '../BurgerButton'
import s from  './Style.module.scss';

const Menu = ({ menuArr }) => {
  const [checked, setChecked] = useState(false);
  console.log(s.hamburger)
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
          <BurgerButton {...{checked}}/>
        </label>
        <section className={s.drawerList}>
          <ul>
            <li>
              <a href="/">dashboard</a>
            </li>
            <li>
              <a href="/">notifications</a>
            </li>
            <li>
              <a href="/">system administration</a>
            </li>
            <li>
              <a href="/">support</a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Menu;
