import React from "react";
import { Img, PageWrapper, StyledText } from "./FinalPage.styles";
import { BlackSpace } from "../../components/atoms/blackSpace/BlackSpace";
import { Title } from "../../components/atoms/title/Title";
import { Button } from "../../components/atoms/button/Button";
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
  const navigation = useNavigate();

  return (
    <>
      <BlackSpace />
      <PageWrapper>
        <Img />
        <Title>THANK YOU FOR THE ORDER</Title>
        <StyledText>You will receive an email confirmation shortly.</StyledText>
        <Button orange onClick={() => navigation("/")}>
          BACK TO HOME
        </Button>
      </PageWrapper>
    </>
  );
};

export default FinalPage;
