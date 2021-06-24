import React from "react";
import {
  SecuritySec,
  SecurityRow,
  SecurityColumn,
  Title,
  SubTitle,
  SecurityImg,
  TextWrapper,
  ImgWrapper,
  SecurityPoint,
  SecurityKeyPoint,
  SecurityPointImg,
  SecurityPointHeading,
  SecurityPointSubHeading,
} from "./SecuritySection.style";

export default function SecuritySection({
  src,
  alt,
  headline,
  description,
  keyPointData,
  imgStart,
  start,
  lightBg,
  lightText,
  fontSizeBig,
  marginBig,
}) {
  return (
    <>
      <SecuritySec lightBg={lightBg}>
        <SecurityRow imgStart={imgStart}>
          <SecurityColumn>
            <TextWrapper>
              <Title lightText={lightText}>{headline}</Title>
              <SubTitle>{description}</SubTitle>
              <ImgWrapper start={start}>
                <SecurityImg src={src} alt={alt} />
              </ImgWrapper>
            </TextWrapper>
          </SecurityColumn>
          <SecurityColumn>
            {keyPointData.map((key, index) => {
              return (
                <SecurityPoint>
                  <SecurityPointImg src={key.icon} alt={alt} />
                  <SecurityKeyPoint>
                    <SecurityPointHeading
                      marginBig={marginBig}
                      fontSizeBig={fontSizeBig}>
                      {key.label}
                    </SecurityPointHeading>
                    <SecurityPointSubHeading>
                      {key.subLabel}
                    </SecurityPointSubHeading>
                  </SecurityKeyPoint>
                </SecurityPoint>
              );
            })}
          </SecurityColumn>
        </SecurityRow>
      </SecuritySec>
    </>
  );
}
