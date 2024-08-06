import { useNavigate } from "react-router-dom";
import Logoimg from "../../images/photo_5300947692010199516_y-removebg-preview.png";
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
`;
const Logo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 10%;
  margin: 0 5%;
`;

const SecondDivCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: 8vh;
  margin: 0 10%;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 12px;
  backdrop-filter: blur(10rem);
  background-color: #00000060;
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
  width: 10rem;
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
  border-radius: 50%;
  &&:hover {
    background-color: ${({ theme }) => theme.hover};
    transition: 1s;
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <LogoDiv onClick={() => navigate(HOME_PAGE)}>
        {theme === "light" ? (
          <LogoImg src={Logoimg} alt="" />
          ) : (
          <LogoImg src={DarkLogoimg} alt="" />
          )} 
        <Logo></Logo>
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
          <User
            style={{ cursor: "pointer" }}
            onClick={
              cookieData("username").getValue() === ""
                ? () => navigate(LOGIN_PAGE)
                : Change
              }
          />
        </UserDiv>
      </SecondDivCont>
    </NavContainer>
  );
};

export default Navbar;