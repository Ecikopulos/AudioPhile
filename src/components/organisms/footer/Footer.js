import React from "react";
import {
  Copyright,
  Icon,
  Icons,
  MediumWrapper,
  NavigationElement,
  Text,
  Title,
  Wrapper,
} from "./Footer.styles";

import iconFaceBook from "../../../assets/images/shared/desktop/icon-facebook.svg";
import iconInstagram from "../../../assets/images/shared/desktop/icon-instagram.svg";
import iconTwitter from "../../../assets/images/shared/desktop/icon-twitter.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Title>audiophile</Title>
      <MediumWrapper className="smaller">
        <NavigationElement to="/">home</NavigationElement>
        <NavigationElement to="/headphones">headphones</NavigationElement>
        <NavigationElement to="/speakers">speakers</NavigationElement>
        <NavigationElement to="/earphones">earphones</NavigationElement>
      </MediumWrapper>
      <Text>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </Text>
      <MediumWrapper>
        <Copyright>Copyright 2021. All Rights Reserved</Copyright>
        <Icons>
          <Icon icon={iconFaceBook} />
          <Icon icon={iconInstagram} />
          <Icon icon={iconTwitter} />
        </Icons>
      </MediumWrapper>
    </Wrapper>
  );
};

export default Footer;
