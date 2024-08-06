import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DarkLogoimg from "../../images/Darklogo.png";
import { User, Globe, Sun, Moon } from "react-feather";
import styled from "styled-components";
import { ACCOUNT_PAGE, HOME_PAGE, LOGIN_PAGE } from "../../constants/routes";
import { cookieData } from "../../utils/cookies";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  z-index: 100;
  color: ${({ theme }) => theme.color};
  background: rgb(5,158,4);
  background: linear-gradient(grey, green)
`;
const Logo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 15%;
  margin: 0 5%;
`;

const SecondDivCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: 8vh;
  margin: 0 10%;
`;
const LanguagesCont = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  border-radius: 10px;
  &&:hover {
    background-color: ${({ theme }) => theme.hover};
    transition: 1s;
  }
`;
const ThemeChanger = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  color: ${({ theme }) => theme.color};
  &&:hover {
    background-color: ${({ theme }) => theme.hover};
    transition: 1s;
  }
`;
const LogoImg = styled.img`
  width: 5rem;
  height: auto;
`;
const LogoDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  margin: 3rem 15rem;
`;
const UserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5vw;
  height: 5vh;
`;
const UserImg = styled(User)`
  border-radius: 50%;
  &&:hover {
    background-color: ${({ theme }) => theme.hover};
    transition: 1s;
  }
`;
const UserInDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 5.5vh;
  left: 85vw;
  border-radius: 1rem;
  background-color: black;
`;
const Variants = styled("div")`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 90%;
  height: 20%;
  margin: 1% 0;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transition: 0.5s;
  }
`;
const Invisible = styled("div")`
  position: absolute;
  left: 500vw;
`;

const Nvabar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  const [width, setWidth] = useState("");

  const [height, setHeight] = useState("");

  const Change = () => {
    if (width == "" && height == "") {
      setWidth("12vw");
      setHeight("20vh");
    } else {
      setWidth("");
      setHeight("");
    }
  };
  return (
    <NavContainer>
      <LogoDiv onClick={() => navigate(HOME_PAGE)}>
        {/* {theme === "light" ? (
          <LogoImg src={Logoimg} alt="" />
        ) : (
          <LogoImg src={DarkLogoimg} alt="" />
        )} */}
        <Logo>EcoSafe Uzbekistan</Logo>
      </LogoDiv>
      <SecondDivCont>
        <LanguagesCont>
          <Globe />
          Eng
        </LanguagesCont>
        <ThemeChanger onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </ThemeChanger>
        <UserDiv>
          <UserImg
            style={{ cursor: "pointer" }}
            onClick={
              cookieData("username").getValue() === ""
                ? () => navigate(LOGIN_PAGE)
                : Change
            }
          />
          {width === "" ? (
            <Invisible />
          ) : (
            <UserInDiv style={{ width: width, height: height }}>
              <Variants onClick={() => navigate(ACCOUNT_PAGE)}>
                Account
              </Variants>
              <Variants></Variants>
              <Variants></Variants>
              <Variants></Variants>
            </UserInDiv>
          )}
        </UserDiv>
      </SecondDivCont>
    </NavContainer>
  );
};

export default Nvabar;
