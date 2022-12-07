import styled from "styled-components";

export const TitleBcg = styled.div`
  height: 192px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.strongBlack};
  color: ${({ theme }) => theme.colors.strongWhite};
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.h4};
  text-transform: uppercase;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 64px;
`;
