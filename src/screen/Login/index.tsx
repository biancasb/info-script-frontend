import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoInfo from "../../assets/images/InfoScript.png";

import {
  LoginWrapper,
  LoginCard,
  LogoSection,
  LogoImage,
  FormSection,
  InputGroup,
  Label,
  Input,
  LoginButton,
  ErrorMessage,
  GoogleButton,
  Divider,
  HelperText,
  Backdrop,
} from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Preencha todos os campos");
      return;
    }

    navigate("/feed");
  };

  const handleGoogleLogin = () => {
    // Placeholder para login com Google
    console.log("Login com Google");
    navigate("/feed");
  };

  // Render helpers (separadas por função para padronizar com o Feed)
  const renderLogo = () => (
    <LogoSection>
      <LogoImage src={LogoInfo} alt="InfoScript Logo" />
    </LogoSection>
  );

  const renderGoogleLogin = () => (
    <>
      <GoogleButton type="button" onClick={handleGoogleLogin}>
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
        />
        Entrar com Google
      </GoogleButton>
      <Divider>
        <span>ou</span>
      </Divider>
    </>
  );

  const renderForm = () => (
    <>
      <form onSubmit={handleLogin}>
        <InputGroup>
          <Label>Usuário</Label>
          <Input
            type="text"
            placeholder="seu_usuario"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </InputGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <LoginButton type="submit">Entrar</LoginButton>
      </form>

      <HelperText>
        Não tem conta?
        <a onClick={() => navigate("/register")}>Inscreva-se</a>
      </HelperText>
    </>
  );

  return (
    <LoginWrapper>
      <Backdrop>
        <LoginCard>
          {renderLogo()}
          <FormSection>
            {renderGoogleLogin()}
            {renderForm()}
          </FormSection>
        </LoginCard>
      </Backdrop>
    </LoginWrapper>
  );
};

export default Login;
