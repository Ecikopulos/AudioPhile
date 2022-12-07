import React from "react";
import { BlackSpace } from "../../atoms/blackSpace/BlackSpace";
import { Back } from "../../atoms/back/Back";
import ProductDetail from "../../../components/molecules/productDetail/ProductDetail";
import { DetailedPagesWrapper } from "../../atoms/wrappers/detailedPagesWrapper/DetailedPagesWrapper";
import Features from "../../../components/molecules/features/Features";
import Gallery from "../../../components/molecules/gallery/Gallery";
import { useNavigate } from "react-router-dom";

const DetailedPage = ({ data }) => {
  const navigate = useNavigate();
  return (
    <DetailedPagesWrapper>
      <BlackSpace />
      <Back onClick={() => navigate(-1)}>go back</Back>
      <ProductDetail
        img={data.imageSmall}
        imgM={data.imageMedium}
        imgB={data.imageBig}
        title={data.title}
        text={data.text}
        price={data.price}
        newProduct={data.newProduct}
        cartTitle={data.cartTitle}
      />
      <Features text={data.detailedText} includes={data.includes} />
      <Gallery
        g1s={data.gallery1Small}
        g1m={data.gallery1Medium}
        g1b={data.gallery1Big}
        g2s={data.gallery2Small}
        g2m={data.gallery2Medium}
        g2b={data.gallery2Big}
        g3s={data.gallery3Small}
        g3m={data.gallery3Medium}
        g3b={data.gallery3Big}
      />
    </DetailedPagesWrapper>
  );
};

export default DetailedPage;
