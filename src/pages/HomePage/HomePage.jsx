import React from "react";
import { Helmet } from "react-helmet";
import Button from "../../components/common/Button";
import bg from "../../assets/img/bg_home_design.png";

import seo from "../../configs/seo";
import s from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={s.container}>
      <Helmet>
        <title>{seo.HOME.title}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
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
      <div className={s.service}>
        {/* <h2 className="s"></h2> */}
        <Button></Button>
      </div>
      {/* <h2 className="s"></h2> */}
    </div>
  );
};

export default HomePage;
