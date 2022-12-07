import styled from "styled-components";
import cartImg from "../../../assets/images/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  background-color: ${({ position, theme }) =>
    position > 10 ? theme.colors.strongBlack : "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 89px;
  position: fixed;
  z-index: 999;
  width: 100%;
  padding-inline: 10%;
  transition: background-color 0.3s;

  &:before {
    content: "";
    width: ${({ position }) => (position > 10 ? "0" : "80%")};
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    bottom: 0;
    transition: width 0.3s;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  @media (min-width: 1100px) {
    justify-content: space-between;
  }
`;

export const NavBox = styled.div`
  height: 15px;
  width: 17px;
  padding: 10px;
  box-sizing: content-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span:nth-child(1) {
    transform-origin: right;
    transform: rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
    transition: transform 0.2s;
  }

  span:nth-child(2) {
    transform: translateX(${({ isOpen }) => (isOpen ? "-20px" : "0")});
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    transition: transform 0.2s, opacity 0.2s;
  }

  span:nth-child(3) {
    transform-origin: right;
    transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "0")});
    transition: transform 0.2s;
  }

  @media (min-width: 768px) {
    margin-right: 42px;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const HamburgerBar = styled.span`
  height: 3px;
  width: 17px;
  background-color: ${({ theme }) => theme.colors.strongWhite};
  display: block;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.strongWhite};
  font-size: ${({ theme }) => theme.fontSize.h5};
`;

export const Cart = styled.div`
  background-image: url(${cartImg});
  width: 23px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-left: auto;
  }

  @media (min-width: 1100px) {
    margin-inline: 0;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
    list-style: none;
  }
`;

export const NavListItem = styled(Link)`
  color: ${({ theme }) => theme.colors.strongWhite};
  margin-right: 34px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.strongOrange};
    transform: scale(1.1);
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-300px")};

  height: 100vh;
  width: 70%;
  max-width: 300px;

  background-color: black;
  padding: 150px 0;
  transition: right 0.2s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  a {
    font-size: ${({ theme }) => theme.fontSize.h5};
    text-transform: uppercase;
    margin: 0;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;
