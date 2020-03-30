import React from "react";
import T from "prop-types";
import { Link } from "react-router-dom";
import s from "./style.module.scss";

const LinkItem = ({ to = "/", name = "name", onClick = () => {} }) => {
  return (
    <li className={s.container}>
      <Link {...{ to }} data-hover={name} className={s.link} {...{ onClick }}>
        {name}
      </Link>
    </li>
  );
};

Link.propTypes = {
  to: T.string.isRequired,
  name: T.string,
  onClick: T.func
};

export default LinkItem;
