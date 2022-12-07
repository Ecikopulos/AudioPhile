import styled from "styled-components";

export const DetailedPagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.creme : "none"};
`;
