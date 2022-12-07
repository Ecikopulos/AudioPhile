import React from "react";
import { TitleBcg } from "../../components/atoms/titleBcg/TitleBcg";
import Product from "../../components/molecules/product/product";

import { yx1Data as yx1 } from "../../assets/data/yx1Data";

const Earphones = () => {
  return (
    <>
      <TitleBcg>speakers</TitleBcg>
      <Product
        img={yx1.imageSmall}
        imgM={yx1.imageMedium}
        imgB={yx1.imageBig}
        title={yx1.title}
        text={yx1.text}
        link={yx1.link}
        newProduct={yx1.newProduct}
      />
    </>
  );
};

export default Earphones;
