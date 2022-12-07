import styled from "styled-components";

export const WrapperInside = styled.div`
  width: ${({ big }) => (big ? "100%" : "90%")};
  text-align: left;
  margin-bottom: 88px;
  display: flex;
  flex-direction: column;
  align-items: ${({ big }) => (big ? "center" : "flex-start")};

  @media (min-width: 760px) {
    flex-direction: ${({ row }) => (row ? "row" : "column")};
    justify-content: ${({ row }) => (row ? "space-between" : "unset")};
    width: ${({ gallery }) => (gallery ? "90%" : "inherit")};
  }

  @media (min-width: 1100px) {
    flex-direction: ${({ gallery }) => (gallery ? "row" : "column")};
    justify-content: ${({ gallery }) => (gallery ? "space-between" : "unset")};
    width: ${({ maxResSmall, gallery }) =>
      maxResSmall ? "30%" : gallery ? "90%" : "60%"};
  }
`;
