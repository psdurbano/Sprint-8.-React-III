import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
  CenteredFormContainer,
} from "../styles/styled";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    setLoginError("");
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setLoginError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password);

    // Aquí debes validar si el username y password son correctos
    // En este ejemplo, asumimos que si el username no existe, redireccionamos a la pantalla de registro
    if (username === storedUsername && password === storedPassword) {
      navigate("/ShipList");
    } else {
      setLoginError("Invalid username or password");
    }
  }

  return (
    <>
      <Header />
      <CenteredFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            Username:
            <StyledInput
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </StyledLabel>
          <br />
          <StyledLabel>
            Password:
            <StyledInput
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </StyledLabel>
          {loginError && <StyledAlert>{loginError}</StyledAlert>}
          <br />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </CenteredFormContainer>
    </>
  );
}

export default Login;
