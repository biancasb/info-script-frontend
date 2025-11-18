import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import infoScriptLogo from "./assets/images/infoScript.png";
import Feed from "./screen/Feed";
type AuthMode = "login" | "register";


const GlobalStyle = createGlobalStyle`
  :root {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #0f172a;
    background-color: #dcdcdc;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #dcdcdc;
  }
`;

const AuthCard = styled.div`
  background: #ffffff;
  width: 420px;
  max-width: 90vw;
  padding-top: 20px;
  padding-bottom: 28px;
  padding-left: 48px;
  padding-right: 48px;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6px;
`;

const LogoImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  display: block;
  margin-bottom: 4px;
`;

const AuthForm = styled.form`
  width: 100%;
`;

const AuthField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

const AuthLabel = styled.label`
  font-size: 14px;
  color: #1787c8;
`;

const AuthInput = styled.input`
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  padding: 10px 16px;
  font-size: 14px;
  outline: none;
  background: #f4f4f4;
  transition: border-color 0.15s ease, background-color 0.15s ease,
    box-shadow 0.15s ease;

  &:focus {
    border-color: #1787c8;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(23, 135, 200, 0.1);
  }
`;

const PrimaryButton = styled.button`
  width: 100%;
  margin-top: 8px;
  border-radius: 999px;
  border: 1px solid #1787c8;
  background: #1787c8;
  color: #ffffff;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease,
    transform 0.05s ease;

  &:hover {
    background: #11689a;
    box-shadow: 0 12px 24px rgba(23, 135, 200, 0.32);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 16px;
  width: 100%;
  font-size: 13px;
  color: #9ca3af;
`;

const DividerLine = styled.span`
  flex: 1;
  height: 1px;
  background-color: #e5e7eb;
`;

const GoogleButton = styled.button`
  width: 100%;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  padding: 9px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease,
    transform 0.05s ease;

  &:hover {
    background: #f9fafb;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const GoogleIcon = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: conic-gradient(
    from 0deg,
    #ea4335 0deg 90deg,
    #fbbc05 90deg 180deg,
    #34a853 180deg 270deg,
    #4285f4 270deg 360deg
  );
`;

const SwitchText = styled.div`
  margin-top: 24px;
  font-size: 13px;
  color: #6b7280;
  text-align: center;
`;

const LinkText = styled.span`
  color: #1787c8;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const App: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isLogin = mode === "login";

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login enviado!");

    setIsAuthenticated(true);
  };

  const handleRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Cadastro enviado!");

    setIsAuthenticated(true);
  };

  const handleGoogleClick = () => {
    console.log("Clique no botão Google");

    // após sucesso no OAuth
    // setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return (
      <>
        <GlobalStyle />
        <Feed />
      </>
    );
  }
  return (
    <>
      <GlobalStyle />
      <AuthCard>
        <AuthLogo>
          <LogoImage src={infoScriptLogo} alt="InfoScript Logo" />
        </AuthLogo>

        {isLogin ? (
          <AuthForm onSubmit={handleLoginSubmit}>
            <AuthField>
              <AuthLabel htmlFor="username">Usuário</AuthLabel>
              <AuthInput
                id="username"
                type="text"
                placeholder="Digite seu usuário"
              />
            </AuthField>

            <AuthField>
              <AuthLabel htmlFor="password">Senha</AuthLabel>
              <AuthInput
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </AuthField>

            <PrimaryButton type="submit">Entrar</PrimaryButton>

            <Divider>
              <DividerLine />
              <span>ou</span>
              <DividerLine />
            </Divider>

            <GoogleButton type="button" onClick={handleGoogleClick}>
              <GoogleIcon />
              <span>Sign in with Google</span>
            </GoogleButton>

            <SwitchText>
              Não tem uma conta?{" "}
              <LinkText onClick={() => setMode("register")}>
                Inscrever-se
              </LinkText>
            </SwitchText>
          </AuthForm>
        ) : (
          <AuthForm onSubmit={handleRegisterSubmit}>
            <AuthField>
              <AuthLabel htmlFor="name">Nome</AuthLabel>
              <AuthInput
                id="name"
                type="text"
                placeholder="Digite seu nome"
              />
            </AuthField>

            <AuthField>
              <AuthLabel htmlFor="username-register">Usuário</AuthLabel>
              <AuthInput
                id="username-register"
                type="text"
                placeholder="Escolha um usuário"
              />
            </AuthField>

            <AuthField>
              <AuthLabel htmlFor="password-register">Senha</AuthLabel>
              <AuthInput
                id="password-register"
                type="password"
                placeholder="Crie uma senha"
              />
            </AuthField>

            <PrimaryButton type="submit">Concluir</PrimaryButton>

            <SwitchText>
              Já tem uma conta?{" "}
              <LinkText onClick={() => setMode("login")}>Entrar</LinkText>
            </SwitchText>
          </AuthForm>
        )}
      </AuthCard>
    </>
  );
};

export default App;
