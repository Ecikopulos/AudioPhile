import React, { useEffect, useState } from "react";
import {
  Wrapper,
  SmallTile,
  OrderWrapper,
  StyledTitle,
  Column,
  SmallTitle,
  Row,
  StyledButton,
  Error,
  CartWrapper,
} from "./Summary.styles";
import { Title } from "../../atoms/title/Title";
import { Text } from "../../atoms/text/Text";
import { useNavigate } from "react-router-dom";

const Summary = ({ cartContent, setCartContent, finalPrice, checkoutInfo }) => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleForm = () => {
    if (checkoutInfo.name.length < 2) {
      return setError(true);
    }
    if (!checkoutInfo.email.includes("@")) {
      return setError(true);
    }
    if (checkoutInfo.phone.length !== 9) {
      return setError(true);
    }
    if (checkoutInfo.address.length < 2) {
      return setError(true);
    }
    if (checkoutInfo.code.length < 2) {
      return setError(true);
    }
    if (checkoutInfo.city.length < 1) {
      return setError(true);
    }
    if (checkoutInfo.country.length < 1) {
      return setError(true);
    }
    if (checkoutInfo.eMoney) {
      if (
        checkoutInfo.eMoneyPin.length !== 6 ||
        checkoutInfo.eMoneyNumber.length < 5
      ) {
        return setError(true);
      }
    }
    setError(false);
    setCartContent([]);
    navigate("/final");
  };

  useEffect(() => {
    if (error === true) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [error]);

  return (
    <Wrapper>
      <Title>summary</Title>
      <CartWrapper>
        {cartContent.map((product) => (
          <OrderWrapper key={product.item}>
            <Row noJustify>
              <SmallTile bcg={product.img} />
              <Column>
                <StyledTitle small>{product.item}</StyledTitle>
                <Text>$ {product.price}</Text>
              </Column>
            </Row>
            <SmallTitle>x{product.quantity}</SmallTitle>
          </OrderWrapper>
        ))}
      </CartWrapper>
      <Row>
        <Text>TOTAL</Text>
        <SmallTitle>$ {finalPrice}</SmallTitle>
      </Row>
      <Row>
        <Text>SHipping</Text>
        <SmallTitle>$ 50</SmallTitle>
      </Row>
      <Row>
        <Text>VAT (included)</Text>
        <SmallTitle>$ {Math.floor(finalPrice / 6)}</SmallTitle>
      </Row>
      <Row bigMargin>
        <Text>GRAND TOTAL</Text>
        <SmallTitle>$ {Math.floor(finalPrice + 50)}</SmallTitle>
      </Row>
      <StyledButton orange onClick={handleForm}>
        CONTINUE & PAY
      </StyledButton>
      {error ? (
        <Error>
          <p>Invalid Values!</p>
        </Error>
      ) : null}
    </Wrapper>
  );
};

export default Summary;
