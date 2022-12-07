import styled from "styled-components";
import { Text } from "../../components/atoms/text/Text";

import img from "../../assets/images/checkout/icon-order-confirmation.svg";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 48vh;
  padding: 5% 10%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Img = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 40px;
  background-image: url(${img});
  background-repeat: no-repeat;
`;

export const StyledText = styled(Text)`
  margin-top: 24px;
  margin-bottom: 40px;
`;
