import styled from "styled-components";
import { Tile } from "../tile/Tile";

export const GalleryImage = styled(Tile)`
  height: ${({ big }) => (big ? "368px" : "174px")};
  margin-bottom: 20px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;

  @media (min-width: 760px) {
    background-image: url(${({ imgM }) => imgM});
  }

  @media (min-width: 1100px) {
    background-image: url(${({ imgB }) => imgB});
  }
`;
