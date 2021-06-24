import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  background-color: #000;
  padding: 80px 110px;

  @media screen and (max-width: 960px) {
    padding: 80px 20px;
    text-align: center;
  }
`;

export const ContactHeader = styled.h1`
  font-size: 40px;
  color: #36e2a3;
`;
export const ContactSubHeader = styled.p`
  font-size: 16px;
  color: #f5f5f5;
  font-weight: 400;
  margin-top: 20px;
`;

export const ContactDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 80px 0;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const ContactDetails = styled.div`
  width: 300px;
  height: 200px;
  background: #121212;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.05);
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 30px;
  }
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
`;
export const SubTitle = styled.h2`
  color: #36e2a3;
  font-size: 22px;
`;
