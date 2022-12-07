import React from "react";
import { WrapperInside } from "../../atoms/wrappers/wrapperInside/WrapperInside";
import { SubTitle } from "../../atoms/subTitle/SubTitle";
import { Text } from "../../atoms/text/Text";
import { OrangeSpan } from "../../atoms/orangeSpan/OrangeSpan";
import { FeaturesPageWrapper } from "../../atoms/wrappers/featuresPageWrapper/FeaturesPageWrapper";

const Features = ({ text, includes }) => {
  return (
    <FeaturesPageWrapper>
      <WrapperInside>
        <SubTitle>features</SubTitle>
        <Text>{text}</Text>
      </WrapperInside>
      <WrapperInside row maxResSmall>
        <SubTitle>in the box</SubTitle>
        <div>
          {includes.map((item) => (
            <Text key={item.name}>
              <OrangeSpan>{item.amount}</OrangeSpan>
              {item.name}
            </Text>
          ))}
        </div>
        <div />
      </WrapperInside>
    </FeaturesPageWrapper>
  );
};

export default Features;
