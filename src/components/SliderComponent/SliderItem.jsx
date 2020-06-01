import React from "react";
import { Link } from "react-router-dom";
import T from "prop-types";
import s from './Slider.module.scss';

export const SliderItem = ({ img, path, name, onClick }) => {
  return (
      <Link to={path} className={s.linkSlide}>
        <img src={img} alt={name} className={s.imgSlide} />
      </Link>
  );
};

SliderItem.propTypes = {
  img: T.node,
  path: T.string,
  name: T.string,
  onClick: T.func,
};
