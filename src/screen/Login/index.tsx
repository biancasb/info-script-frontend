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
import api from "@/services/api";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const [, setProfile] = useState<{ nickname: string; anoIngresso: number; tags: string[]; publications: any[] } | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nickname || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const u = { nickname, senha };
      const res = await api.post(`/usuarios/login`, u);
      if (res.data?.token) {
        localStorage.setItem("auth_token", res.data.token);
      }
      if (res.data?.user?._id) {
        localStorage.setItem("userId", res.data.user._id);
      }
      setProfile(res.data);
      navigate("/feed");
    } catch (err: any) {
      const msg = err?.response?.data?.message || "Falha no login. Verifique suas credenciais.";
      setError(msg);
    }
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
            placeholder="seu usuario"
            value={nickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="sua senha"
            value={senha}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
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
