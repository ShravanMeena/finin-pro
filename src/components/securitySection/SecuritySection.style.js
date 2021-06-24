import styled from "styled-components";

export const SecuritySec = styled.div`
  color: #000;
  padding: 100px 0px 20px 100px;
  background: ${({ lightBg }) => (lightBg ? "#36e2a3" : "#ffe452")};

  @media screen and (max-width: 960px) {
    padding: 60px 40px;
  }
`;

export const SecurityRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const SecurityColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 60px;
  /* width: 60%; */
  @media screen and (max-width: 960px) {
    padding-bottom: 65px;
    text-align: center;
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

export const Title = styled.h1`
  color: ${({ lightText }) => (lightText ? "#fff" : "#1c2237")};
  margin-bottom: 24px;
  font-size: 48px;
`;

export const SubTitle = styled.p`
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
  font-size: 18px;
  line-height: 24px;
  max-width: 440px;
  margin-bottom: 35px;
`;

export const ImgWrapper = styled.div``;

export const SecurityImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  /* max-height: 500px; */
  object-fit: contain;
`;

export const SecurityPoint = styled.div`
  max-width: 420px;
  display: flex;
  /* flex-direction: ${({ direction }) => (direction ? "row" : "column")}; */
  align-items: flex-start;
  margin-bottom: 10px;

  /* work will be complete in the future */
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const SecurityPointImg = styled.img`
  width: 100px;
  object-fit: contain;
  margin-right: 30px;
`;

export const SecurityKeyPoint = styled.div`
  width: 100%;
  @media screen and (max-width: 960px) {
    margin-top: 20px;
  }
`;

export const SecurityPointHeading = styled.h1`
  color: ${({ lightText }) => (lightText ? "#36e2a3" : "#1c2237")};
  margin-bottom: ${({ marginBig }) => (marginBig ? "65px" : "20px")};
  font-size: ${({ fontSizeBig }) => (fontSizeBig ? "25px" : "28px")};
  line-height: 1;
  font-weight: 600;
`;

export const SecurityPointSubHeading = styled.p`
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
  font-size: 18px;
  line-height: 20px;
  max-width: 440px;
  margin-bottom: 35px;
`;
