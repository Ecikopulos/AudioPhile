import React, { useEffect, useState } from "react";
import { DetailedPagesWrapper } from "../../components/atoms/wrappers/detailedPagesWrapper/DetailedPagesWrapper";
import { Back } from "../../components/atoms/back/Back";
import { BlackSpace } from "../../components/atoms/blackSpace/BlackSpace";
import CheckoutForm from "../../components/molecules/checkoutform/CheckoutForm";
import Summary from "../../components/molecules/summary/summary";
import { Wrapper } from "./Checkout.styles";
import { useNavigate } from "react-router-dom";

const startingCheckoutInfo = {
  name: "",
  email: "",
  phone: "",
  address: "",
  code: "",
  city: "",
  country: "",
  eMoney: true,
  delivery: false,
  eMoneyNumber: "",
  eMoneyPin: "",
};

const Checkout = ({ cartContent, setCartContent, finalPrice }) => {
  const [checkoutInfo, setCheckoutInfo] = useState(startingCheckoutInfo);

  const navigate = useNavigate();

  const handleInputValue = (event, input) => {
    setCheckoutInfo((prevState) => ({
      ...prevState,
      [input]: event.target.value,
    }));
  };

  const handlePaymentMethod = (type, remove) => {
    setCheckoutInfo((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
      [remove]: false,
    }));
  };

  useEffect(() => {
    if (cartContent.length === 0) {
      navigate("/");
    }
  }, [cartContent, navigate]);

  return (
    <DetailedPagesWrapper dark>
      <BlackSpace />
      <Back onClick={() => navigate(-1)}>Go Back</Back>
      <Wrapper>
        <CheckoutForm
          checkoutInfo={checkoutInfo}
          handleInputValue={handleInputValue}
          handlePaymentMethod={handlePaymentMethod}
        />
        <Summary
          cartContent={cartContent}
          setCartContent={setCartContent}
          finalPrice={finalPrice}
          checkoutInfo={checkoutInfo}
        />
      </Wrapper>
    </DetailedPagesWrapper>
  );
};

export default Checkout;
