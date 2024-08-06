import styled from "styled-components";
import Bear from "../../../images/Bear.png"
import { useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../../../constants/routes";


const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`;
const Maninbutton = styled("button")`
  position: relative;
  cursor: pointer;
  width: 12vw;
  height: 7vh;
  bottom: 5vh;
  left: 3vw;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.footer};
  &:hover {
    transition: 0.3s;
    background-color:${({ theme }) => theme.hover} ;
  }
`;
 const Word2 = styled("h1")`
  color: ${({ theme }) => theme.input};
`;

const InProgress = () => {
  const navigate = useNavigate();
  return (
    <Container>

      <Word2>This page is in progres....</Word2>
      <img src={Bear} alt="" />
      <Maninbutton onClick={() => navigate(HOME_PAGE)}>Return to Main Page</Maninbutton>

    </Container>
  );
};

export default InProgress;
