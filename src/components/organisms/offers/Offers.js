import React, { useEffect } from "react";

import headphones from "../../../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../../assets/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../../assets/images/shared/desktop/image-category-thumbnail-earphones.png";
import Offer from "../../molecules/offer/Offer";
import { Wrapper } from "./Offers.styles";
import AOS from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Wrapper data-aos="fade-right">
      <Offer img={headphones} alt="headphones" link="/headphones" />
      <Offer img={speakers} alt="speakers" link="/speakers" />
      <Offer img={earphones} alt="earphones" link="/earphones" />
    </Wrapper>
  );
};

export default Offers;
