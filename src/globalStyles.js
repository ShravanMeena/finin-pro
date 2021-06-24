import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: Avenir-Roman;
  src: url("./assets/font/Avenir-Roman.ttf") format("truetype");
}
@font-face {
  font-family: Avenir-Medium;
  src: url("./assets/fonts/Avenir-Medium.ttf") format("truetype");
}
@font-face {
  font-family: Avenir-Heavy;
  src: url("./assets/fonts/Avenir-Heavy.ttf") format("truetype");
  font-weight: 900;
}
@font-face {
  font-family: Avenir-Black;
  src: url("./assets/fonts/Avenir-Black.ttf") format("truetype");
  font-weight: 900;
}
@font-face {
  font-family: Avenir;
  src: url("./assets/fonts/Avenir-Book.ttf");
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  font-family: Avenir;
  scroll-behavior: smooth;

}
  body{
   overflow-x: hidden;
    background-color: #000000;
    margin: 0; 
     font-family: Avenir;
    padding: 0;
  }

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#36e2a3" : "#121212")};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  white-space: nowrap;
  color: ${({ textprimary }) => (!textprimary ? "#36e2a3" : "#121212")};
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    transition: all 0.3s ease;
    background: ${({ primary }) => (!primary ? "#36e2a3" : "#121212")};
    color: ${({ textprimary }) => (textprimary ? "#36e2a3" : "#121212")};
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export default GlobalStyle;
