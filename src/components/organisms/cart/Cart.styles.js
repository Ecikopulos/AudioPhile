import styled from "styled-components";
import { Title } from "../../atoms/title/Title";
import { Tile } from "../../atoms/tile/Tile";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";

export const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 10;
`;

export const CartWrapper = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.strongWhite};
  position: fixed;
  right: 50%;
  top: 100px;
  transform: translateX(50%);
  border-radius: 12px;
  padding-inline: 5%;
  padding-bottom: 32px;
  z-index: 11;

  @media (min-width: 760px) {
    width: 377px;
    right: 100px;
    transform: translateX(0);
    padding-inline: 33px;
  }
`;

export const UpperPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
`;

export const StyledTitle = styled(Title)`
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.s : theme.fontSize.h6};
  line-height: 1;
`;

export const StyledText = styled(Text)`
  cursor: pointer;
`;

export const MainPart = styled.div`
  height: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  @media (max-height: 580px) {
    height: 160px;
  }

  @media (min-height: 700px) and (max-width: 500px) {
    height: 350px;
  } ;
`;

export const OrderWrapper = styled.div`
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
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AmountDiv = styled.div`
  height: 32px;
  width: 30%;
  max-width: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.creme};
`;

export const AmountButton = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.strongBlack};
  font-weight: 800;
  cursor: pointer;
  padding: 6px;
`;

export const BottomPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
