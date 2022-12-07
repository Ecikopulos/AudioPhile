import styled from "styled-components";
import { Tile } from "../../atoms/tile/Tile";
import { Button } from "../../atoms/button/Button";

import circleBcg from "../../../assets/images/home/desktop/pattern-circles.svg";

import speakerImg from "../../../assets/images/home/mobile/image-speaker-zx9.png";
import speakerImgMedium from "../../../assets/images/home/tablet/image-speaker-zx9.png";
import speakerImgBig from "../../../assets/images/home/desktop/image-speaker-zx9.png";

export const Wrapper = styled(Tile)`
  position: relative;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.strongOrange};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongWhite};
  padding-inline: 5%;
  margin-bottom: 24px;
  overflow: hidden;

  h3 {
    margin-bottom: 24px;
    letter-spacing: 2px;
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: 800;
    text-transform: uppercase;
    padding-inline: 10%;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
    line-height: 25px;
  }

  @media (min-width: 768px) {
    height: 720px;

    h3 {
      font-size: ${({ theme }) => theme.fontSize.h1};
      padding-inline: 25%;
    }

    p {
      padding-inline: 25%;
    }
  }

  @media (min-width: 1100px) {
    height: 560px;
    padding-left: 60%;
    text-align: left;
    align-items: flex-start;

    h3 {
      padding-inline: 0;
    }

    p {
      padding-inline: 0;
    }
  }
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${circleBcg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: -120px;

  @media (min-width: 768px) {
    top: -230px;
  }

  @media (min-width: 1100px) {
    top: -10px;
    left: -200px;
    height: 170%;
  }
`;

export const Speaker = styled.div`
  background-image: url(${speakerImg});
  background-size: cover;
  width: 173px;
  height: 207px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    background-image: url(${speakerImgMedium});
  }

  @media (min-width: 1100px) {
    background-image: url(${speakerImgBig});
    width: 411px;
    height: 493px;
    top: 35%;
  }
`;

export const StyledButton = styled(Button)`
  position: relative;
  z-index: 1;
  margin-top: 24px;
  margin-bottom: 55px;

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 64px;
  }
`;
