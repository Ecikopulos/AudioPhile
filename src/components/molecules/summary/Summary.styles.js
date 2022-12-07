import styled from "styled-components";
import { Tile } from "../../atoms/tile/Tile";
import { Title } from "../../atoms/title/Title";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";

export const Wrapper = styled(Tile)`
  width: 100%;
  padding-inline: 5%;
  padding-top: 24px;
  text-align: left;
  justify-content: left;
  align-items: unset;
  height: unset;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.strongWhite};
  position: relative;

  @media (min-width: 1100px) {
    width: 32%;
    height: 100%;
  }
`;

export const OrderWrapper = styled.div`
  margin-top: 31px;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SmallTile = styled(Tile)`
  height: 64px;
  width: 64px;
  background-image: url(${({ bcg }) => bcg});
  background-size: contain;
  background-repeat: unset;
  background-position: center;
  margin-right: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ noJustify }) =>
    noJustify ? "unset" : "space-between"};
  margin-bottom: ${({ noJustify, bigMargin }) =>
    noJustify ? "0" : bigMargin ? "32px" : "8px"};
  margin-top: ${({ bigMargin }) => (bigMargin ? "16px" : "0")};
`;

export const StyledTitle = styled(Title)`
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.s : theme.fontSize.h6};
  line-height: 1;
`;

export const SmallTitle = styled(Text)`
  font-weight: 800;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 32px;
`;

export const Error = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: tomato;
  width: 100%;
  height: 30px;
  text-align: center;

  & p {
    line-height: 30px;
  }
`;

export const CartWrapper = styled.div`
  height: 285px;
  overflow-y: scroll;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
