import styled from "styled-components";

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.strongBlack};
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (min-width: 760px) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
`;
