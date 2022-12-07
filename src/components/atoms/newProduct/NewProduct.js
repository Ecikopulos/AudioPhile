import styled from "styled-components";

export const NewProduct = styled.p`
  &&& {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 10px;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme, orange }) =>
      orange ? theme.colors.strongOrange : theme.colors.gray};
    margin-bottom: 16px;
  }
`;
