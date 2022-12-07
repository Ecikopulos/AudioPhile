import styled from "styled-components";

export const Button = styled.button`
  width: 160px;
  height: 48px;
  border: ${({ theme, transparent }) =>
    transparent ? `solid 1px ${theme.colors.strongBlack} ` : "none"};
  background-color: ${({ theme, orange, transparent }) =>
    orange
      ? theme.colors.strongOrange
      : transparent
      ? "transparent"
      : theme.colors.strongBlack};
  color: ${({ theme, orange, transparent }) =>
    orange || transparent
      ? theme.colors.strongBlack
      : theme.colors.strongWhite};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.2s, background-color 0.2s;
  cursor: pointer;
  font-weight: 800;

  &:hover {
    background-color: ${({ theme, orange, transparent }) =>
      orange
        ? theme.colors.weakOrange
        : transparent
        ? theme.colors.strongBlack
        : theme.colors.strongWhite};
    color: ${({ theme, orange, transparent }) =>
      orange || transparent
        ? theme.colors.strongWhite
        : theme.colors.strongBlack};
  }
  
  &:disabled {
   background-color: ${({ theme }) => theme.colors.gray};
`;
