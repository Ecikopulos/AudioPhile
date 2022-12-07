import React, { useEffect } from "react";
import { WrapperInside } from "../../atoms/wrappers/wrapperInside/WrapperInside";
import { GalleryWrapper } from "../../atoms/wrappers/galleryWrapper/GalleryWrapper";
import { GalleryImage } from "../../atoms/galleryImage/GalleryImage";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = ({ g1s, g2s, g3s, g1m, g2m, g3m, g1b, g2b, g3b }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <WrapperInside big row gallery>
      <GalleryWrapper>
        <GalleryImage img={g1s} imgM={g1m} imgB={g1b} data-aos="fade-down" />
        <GalleryImage img={g2s} imgM={g2m} imgB={g2b} data-aos="fade-up" />
      </GalleryWrapper>
      <GalleryWrapper>
        <GalleryImage img={g3s} imgM={g3m} imgB={g3b} big data-aos="zoom-in" />
      </GalleryWrapper>
    </WrapperInside>
  );
};

export default Gallery;
