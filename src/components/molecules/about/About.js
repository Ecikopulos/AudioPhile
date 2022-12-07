import React, { useEffect } from "react";
import { BcgTile, ContentWrapper, Text, Title, Wrapper } from "./About.styles";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <BcgTile data-aos="zoom-in-left" />
      <ContentWrapper data-aos="fade-right">
        <Title>
          bring you the <span>best</span> audio gear
        </Title>
        <Text>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </ContentWrapper>
    </Wrapper>
  );
};

export default About;
