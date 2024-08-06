// Footer.js
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaTelegram , FaInstagramSquare,FaYoutube,} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterContainer = styled.footer`
  background-color: #2d572c; /* Темно-зеленый цвет */
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
`;
const FooterSection1 = styled.div`
  position: relative;
  left: -30rem;
  top: -15rem;
`;
const FooterSection = styled.div`
  margin-bottom: 20px;
`;
const FooterTitle1 = styled.h2`
  position: relative;
  margin-bottom: 10px;
  font-size: 24px;
`;

const FooterTitle = styled.h2`
  position: relative;
  margin-bottom: 10px;
  font-size: 24px;
`;

const FooterText = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const FooterFormDiv = styled.div`
  position: relative;
  left: 34rem;
`;
const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;
const FooterInputMessage = styled.input`
  height: 30px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;

const FooterButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50; /* Зеленый цвет */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049; /* Темнее зеленый цвет */
  }
`;
const SolutionsDiv = styled.div`
  position: relative;
  top: -12rem;
  left: 6rem;
  width: 20%;

`;
const SolutionsA = styled.a`
  position: relative;
  top: 1rem;
  display: flex;
  align-items: center;
  height: 2rem;
  cursor: pointer;
  color: white;
  &&:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-decoration-color: white;
  }
  span {
    margin-right: 0.5rem;
  }

`;

const Footer = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameInput = event.target.name;
    const emailInput = event.target.email;

    if (!nameInput.value) {
      setNameError("please enter a valid data");
    } else {
      setNameError("");
    }

    if (!emailInput.value) {
      setEmailError("please enter a valid data");
    } else {
      setEmailError("");
    }

    if (nameInput.value && emailInput.value) {
      // Обработайте запрос здесь
      alert("Sended!");
    }
  };

  return (
    <FooterContainer>

      <FooterSection>
        <FooterFormDiv>
          <FooterForm onSubmit={handleSubmit}>
            <FooterInput type="text" placeholder="Your name" required />
            <FooterInput type="email" placeholder="Your email" required />
            <FooterInputMessage
              type="text"
              placeholder="Enter message"
              required
            />
            <FooterButton type="submit">Send message</FooterButton>
          </FooterForm>
        </FooterFormDiv>
      </FooterSection>
      <SolutionsDiv>
<h3 style={{color:"white"}}>Social Media</h3>
<SolutionsA href="https://t.me/UzSafetynews">
  <span><FaTelegram /></span>
  Telegram
</SolutionsA>
<SolutionsA href="https://www.instagram.com/">
  <span><FaInstagramSquare /></span>
  Instagram
</SolutionsA>
<SolutionsA href="https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_">
  <span><FaYoutube /></span>
  Youtube
</SolutionsA>
<SolutionsA href="https://x.com/home">
  <span><FaSquareXTwitter /></span>
  X.com
</SolutionsA>
<SolutionsA>All information about us</SolutionsA>
</SolutionsDiv>
      <FooterSection>
        <FooterTitle1>About Us</FooterTitle1>
        <FooterText>
          Мы заботимся о будущем планеты и стремимся к экологически устойчивому
          развитию.
        </FooterText>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
