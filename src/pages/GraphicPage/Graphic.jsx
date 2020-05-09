import React from "react";
import { useDispatch } from "react-redux";
import { test_action } from "../../redux/rootReducer";
import { Helmet } from "react-helmet";
import seo from "../../configs/seo";
import Button from "../../components/common/Button";

const Graphic = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>{seo.GRAPHIC.title}</title>
        <meta name="description" content={seo.GRAPHIC.description} />
      </Helmet>
      <h1 style={{ marginBottom: "100px" }}>RET</h1>;
      <Button
        onClick={() => dispatch(test_action('red'))}
      >
        Подробнее...
      </Button>
    </>
  );
};

export default Graphic;
