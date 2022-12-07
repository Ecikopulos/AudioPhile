import React from "react";
import {
  CheckboxWrapper,
  FormWrapper,
  InputWrapper,
  OrangeText,
  Row,
  SmallTitle,
  StyledCheckbox,
  StyledInput,
} from "./CheckoutForm.styles";
import { Title } from "../../atoms/title/Title";

const CheckOutForm = ({
  checkoutInfo,
  handleInputValue,
  handlePaymentMethod,
}) => {
  return (
    <FormWrapper>
      <Title>checkout</Title>
      <OrangeText>billing details</OrangeText>
      <form>
        <Row>
          <InputWrapper>
            <SmallTitle>Name</SmallTitle>
            <StyledInput
              name="Name"
              type="text"
              value={checkoutInfo.name}
              onChange={(event) => handleInputValue(event, "name")}
            />
          </InputWrapper>
          <InputWrapper>
            <SmallTitle>Email Address</SmallTitle>
            <StyledInput
              name="Email"
              type="email"
              value={checkoutInfo.email}
              onChange={(event) => handleInputValue(event, "email")}
            />
          </InputWrapper>
          <InputWrapper>
            <SmallTitle>Phone Number</SmallTitle>
            <StyledInput
              name="Number"
              type="number"
              value={checkoutInfo.phone}
              onChange={(event) => handleInputValue(event, "phone")}
            />
          </InputWrapper>
        </Row>

        <OrangeText second>shipping info</OrangeText>
        <Row>
          <InputWrapper>
            <SmallTitle>Your Address</SmallTitle>
            <StyledInput
              name="Address"
              type="text"
              value={checkoutInfo.address}
              onChange={(event) => handleInputValue(event, "address")}
            />
          </InputWrapper>
          <InputWrapper>
            <SmallTitle>Zip Code</SmallTitle>
            <StyledInput
              name="Code"
              type="text"
              inputmode="numeric"
              pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
              value={checkoutInfo.code}
              onChange={(event) => handleInputValue(event, "code")}
            />
          </InputWrapper>
          <InputWrapper>
            <SmallTitle>City</SmallTitle>
            <StyledInput
              name="text"
              type="text"
              value={checkoutInfo.city}
              onChange={(event) => handleInputValue(event, "city")}
            />
          </InputWrapper>
          <InputWrapper>
            <SmallTitle>Country</SmallTitle>
            <StyledInput
              name="Country"
              type="text"
              value={checkoutInfo.country}
              onChange={(event) => handleInputValue(event, "country")}
            />
          </InputWrapper>
        </Row>

        <OrangeText second>payment details</OrangeText>
        <SmallTitle>Payment Method</SmallTitle>
        <Row>
          <CheckboxWrapper>
            <StyledCheckbox
              name="E-money"
              type="checkbox"
              checked={checkoutInfo.eMoney}
              className={checkoutInfo.eMoney ? "checked" : ""}
              onChange={() => handlePaymentMethod("eMoney", "delivery")}
            />
            <SmallTitle>e-Money</SmallTitle>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <StyledCheckbox
              name="Delivery"
              type="checkbox"
              checked={checkoutInfo.delivery}
              className={checkoutInfo.delivery ? "checked" : ""}
              onChange={() => handlePaymentMethod("delivery", "eMoney")}
            />
            <SmallTitle>Cash on Delivery</SmallTitle>
          </CheckboxWrapper>
        </Row>
        {checkoutInfo.eMoney ? (
          <Row>
            <InputWrapper>
              <SmallTitle>e-Money Number</SmallTitle>
              <StyledInput
                name="eMNumber"
                type="number"
                value={checkoutInfo.eMoneyNumber}
                onChange={(event) => handleInputValue(event, "eMoneyNumber")}
              />
            </InputWrapper>
            <InputWrapper>
              <SmallTitle>e-Money Pin</SmallTitle>
              <StyledInput
                name="eMPin"
                type="password"
                value={checkoutInfo.eMoneyPin}
                onChange={(event) => handleInputValue(event, "eMoneyPin")}
              />
            </InputWrapper>
          </Row>
        ) : null}
      </form>
    </FormWrapper>
  );
};

export default CheckOutForm;
