import styled from "styled-components";
import LoginForm from "../components/LoginForm";

import {
  AtSign,
  UserPlus,
  UploadCloud,
  Edit3,
  LogIn,
  Mail,
} from "react-feather";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  z-index: 100000;
`;
const Logincontainer = styled("div")``;

const LoginContainer = ({ theme }) => {
  return (
    <Container>
      <Logincontainer>
        <LoginForm />
        <AtSign
          size={100}
          style={{
            position: "absolute",
            left: "25rem",
            top: "5rem",
            color: "rgba(200, 255, 255)",
          }}
        />
        <UserPlus
          size={100}
          style={{
            position: "absolute",
            left: "80rem",
            top: "10rem",
            color: "rgba(200, 255, 255)",
          }}
        />
        <UploadCloud
          size={100}
          style={{
            position: "absolute",
            left: "10rem",
            top: "20rem",
            color: "rgba(200, 255, 255)",
          }}
        />
        <Edit3
          size={100}
          style={{
            position: "absolute",
            left: "45rem",
            top: "37rem",
            color: "rgba(200, 255, 255)",
          }}
        />
        <LogIn
          size={100}
          style={{
            position: "absolute",
            left: "70rem",
            top: "30rem",
            color: "rgba(200, 255, 255)",
          }}
        />
        <Mail
          size={100}
          style={{
            position: "absolute",
            left: "20rem",
            top: "38rem",
            color: "rgba(200, 255, 255)",
          }}
        />
      </Logincontainer>
    </Container>
  );
};

export default LoginContainer;
