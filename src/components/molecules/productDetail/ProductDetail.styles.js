import styled from "styled-components";
import { Tile } from "../../atoms/tile/Tile";
import { Title } from "../../atoms/title/Title";
import { Text } from "../../atoms/text/Text";
import { RowWrapper } from "../../atoms/wrappers/rowWrapper/RowWrapper";
import { Wrapper } from "../../atoms/wrappers/wrapper/Wrapper";

export const StyledWrapper = styled(Wrapper)`
  @media (min-width: 760px) {
    width: 90%;
    flex-direction: row;
    margin-bottom: 120px;
    height: 480px;
  }

  @media (min-width: 760px) {
    margin-bottom: 160px;
    height: 560px;
  }

  @media (min-width: 1100px) {
    justify-content: space-between;
    padding: 0;
  }
`;

export const Bcg = styled(Tile)`
  height: 352px;
  margin-bottom: 32px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (min-width: 760px) {
    background-image: url(${({ imgM }) => imgM});
    margin-bottom: 0;
    height: 100%;
    background-size: cover;
  }

  @media (min-width: 1100px) {
    background-image: url(${({ imgB }) => imgB});
  }
`;

export const StyledRowWrapper = styled(RowWrapper)`
  text-align: left;
  padding-inline: 5%;

  @media (min-width: 760px) {
    width: 50%;
  }

  @media (min-width: 1100px) {
    width: 100%;
    padding-right: 10%;
    height: 560px;
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled(Title)`
  white-space: pre-line;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const StyledText = styled(Text)`
  margin-bottom: 24px;

  @media (min-width: 1100px) {
    padding: 0;
  }
`;

export const StyledPrice = styled.p`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.h6};
`;

export const AmountDiv = styled.div`
  height: 48px;
  width: 30%;
  max-width: 120px;
  background-color: ${({ theme }) => theme.colors.creme};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.strongBlack};
  font-weight: 800;
  line-height: 48px;
  display: flex;
  justify-content: space-around;
  margin-right: 16px;
`;

export const AmountButton = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.strongBlack};
  font-weight: 800;
  cursor: pointer;
  padding: 12px;

  &:disabled {
    color: ${({ theme }) => theme.colors.strongOrange};
  }
`;

export const BuyWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 31px;
  margin-bottom: 88px;
  @media (min-width: 760px) {
    margin-bottom: 0;
  }
`;
