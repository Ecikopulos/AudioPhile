import React, { useEffect } from "react";
import { Shadow, Wrapper } from "./Header.styles";
import { Button } from "../../atoms/button/Button";
import { NewProduct } from "../../atoms/newProduct/NewProduct";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <Shadow>
        <NewProduct data-aos="fade-down">new product</NewProduct>
        <h2 data-aos="fade-right">xx99 mark || headphones</h2>
        <p data-aos="fade-left">
          experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          orange
          data-aos="fade-up"
          onClick={() => {
            navigate("/headphones/xx99two");
          }}
        >
          see product
        </Button>
      </Shadow>
    </Wrapper>
  );
};

export default Header;
