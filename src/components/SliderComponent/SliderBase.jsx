import React from "react";
import Slider from "react-slick";
import T from "prop-types";
import s from "./Slider.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderBase = ({ customOption, children }) => {
  const option = customOption
    ? customOption
    : {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
        speed: 700,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              speed: 400,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <Slider option={option} className={s.slider}>
      {children}
    </Slider>
  );
};

SliderBase.propTypes = {
  customOption: T.object,
  children: T.node,
};
