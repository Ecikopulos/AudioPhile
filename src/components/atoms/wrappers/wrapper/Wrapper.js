import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1100px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    padding-inline: 10%;
    justify-content: space-between;
  }
`;
