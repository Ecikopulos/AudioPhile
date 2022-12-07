import React, { useEffect } from "react";
import {
  Circle,
  Speaker,
  Wrapper,
  StyledButton,
} from "./OfferSpeakerZX9.styles";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OfferSpeakerZX9 = () => {
  const navigation = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <Circle>
        <Speaker />
      </Circle>
      <div data-aos="fade-left">
        <h3>zx9 speaker</h3>
        <p>
          Upgrade to premium speakers that are phenomenally build to deliver
          truly remarkable sound.
        </p>
        <StyledButton onClick={() => navigation("/speakers/zx9")}>
          see product
        </StyledButton>
      </div>
    </Wrapper>
  );
};

export default OfferSpeakerZX9;
