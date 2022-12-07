import React from "react";
import Header from "../../components/molecules/header/Header";
import Offers from "../../components/organisms/offers/Offers";
import OfferSpeakerZX9 from "../../components/molecules/offerSpeakerZX9/OfferSpeakerZX9";
import { Wrapper } from "./Home.styles";
import OfferSpeakerZX7 from "../../components/molecules/offerSpeakerZX7/OfferSpeakerZX7";
import OfferEarphonesYX1 from "../../components/molecules/offerEarphonesYX1/OfferEarphonesYX1";
import About from "../../components/molecules/about/About";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Offers />
      <OfferSpeakerZX9 />
      <OfferSpeakerZX7 />
      <OfferEarphonesYX1 />
      <About />
    </Wrapper>
  );
};

export default Home;
