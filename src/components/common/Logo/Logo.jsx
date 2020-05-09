import React from "react";
import T from "prop-types";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";

const LogoComponent = ({width='100%', fill ='white'}) => {
  return (
      <Logo {...{width, fill}} />
  );
};

LogoComponent.propTypes = {
    width: T.string,
    fill: T.string,
};

export default LogoComponent;
