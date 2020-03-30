import React from "react";
import T from "prop-types";
import s from "./style.module.scss";

const Button = ({
  children = "click",
  type = "button",
  onClick = () => {},
  style = {},
  isAnimate = true
}) => {
  return (
    <button className={s.btn} {...{ type, onClick, style }}>
      {isAnimate && (
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
      )}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: T.node,
  type: T.string,
  onClick: T.func,
  style: T.object,
  isAnimate: T.bool,
};


export default Button;
