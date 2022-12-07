import React from "react";
import { TitleBcg } from "../../components/atoms/titleBcg/TitleBcg";
import Product from "../../components/molecules/product/product";

import { zx9Data as zx9 } from "../../assets/data/zx9Data";
import { zx7Data as zx7 } from "../../assets/data/zx7Data";

const Speakers = () => {
  return (
    <>
      <TitleBcg>speakers</TitleBcg>
      <Product
        img={zx9.imageSmall}
        imgM={zx9.imageMedium}
        imgB={zx9.imageBig}
        title={zx9.title}
        text={zx9.text}
        link={zx9.link}
        newProduct={zx9.newProduct}
      />
      <Product
        reverse
        img={zx7.imageSmall}
        imgM={zx7.imageMedium}
        imgB={zx7.imageBig}
        title={zx7.title}
        text={zx7.text}
        link={zx7.link}
        newProduct={zx7.newProduct}
      />
    </>
  );
};

export default Speakers;
