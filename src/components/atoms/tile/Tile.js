import styled from "styled-components";

export const Tile = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.creme};
  width: 90%;
  height: 165px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
