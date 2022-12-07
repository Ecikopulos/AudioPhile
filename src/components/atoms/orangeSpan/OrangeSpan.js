import styled from "styled-components";

export const OrangeSpan = styled.span`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.strongOrange};
  margin-right: 24px;
`;
