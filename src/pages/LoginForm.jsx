import React from "react";
import { Header } from "../components/header";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
} from "../styles/styled";

function LoginForm() {
  // Definir los estados iniciales
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordInvalid, setPasswordInvalid] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  // Función que se llama cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar la contraseña y establecer el estado 'passwordInvalid' en consecuencia
    if (password.length < 8) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }
  };

  // Función que se llama cuando se ingresa un nombre de usuario
  const usernameEntered = (e) => {
    setUsername(e.target.value);
    buttonEnabled(username, password);
  };

  // Función que se llama cuando se ingresa una contraseña
  const passwordEntered = (e) => {
    setPassword(e.target.value);
    buttonEnabled(username, password);
  };

  // Función que habilita o deshabilita el botón de envío en función de si se han ingresado valores de nombre de usuario y contraseña válidos
  const buttonEnabled = (username, password) => {
    if (username.length > 0 && password.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  // Renderizar el formulario de inicio de sesión
  return (
    <>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Username:</StyledLabel>
        <StyledInput
          type="text"
          value={username}
          onChange={(e) => usernameEntered(e)}
        />
        <StyledLabel invalid={passwordInvalid}>Password:</StyledLabel>
        <StyledInput
          type="password"
          value={password}
          onChange={(e) => passwordEntered(e)}
        />
        {passwordInvalid && <StyledAlert>Password is invalid.</StyledAlert>}
        <StyledButton type="submit" disabled={!enabled}>
          Login
        </StyledButton>
      </StyledForm>
    </>
  );
}

// Exportar el componente LoginForm para que pueda ser utilizado en otros componentes
export default LoginForm;
