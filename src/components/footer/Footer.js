import React from "react";
import { FooterContainer, Heading, Anchor } from "./Footer.style";

export default function Footer() {
  return (
    <FooterContainer>
      <Heading>
        © 2021 Designed By{" "}
        <Anchor href='https://www.pakkamarwadi.tk/' target='_blank'>
          Shravanmeena
        </Anchor>
      </Heading>
    </FooterContainer>
  );
}
