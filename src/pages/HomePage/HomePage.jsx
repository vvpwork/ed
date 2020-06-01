import React from "react";
import Routes from "../../configs/routes";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import Button from "../../components/common/Button";
import { SliderBase, SliderItem } from "../../components/SliderComponent";
import bg from "../../assets/img/bg_home_design.png";
import arsy from "../../assets/img/ArsyTest.png";

import seo from "../../configs/seo";
import s from "./style.module.scss";

const ServiceItem = ({ path, title = "", valueButton, onClick = () => {} }) => {
  const history = useHistory();
  const click = () => {
    onClick();
    setTimeout(() => history.push(path), 500);
  };
  return (
    <div className={s.service}>
      <h2 className={s.subTitle}>{title}</h2>
      <Button onClick={click} theme="yellow">
        {valueButton || "Подробнее..."}
      </Button>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className={s.container}>
      <Helmet>
        <title>{seo.HOME.title}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <section className={s.headSection}>
        <div className={s.imgBG}>
          <img src={bg} alt="design" />
        </div>
        <h1 className={s.title}>
          <span> graphic </span>
          <span> branding </span>
          <span> web </span>
        </h1>
        <p className={s.title__after}>
          ... для ценителей <br /> дизайна со смыслом
        </p>
      </section>
      <section className={s.servicesSection}>
        <ServiceItem path={Routes.GRAPHIC} title="Graphic design" />
        <ServiceItem path={Routes.WEB} title="Web design" />
      </section>
      <section className={s.projectSection}>
        <h2 className={s.titleSection}>Project</h2>
        <div className={s.sliderContainer}>
          <SliderBase
           
          >
            <SliderItem img={arsy} path={"/"} name="Arsy" />
            <SliderItem img={arsy} path={"/"} name="Arsy" />
            <SliderItem img={arsy} path={"/"} name="Arsy" />
            <SliderItem img={arsy} path={"/"} name="Arsy" />
          </SliderBase>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
