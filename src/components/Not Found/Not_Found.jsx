import styled from "styled-components";
import { CloudOff, Frown } from "react-feather";
import * as ROUTES from "../routes";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../../constants/routes";

const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 10rem;
  color: #024059;
  background-color: white;
`;
const Error404 = styled.h1`
  font-size: 6rem;
  margin-top: -3rem;
`;
const Maninbutton = styled("button")`
  position: relative;
  cursor: pointer;
  width: 12vw;
  height: 7vh;
  bottom: 14vh;
  left: 12vw;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  color: white;
  background-color: rgb(76, 175, 80);
  &:hover {
    transition: 0.3s;
    background-color: rgb(62, 142, 65);
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <Frown
        size={150}
        style={{ position: "relative", top: "-5rem", color: "grey" }}
      />
      <Error404>404</Error404>
      <h1>Page Not Found</h1>
      <Maninbutton onClick={() => navigate(HOME_PAGE)}>Return to Main Page</Maninbutton>
      <CloudOff
        style={{ position: "relative", top: "-25rem", left: "-17rem" }}
        size={100}
      />
      <CloudOff
        style={{ position: "relative", top: "-20rem", left: "20rem" }}
        size={150}
      />
      <CloudOff
        size={130}
        style={{ position: "relative", top: "5rem", left: "-24rem" }}
      />
    </NotFoundContainer>
  );
};

export default NotFoundPage;
