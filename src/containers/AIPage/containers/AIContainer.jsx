import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  z-index: 100000;
`;
const AIContainer = styled("div")``;

const LoginContainer = ({ theme }) => {
  return <Container></Container>;
};

export default AIContainer;
