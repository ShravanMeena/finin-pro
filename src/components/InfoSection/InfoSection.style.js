import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 70px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#000000")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 960px) {
    display: flex;
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 960px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const BottomLine = styled.div`
  color: ${({ lightTopLine }) => (!lightTopLine ? "#a9b3c1" : "#4b59f7")};
  font-size: 36px;
  letter-spacing: 1.4px;
  margin-bottom: 25px;
  font-weight: 500;
`;

export const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? "#36e2a3" : "#1c2237")};
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
`;

export const SubTitle = styled.p`
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
  font-size: 18px;
  line-height: 24px;
  max-width: 440px;
  margin-bottom: 35px;
`;

export const ImgWrapper = styled.div`
  max-width: 550px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  /* max-height: 500px; */
  object-fit: contain;
`;

export const KeyPoint = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const KeyPointItem = styled.div`
  width: 45%;
`;

export const KeyPointItemImg = styled.img`
  object-fit: contain;
  width: 20px;
`;

export const KeyPointItemText = styled.h1`
  width: 100%;
  margin-bottom: 15px;
  font-size: 17px;
  color: #7d7d7d;
  font-weight: 500;
`;
