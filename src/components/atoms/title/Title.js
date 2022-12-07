import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h4};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 38.25px;
  color: ${({ theme }) => theme.colors.strongBlack};

  @media (min-width: 760px) {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;
