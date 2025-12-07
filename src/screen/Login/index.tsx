import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { validateLogin, isValidUsername, isValidPassword } from "@/utils/validators";
import api from "@/services/api";

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

import LogoInfo from "../../assets/images/InfoScript.png";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<{ nickname?: string; senha?: string }>({});

  const [, setProfile] = useState<{ nickname: string; anoIngresso: number; tags: string[]; publications: any[] } | null>(null);

  const handleNicknameChange = (value: string) => {
    setNickname(value);
    setError("");
    
    if (!value) {
      setErrors((prev) => ({ ...prev, nickname: "" }));
    } else if (!isValidUsername(value)) {
      setErrors((prev) => ({
        ...prev,
        nickname: "Usuário deve ter 3-20 caracteres (letras, números, _ e -)",
      }));
    } else {
      setErrors((prev) => ({ ...prev, nickname: "" }));
    }
  };

  const handleSenhaChange = (value: string) => {
    setSenha(value);
    setError("");
    
    if (!value) {
      setErrors((prev) => ({ ...prev, senha: "" }));
    } else if (!isValidPassword(value)) {
      setErrors((prev) => ({
        ...prev,
        senha: "Senha deve ter no mínimo 6 caracteres",
      }));
    } else {
      setErrors((prev) => ({ ...prev, senha: "" }));
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validation = validateLogin(nickname, senha);
    if (!validation.success) {
      setErrors(validation.errors || {});
      setError("");
      return;
    }

    try {
      const loginData = { nickname, senha };
      const response = await api.post(`/usuarios/login`, loginData);
      if (response.data?.token) {
        localStorage.setItem("auth_token", response.data.token);
      }
      if (response.data?.user?._id) {
        localStorage.setItem("userId", response.data.user._id);
      }
      if (response.data?.user?.nickname) {
        localStorage.setItem("userName", response.data.user.nickname);
      }
      setProfile(response.data);
      navigate("/feed");
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "Falha no login. Verifique suas credenciais.";
      setError(errorMessage);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
    navigate("/feed");
  };

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
            placeholder="seu usuario"
            value={nickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNicknameChange(e.target.value)}
          />
          {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="sua senha"
            value={senha}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSenhaChange(e.target.value)}
          />
          {errors.senha && <ErrorMessage>{errors.senha}</ErrorMessage>}
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
