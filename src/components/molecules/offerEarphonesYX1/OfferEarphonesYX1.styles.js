import styled from "styled-components";
import { Tile } from "../../atoms/tile/Tile";

import background from "../../../assets/images/home/mobile/image-earphones-yx1.jpg";
import backgroundMedium from "../../../assets/images/home/tablet/image-earphones-yx1.jpg";
import backgroundBig from "../../../assets/images/home/desktop/image-earphones-yx1.jpg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 32px;
    margin-bottom: 96px;
  }
`;

export const BackgroundTile = styled(Tile)`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  margin-top: 24px;
  margin-bottom: 24px;
  height: 200px;

  @media (min-width: 768px) {
    background-image: url(${backgroundMedium});
    margin: 0;
    width: 49%;
    height: 320px;
  }

  @media (min-width: 1100px) {
    background-image: url(${backgroundBig});
  }
`;

export const OfferTile = styled(Tile)`
  height: 200px;
  padding-inline: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 120px;

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
    font-weight: 800;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    width: 49%;
    height: 320px;
    justify-content: center;
    margin: 0;

    h4 {
      margin-bottom: 32px;
    }
  }
`;
