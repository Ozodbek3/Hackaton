import styled from "styled-components";
import {keyframes} from "styled-components";
import fon from "../../../images/fon.png"
import world from "../../../images/map.png"
import { useNavigate } from "react-router-dom";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  z-index: 100;
  background-size: cover;
  background-image: url(${fon});
  `;
  const GLobAnim = keyframes`
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  `
const Globus = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 50%;
  animation: ${GLobAnim} 15s linear infinite;
  background-size: cover;
  background-image: url(${world});
`;
const Section1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Title = styled.div`
  width: 45%;
  color: white;
  padding: 1rem;
  border-radius: 12px;
  background-color: #000000a9;
`
const HomeContainer = ({ theme }) => {
  const navigate = useNavigate();

  return(
    <Container>
      <Section1>
        <Globus></Globus>
        <Title>
          <h1>Bizning sayyora sizning yordamizdga muhtoj</h1>
          <h2>Hamma biladiki bizning sayyora , davlatimiz , shahrimiz ahlat va zararli chiqindilardan saqlash kerak</h2>
        </Title>
      </Section1>
    </Container>
  )
};

export default HomeContainer;
