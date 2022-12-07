import React, { useEffect } from "react";
import { Wrapper } from "./OfferSpeakerZX7.styles";
import { Button } from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OfferSpeakerZX7 = () => {
  const navigation = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Wrapper data-aos="fade-right">
      <h3>zx7 speaker</h3>
      <Button transparent onClick={() => navigation("/speakers/zx7")}>
        see product
      </Button>
    </Wrapper>
  );
};

export default OfferSpeakerZX7;
