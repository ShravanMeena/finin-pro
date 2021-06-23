import React from "react";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  BottomLine,
  SubTitle,
  ImgWrapper,
  Img,
} from "./InfoSection.style";

export default function InfoSection({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  start,
  alt,
  src,
  textprimary,
  bottomLine,
  lightBottomLine,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <BottomLine lightBottomLine={lightBottomLine}>
                  {bottomLine}
                </BottomLine>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>

                <Link to='/sign-up'>
                  <Button
                    big
                    fontBig
                    primary={primary}
                    textprimary={textprimary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={src} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}
