import React, { useState } from "react";
import infoScriptLogo from "../../assets/images/infoScript.png";
import logoGoogle from "../../assets/images/logo_google.png";
import Feed from "../Feed"; 
type AuthMode = "login" | "register";
import {
  AuthCard,
  AuthLogo,
  LogoImage,
  AuthForm,
  AuthField,
  AuthLabel,
  AuthInput,
  PrimaryButton,
  Divider,
  DividerLine,
  GoogleButton,
  GoogleIcon,
  SwitchText,
  LinkText,
} from "./styles";  


const Login: React.FC = () => {
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


  return (
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
              <GoogleIcon>
                <img src={logoGoogle} alt="Google logo" />
              </GoogleIcon>
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
  );
};

export default Login;
