import React from "react";
import { Arrow, Wrapper } from "./Offer.styles";
import { Link } from "react-router-dom";

const Offer = ({ img, alt, link }) => {
  return (
    <Wrapper>
      <img src={img} alt={alt} />
      <p>{alt}</p>
      <Link to={link}>
        shop <Arrow />
      </Link>
    </Wrapper>
  );
};

export default Offer;
