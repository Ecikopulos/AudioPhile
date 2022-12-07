import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.strongBlack};
  white-space: pre-line;
`;
