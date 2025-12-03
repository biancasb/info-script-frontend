import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoInfo from "../../assets/images/infoScript.png";
import api from "@/services/api";

import {
  RegisterWrapper,
  RegisterCard,
  LogoSection,
  LogoImage,
  FormSection,
  InputGroup,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
  HelperText,
  Backdrop,
} from "./styles";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [anoIngresso, setAnoIngresso] = useState("");
  const [nickname, setNickname] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  // manter setter para uso futuro sem warning de variável não utilizada
  const [, setRegister] = useState<{ nome: string; anoIngresso: number; nickname: string; senha: string; token?: string } | null>(null);
  
  const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

    const currentYear = new Date().getFullYear();
    const yearNum = parseInt(anoIngresso, 10);

    if (!nome || !anoIngresso || !nickname || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    if (isNaN(yearNum)) {
      setError("Ano de ingresso deve ser numérico (ex.: 2020)");
      return;
    }

    if (yearNum < 2015 || yearNum > currentYear) {
      setError(`Ano de ingresso deve ser entre 2015 e ${currentYear}`);
      return;
    }

    try {
      const u = { nome, nickname, senha, anoIngresso: yearNum };
      const res = await api.post(`/usuarios`, u);
      if (res.data?.token) {
        localStorage.setItem("auth_token", res.data.token);
      }
      setRegister(res.data);
      navigate("/feed");
    } catch (err: any) {
      const msg = err?.response?.data?.message || "Falha ao criar conta. Verifique os dados e tente novamente.";
      setError(msg);
    }
  };

  const renderLogo = () => (
    <LogoSection>
      <LogoImage src={LogoInfo} alt="InfoScript Logo" />
    </LogoSection>
  );

  const renderForm = () => (
    <>
      <form onSubmit={handleRegister}>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="seu nome"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label>Ano ingresso</Label>
          <Input
            type="text"
            placeholder={new Date().getFullYear().toString()}
            value={anoIngresso}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 4);
              setAnoIngresso(onlyDigits);
            }}
          />
        </InputGroup>

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

        <SubmitButton type="submit">Concluir</SubmitButton>
      </form>
    </>
  );

  const renderHelperText = () => (
    <HelperText>
      Já tem conta?
      <a onClick={() => navigate("/login")}>Entrar</a>
    </HelperText>
  );

  return (
    <RegisterWrapper>
      <Backdrop>
        <RegisterCard>
          {renderLogo()}

          <FormSection>
            {renderForm()}
            {renderHelperText()}
          </FormSection>
        </RegisterCard>
      </Backdrop>
    </RegisterWrapper>
  );
};

export default Register;
