import styled from "styled-components";
import icon from "../../../assets/images/shared/desktop/icon-arrow-right.svg";
import { Tile } from "../../atoms/tile/Tile";

export const Wrapper = styled(Tile)`
  position: relative;
  width: 100%;
  margin-bottom: 68px;
  justify-content: flex-end;

  img {
    width: 147px;
    height: 133px;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }

  p {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a {
    margin-top: 6px;
    margin-bottom: 16px;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    padding: 10px;
    color: ${({ theme }) => theme.colors.strongBlack};
    text-decoration: none;
  }

  @media (min-width: 768px) {
    width: 30%;
    height: 165px;
  }
`;

export const Arrow = styled.div`
  background-image: url(${icon});
  width: 8px;
  height: 12px;
  display: inline-block;
  margin-left: 13px;
`;
