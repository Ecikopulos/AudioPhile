import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationElement = styled(Link)`
  font-weight: 800;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.strongWhite};
  transition: color 0.2s, transform 0.2s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.strongOrange};
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.footer`
  height: 654px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.weakBlack};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline: 5%;

  &::before {
    content: "";
    height: 4px;
    width: 101px;
    background-color: ${({ theme }) => theme.colors.strongOrange};
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    height: 400px;

    .smaller {
      width: 0;

      ${NavigationElement} {
        margin-right: 32px;
      }
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.strongWhite};
  font-size: ${({ theme }) => theme.fontSize.h5};
  margin-bottom: 48px;
`;

export const Text = styled.p`
  margin-top: 48px;
  margin-bottom: 48px;
  font-weight: 400;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.creme};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const Copyright = styled.p`
  margin-bottom: 48px;
  color: ${({ theme }) => theme.colors.creme};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  margin-right: 16px;
`;

export const MediumWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;
