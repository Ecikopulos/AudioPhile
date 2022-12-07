import styled from "styled-components";
import { Tile } from "../../atoms/tile/Tile";

import background from "../../../assets/images/home/mobile/image-speaker-zx7.jpg";
import backgroundMedium from "../../../assets/images/home/tablet/image-speaker-zx7.jpg";
import backgroundBig from "../../../assets/images/home/desktop/image-speaker-zx7.jpg";

export const Wrapper = styled(Tile)`
  background-image: url(${background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 320px;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    background-image: url(${backgroundMedium});
  }

  @media (min-width: 768px) {
    background-image: url(${backgroundBig});
  }
`;
