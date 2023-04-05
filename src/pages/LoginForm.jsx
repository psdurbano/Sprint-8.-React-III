import React, { useState } from "react";
import { Header } from "../components/header";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
  CenteredFormContainer,
} from "../styles/styled";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  // Definir los estados iniciales
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  // Función que se llama cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el email y establecer el estado 'emailInvalid' en consecuencia
    if (!email.includes("@")) {
      setEmailInvalid(true);
      return;
    } else {
      setEmailInvalid(false);
    }

    // Validar la contraseña y establecer el estado 'passwordInvalid' en consecuencia
    if (password.length < 8) {
      setPasswordInvalid(true);
      return;
    } else {
      setPasswordInvalid(false);
    }
    if (email !== null && password !== null) {
      navigate("/");
    }

    // Guardar el usuario en el local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  // Función que se llama cuando se ingresa un nombre de usuario
  const usernameEntered = (e) => {
    setUsername(e.target.value);
    buttonEnabled(username, email, password);
  };

  // Función que se llama cuando se ingresa un email
  const emailEntered = (e) => {
    setEmail(e.target.value);
    buttonEnabled(username, email, password);
  };

  // Función que se llama cuando se ingresa una contraseña
  const passwordEntered = (e) => {
    setPassword(e.target.value);
    buttonEnabled(username, email, password);
  };

  // Función que habilita o deshabilita el botón de envío en función de si se han ingresado valores de nombre de usuario, email y contraseña válidos
  const buttonEnabled = (username, email, password) => {
    if (username.length > 0 && email.length > 0 && password.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  // Renderizar el formulario de inicio de sesión dentro del div centrado
  return (
    <>
      <Header />
      <CenteredFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>Username:</StyledLabel>
          <StyledInput
            type="text"
            value={username}
            onChange={(e) => usernameEntered(e)}
          />
          <StyledLabel invalid={emailInvalid}>Email:</StyledLabel>
          <StyledInput
            type="text"
            value={email}
            onChange={(e) => emailEntered(e)}
          />
          {emailInvalid && <StyledAlert>Email is invalid.</StyledAlert>}
          <StyledLabel invalid={passwordInvalid}>Password:</StyledLabel>
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => passwordEntered(e)}
          />
          {passwordInvalid && <StyledAlert>Password is invalid.</StyledAlert>}
          <StyledButton type="submit" disabled={!enabled}>
            Register
          </StyledButton>
        </StyledForm>
      </CenteredFormContainer>
    </>
  );
}

// Exportar el componente RegisterForm para que pueda ser utilizado en otros componentes
export default RegisterForm;
