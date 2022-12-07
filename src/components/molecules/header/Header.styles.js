import styled from "styled-components";

import headerImg from "../../../assets/images/home/mobile/image-header.jpg";
import headerImgMedium from "../../../assets/images/home/tablet/image-header.jpg";
import headerImgBig from "../../../assets/images/home/desktop/image-hero.jpg";

export const Wrapper = styled.header`
  background-image: url(${headerImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 92px;

  @media (min-width: 768px) {
    background-image: url(${headerImgMedium});
  }

  @media (min-width: 1100px) {
    background-image: url(${headerImgBig});
    height: 729px;
  }
`;

export const Shadow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.strongWhite};
  padding-inline: 20px;
  text-align: center;

  h2 {
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSize.h3};
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.weakWhite};
    margin-bottom: 26px;
    line-height: 25px;
  }

  @media (min-width: 768px) {
    padding-inline: 20%;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.h1};
    }

    p {
      padding-inline: 15%;
      margin-bottom: 40px;
    }
  }

  @media (min-width: 1100px) {
    height: 729px;
    align-items: flex-start;
    text-align: left;
    padding-left: 10%;
    padding-right: 60%;

    p {
      padding-inline: 0;
    }
  }
`;
