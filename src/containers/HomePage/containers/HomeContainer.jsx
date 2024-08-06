import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.secondary};
`;

const HomeContainer = ({ theme }) => {
  const navigate = useNavigate();

  return <Container></Container>;
};

export default HomeContainer;
