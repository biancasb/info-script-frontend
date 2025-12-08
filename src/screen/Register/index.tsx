import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { validateRegisterFull, isValidFullName, isValidUsername, isValidPassword } from "@/utils/validators";
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

import LogoInfo from "../../assets/images/infoScript.png";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [anoIngresso, setAnoIngresso] = useState("");
  const [nickname, setNickname] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<{
    nome?: string;
    anoIngresso?: string;
    nickname?: string;
    senha?: string;
  }>({});

  const [, setRegister] = useState<{ nome: string; anoIngresso: number; nickname: string; senha: string; token?: string } | null>(null);

  const currentYear = new Date().getFullYear();

  const handleNomeChange = (value: string) => {
    setNome(value);
    setError("");

    if (!value) {
      setErrors((prev) => ({ ...prev, nome: "" }));
    } else if (!isValidFullName(value)) {
      setErrors((prev) => ({
        ...prev,
        nome: "Nome deve conter apenas letras e espaços (mínimo 2 caracteres)",
      }));
    } else {
      setErrors((prev) => ({ ...prev, nome: "" }));
    }
  };

  const handleAnoIngressoChange = (value: string) => {
    const onlyDigits = value.replace(/\D/g, "").slice(0, 4);
    setAnoIngresso(onlyDigits);
    setError("");

    if (!onlyDigits) {
      setErrors((prev) => ({ ...prev, anoIngresso: "" }));
    } else {
      const year = parseInt(onlyDigits, 10);
      if (isNaN(year)) {
        setErrors((prev) => ({
          ...prev,
          anoIngresso: "Ano deve ser numérico",
        }));
      } else if (year < 2015 || year > currentYear) {
        setErrors((prev) => ({
          ...prev,
          anoIngresso: `Ano deve estar entre 2015 e ${currentYear}`,
        }));
      } else {
        setErrors((prev) => ({ ...prev, anoIngresso: "" }));
      }
    }
  };

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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validation = validateRegisterFull(nome, anoIngresso, nickname, senha);
    if (!validation.success) {
      setErrors(validation.errors || {});
      const errorMsg =
        validation.errors?.nome ||
        validation.errors?.anoIngresso ||
        validation.errors?.nickname ||
        validation.errors?.senha ||
        "Validação falhou";
      setError(errorMsg);
      return;
    }

    try {
      const registrationData = { nome, nickname, senha, anoIngresso: parseInt(anoIngresso, 10) };
      console.log("Enviando para cadastro:", registrationData);
      const response = await api.post(`/usuarios`, registrationData);
      console.log("Resposta do servidor:", response.data);
      
      if (response.data?.token) {
        localStorage.setItem("auth_token", response.data.token);
      }
      if (response.data?.userId || response.data?.id || response.data?._id) {
        const userId = response.data.userId || response.data.id || response.data._id;
        localStorage.setItem("userId", userId);
      }
      if (response.data?.nickname) {
        localStorage.setItem("userName", response.data.nickname);
      } else {
        localStorage.setItem("userName", nickname);
      }
      setRegister(response.data);

      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (error: any) {
      const apiError = error?.response?.data?.error || error?.response?.data?.message;
      const isConflict = error?.response?.status === 409;
      const errorMessage = isConflict
        ? "Este nome de usuário já está em uso. Escolha outro."
        : apiError || "Falha ao criar conta. Verifique os dados e tente novamente.";
      setError(errorMessage);
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
            placeholder="seu nome completo"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNomeChange(e.target.value)}
          />
          {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Ano ingresso</Label>
          <Input
            type="text"
            placeholder={currentYear.toString()}
            value={anoIngresso}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAnoIngressoChange(e.target.value)}
            maxLength={4}
          />
          {errors.anoIngresso && <ErrorMessage>{errors.anoIngresso}</ErrorMessage>}
        </InputGroup>

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
            placeholder="sua senha (mínimo 6 caracteres)"
            value={senha}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSenhaChange(e.target.value)}
          />
          {errors.senha && <ErrorMessage>{errors.senha}</ErrorMessage>}
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
