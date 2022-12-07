import React, { useEffect } from "react";
import { Bcg, StyledButton, StyledText, StyledTitle } from "./Product.styles";
import { NewProduct } from "../../atoms/newProduct/NewProduct";
import { RowWrapper } from "../../atoms/wrappers/rowWrapper/RowWrapper";
import { Wrapper } from "../../atoms/wrappers/wrapper/Wrapper";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = ({
  reverse,
  img,
  imgM,
  imgB,
  title,
  text,
  link,
  newProduct,
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Wrapper reverse={reverse}>
      <Bcg img={img} imgM={imgM} imgB={imgB} data-aos="fade-up" />
      <RowWrapper data-aos="fade-up">
        {newProduct ? <NewProduct orange>new product</NewProduct> : null}
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
        <Link to={link}>
          <StyledButton orange>see product</StyledButton>
        </Link>
      </RowWrapper>
    </Wrapper>
  );
};

export default Product;
