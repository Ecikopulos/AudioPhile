import React, { useEffect, useState } from "react";
import {
  Cart,
  HamburgerBar,
  MobileMenu,
  NavBox,
  NavList,
  NavListItem,
  StyledNav,
  Title,
} from "./Navigation.styles";
import { useNavigate } from "react-router-dom";

const Navigation = ({ setCartIsOpen }) => {
  const [position, setPosition] = useState(0);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  const scrollBehavior = () => {
    setPosition(window.scrollY);
  };

  const toggleCartModal = (e) => {
    console.log(e.key);
    if (e.key === undefined || e.key === "Enter") {
      setCartIsOpen((prevState) => !prevState);
    }
  };

  const handleMobileMenu = () => {
    setMobileMenuIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBehavior);
  }, []);

  return (
    <StyledNav position={position}>
      <NavBox onClick={handleMobileMenu} isOpen={mobileMenuIsOpen}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </NavBox>
      <Title
        onClick={() => {
          navigate("/");
        }}
      >
        audiophile
      </Title>
      <NavList>
        <NavListItem to="/">home</NavListItem>
        <NavListItem to="/headphones">headphones</NavListItem>
        <NavListItem to="/speakers">speakers</NavListItem>
        <NavListItem to="/earphones">earphones</NavListItem>
      </NavList>
      <Cart
        onClick={(e) => toggleCartModal(e)}
        onKeyDown={(e) => toggleCartModal(e)}
        tabIndex="0"
      />
      <MobileMenu isOpen={mobileMenuIsOpen}>
        <NavListItem to="/">home</NavListItem>
        <NavListItem to="/headphones">headphones</NavListItem>
        <NavListItem to="/speakers">speakers</NavListItem>
        <NavListItem to="/earphones">earphones</NavListItem>
      </MobileMenu>
    </StyledNav>
  );
};

export default Navigation;
