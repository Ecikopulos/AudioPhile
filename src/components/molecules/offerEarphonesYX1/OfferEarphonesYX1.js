import React, { useEffect } from "react";
import { BackgroundTile, OfferTile, Wrapper } from "./OfferEarphonesYX1.styles";
import { Button } from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OfferEarphonesYX1 = () => {
  const navigation = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <BackgroundTile data-aos="flip-right" />
      <OfferTile data-aos="flip-left">
        <h4>xy1 earphones</h4>
        <Button transparent onClick={() => navigation("/earphones/yx1")}>
          see product
        </Button>
      </OfferTile>
    </Wrapper>
  );
};

export default OfferEarphonesYX1;
