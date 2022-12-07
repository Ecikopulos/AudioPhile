import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 2200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 2200px) {
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;
