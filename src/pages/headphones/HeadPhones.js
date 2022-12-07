import React from "react";
import { TitleBcg } from "../../components/atoms/titleBcg/TitleBcg";
import Product from "../../components/molecules/product/product";

import { xx99twoData as x92 } from "../../assets/data/xx99twoData";
import { xx99oneData as x91 } from "../../assets/data/xx99oneData";
import { xx59Data as x59 } from "../../assets/data/xx59Data";

const HeadPhones = () => {
  return (
    <>
      <TitleBcg>headphones</TitleBcg>
      <Product
        img={x92.imageSmall}
        imgM={x92.imageMedium}
        imgB={x92.imageBig}
        title={x92.title}
        text={x92.text}
        link={x92.link}
        newProduct={x92.newProduct}
      />
      <Product
        reverse
        img={x91.imageSmall}
        imgM={x91.imageMedium}
        imgB={x91.imageBig}
        title={x91.title}
        text={x91.text}
        link={x91.link}
        newProduct={x91.newProduct}
      />
      <Product
        img={x59.imageSmall}
        imgM={x59.imageMedium}
        imgB={x59.imageBig}
        title={x59.title}
        text={x59.text}
        link={x59.link}
        newProduct={x59.newProduct}
      />
    </>
  );
};

export default HeadPhones;
