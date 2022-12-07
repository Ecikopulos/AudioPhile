import styled from "styled-components";
import { Tile } from "../../atoms/tile/Tile";

import background from "../../../assets/images/shared/mobile/image-best-gear.jpg";
import backgroundMedium from "../../../assets/images/shared/tablet/image-best-gear.jpg";
import backgroundBig from "../../../assets/images/shared/desktop/image-best-gear.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    flex-direction: row-reverse;
    padding-inline: 5%;
  }
`;

export const BcgTile = styled(Tile)`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;

  @media (min-width: 768px) {
    background-image: url(${backgroundMedium});
  }

  @media (min-width: 1100px) {
    background-image: url(${backgroundBig});
    height: 588px;
    width: 49%;
    margin-bottom: 200px;
  }
`;

export const ContentWrapper = styled.div`
  @media (min-width: 1100px) {
    height: 588px;
    width: 49%;
    text-align: left;
  }
`;

export const Title = styled.h4`
  margin-top: 40px;
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: 800;
  text-transform: uppercase;
  padding-inline: 5%;

  span {
    color: ${({ theme }) => theme.colors.strongOrange};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.h2};
    margin-top: 63px;
    padding-inline: 15%;
  }

  @media (min-width: 1100px) {
    margin-top: 0;
    padding-inline: 0;
    padding-right: 25%;
  }
`;

export const Text = styled.p`
  padding-inline: 5%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 120px;

  @media (min-width: 1100px) {
    margin-bottom: 0;
    padding-inline: 0;
    padding-right: 35%;
    font-size: ${({ theme }) => theme.fontSize.h6};
  }
`;
