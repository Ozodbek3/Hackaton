import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import Ecorasm from "../../images/Ecorasm.png";

const Container = styled.div`
  height: 100vh;
background-image: url(${Ecorasm});
background-size: cover;
`;
const BackRasm = styled.img`
  height: 100vh;
  width: 100vw;
`;
const ChildrenComponent = styled("div")`
  width: 100%;
  height: 100vh;
  top: 8vh;
`;

const BaseLayout = ({ children, theme, toggleTheme }) => {
  return (
    <Container>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ChildrenComponent>
        {children} 
      </ChildrenComponent>
      <Footer theme={theme} />
    </Container>
  );
};

export default BaseLayout;
