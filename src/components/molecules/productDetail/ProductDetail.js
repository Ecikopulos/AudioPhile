import React, { useContext, useEffect, useState } from "react";
import {
  AmountButton,
  AmountDiv,
  Bcg,
  BuyWrapper,
  StyledPrice,
  StyledRowWrapper,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from "./ProductDetail.styles";
import { NewProduct } from "../../atoms/newProduct/NewProduct";
import { Button } from "../../atoms/button/Button";
import { CartContext } from "../../../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductDetail = ({
  img,
  imgM,
  imgB,
  title,
  text,
  price,
  newProduct,
  cartTitle,
}) => {
  const [amount, setAmount] = useState(1);

  const { cartContent, setCartContent, setFakeActivated } =
    useContext(CartContext);

  const handleAmount = (type) => {
    if (type === "+") {
      setAmount(amount + 1);
    } else {
      setAmount(amount - 1);
    }
  };

  const handleCartValue = () => {
    let cartValue = cartContent;
    const value = {
      img: img,
      item: cartTitle,
      price: price * amount,
      quantity: amount,
    };
    cartValue.push(value);
    setCartContent(cartValue);
    setFakeActivated((prevState) => !prevState);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <StyledWrapper>
      <Bcg img={img} imgM={imgM} imgB={imgB} data-aos="flip-right" />
      <StyledRowWrapper>
        {newProduct ? <NewProduct orange>new product</NewProduct> : null}
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
        <StyledPrice>{price} $</StyledPrice>
        <BuyWrapper>
          <AmountDiv>
            <AmountButton
              disabled={amount <= 0}
              onClick={() => handleAmount("-")}
            >
              -
            </AmountButton>
            {amount}
            <AmountButton onClick={() => handleAmount("+")}>+</AmountButton>
          </AmountDiv>
          <Button disabled={amount <= 0} orange onClick={handleCartValue}>
            add to cart
          </Button>
        </BuyWrapper>
      </StyledRowWrapper>
    </StyledWrapper>
  );
};

export default ProductDetail;
