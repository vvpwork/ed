import React from "react";
const Container = ({
  style = {
    background: "#242424",
    width: "100%",
    height: "100vh",
    padding: "60px"
  },
  children
}) => {
  return <div {...{ style }}>{children}</div>;
};


export default Container;
