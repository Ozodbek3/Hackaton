import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";


const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 23rem;
  width: 100%;
  z-index: 10000;
  color: #ffffff;
  background: rgb(5,158,4);
  background: linear-gradient(180deg, rgba(5,158,4,0.8828781512605042) 0%, rgba(32,127,12,1) 37%, rgba(52,113,10,1) 100%);
`;

const Footer = ({ theme }) => {
  return <FooterContainer>

  </FooterContainer>;
};

export default Footer;
