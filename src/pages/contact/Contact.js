import React from "react";
import {
  ContactContainer,
  ContactHeader,
  ContactSubHeader,
  ContactDetailsContainer,
  ContactDetails,
  Title,
  SubTitle,
} from "./Contact.style";

const data = [
  { title: "Email Us", subTitle: "support@finin.in" },
  { title: "Whatsapp Us", subTitle: "+91 93352 47365" },
  { title: "Call Us", subTitle: "+91 80082 47365" },
];

export default function Contact() {
  return (
    <>
      <ContactContainer>
        <ContactHeader>CONTACT US</ContactHeader>
        <ContactSubHeader>
          We like to leave all channels of communication open and accessible to
          you so that all your questions turn into answers in as little time as
          possible.
        </ContactSubHeader>
        <ContactSubHeader>
          Have a question? Contact us using any of the following and we promise
          to respond to you ASAP!
        </ContactSubHeader>

        <ContactDetailsContainer>
          {data.map((det, index) => {
            return (
              <ContactDetails key={index}>
                <Title>{det.title}</Title>
                <SubTitle>{det.subTitle}</SubTitle>
              </ContactDetails>
            );
          })}
        </ContactDetailsContainer>
        <ContactSubHeader>
          We'll be burning the proverbial midnight oil for you! Be sure to stop
          by no matter what it is you'd like to ask, be it about savings account
          creations, a quick chat about the latest in Fintech news, or to know
          everything about neobanks or simply to say hello. All questions are
          welcome! 😊
        </ContactSubHeader>
      </ContactContainer>
    </>
  );
}
