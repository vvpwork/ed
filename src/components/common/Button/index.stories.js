import React from "react";
import Button from "./Button";
import Container from "../container";
import 'style/index.scss'

export default {
  title: "ButtonAnimation"
};

export const StoryButton = () => (
  <Container>
    <Button>Подробнее...</Button>
  </Container>
);
