import styled from "styled-components";
import { Link } from "react-router-dom";

export const Back = styled(Link)`
  margin-top: 16px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.strongBlack};
  text-transform: capitalize;
  text-decoration: none;
  text-align: left;
  width: 90%;
`;
