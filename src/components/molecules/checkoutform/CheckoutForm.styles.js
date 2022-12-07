import styled from "styled-components";
import { Tile } from "../../atoms/tile/Tile";
import { Text } from "../../atoms/text/Text";

export const FormWrapper = styled(Tile)`
  width: 100%;
  padding-inline: 5%;
  padding-top: 24px;
  text-align: left;
  justify-content: left;
  align-items: unset;
  height: unset;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.strongWhite};

  @media (min-width: 1100px) {
    width: 64%;
  }
`;

export const OrangeText = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.strongOrange};
  line-height: 0;
  margin-top: ${({ second }) => (second ? "9px" : "32px")};
  margin-bottom: 16px;
  font-weight: 800;
`;

export const SmallTitle = styled(Text)`
  font-weight: 800;
  margin-bottom: 9px;
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding-inline: 24px;
  margin-bottom: 24px;
`;

export const CheckboxWrapper = styled.div`
  height: 40px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  padding-inline: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  & ${SmallTitle} {
    margin-bottom: 0;
  }

  @media (min-width: 760px) {
    width: 48%;
  }
`;

export const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;

  margin-right: 16px;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.strongBlack};
  border-radius: 50%;
  cursor: pointer;

  position: relative;

  &.checked::after {
    content: "";
    height: 10px;
    width: 10px;
    background-color: ${({ theme }) => theme.colors.strongOrange};
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const InputWrapper = styled.div`
  @media (min-width: 760px) {
    width: 48%;
  }
`;

export const Row = styled.div`
  @media (min-width: 760px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
`;
