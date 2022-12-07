import React, { useEffect } from "react";
import {
  AmountButton,
  AmountDiv,
  BottomPart,
  CartWrapper,
  Column,
  MainPart,
  OrderWrapper,
  Row,
  Shadow,
  SmallTile,
  StyledButton,
  StyledText,
  StyledTitle,
  UpperPart,
} from "./Cart.styles";
import { Text } from "../../atoms/text/Text";
import { Link } from "react-router-dom";

const Cart = ({
  cartContent,
  setCartContent,
  fakeActivated,
  setFakeActivated,
  finalPrice,
  setFinalPrice,
  setCartIsOpen,
}) => {
  const eraseCartContent = (e) => {
    if (e.key === "Enter" || e.key === undefined) {
      setCartContent([]);
      setFakeActivated((prevState) => !prevState);
    }
  };

  const handleAmount = (product, type) => {
    const productPrice = product.price / product.quantity;

    if (type === "+") {
      product.quantity = product.quantity + 1;
      product.price = product.price + productPrice;
      setFakeActivated((prevState) => !prevState);
    } else {
      product.quantity = product.quantity - 1;
      product.price = product.price - productPrice;

      setFakeActivated((prevState) => !prevState);
    }

    if (product.quantity === 0) {
      const array = cartContent.filter(
        (element) => element.item !== product.item
      );
      setCartContent(array);
    }
  };

  const handleCloseCart = () => {
    setCartIsOpen(false);
  };

  useEffect(() => {
    setFinalPrice(0);
    for (let i = 0; i < cartContent.length; i++) {
      setFinalPrice((prevState) => prevState + cartContent[i].price);
    }
  }, [fakeActivated, cartContent, setFinalPrice]);

  return (
    <>
      <CartWrapper>
        <UpperPart>
          <StyledTitle>Cart ({cartContent.length})</StyledTitle>
          <StyledText
            tabIndex="0"
            onClick={(e) => eraseCartContent(e)}
            onKeyDown={(e) => eraseCartContent(e)}
          >
            Remove All
          </StyledText>
        </UpperPart>
        <MainPart>
          {cartContent.map((product) => (
            <OrderWrapper key={product.item}>
              <SmallTile bcg={product.img} />
              <Column>
                <StyledTitle small>{product.item}</StyledTitle>
                <Text>$ {product.price}</Text>
              </Column>
              <AmountDiv>
                <AmountButton onClick={() => handleAmount(product, "-")}>
                  -
                </AmountButton>
                <Text>{product.quantity}</Text>
                <AmountButton onClick={() => handleAmount(product, "+")}>
                  +
                </AmountButton>
              </AmountDiv>
            </OrderWrapper>
          ))}
        </MainPart>
        <BottomPart>
          <Row>
            <Text>Total</Text>
            <StyledTitle>$ {finalPrice}</StyledTitle>
          </Row>
          <Link to="/checkout">
            <StyledButton
              orange
              disabled={cartContent.length === 0}
              onClick={handleCloseCart}
            >
              Checkout
            </StyledButton>
          </Link>
        </BottomPart>
      </CartWrapper>
      <Shadow onClick={handleCloseCart} />
    </>
  );
};

export default Cart;
