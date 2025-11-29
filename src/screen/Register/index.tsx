import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoInfo from "../../assets/images/infoScript.png";

import {
  RegisterWrapper,
  RegisterCard,
  LogoSection,
  LogoImage,
  AppTitle,
  FormSection,
  FormTitle,
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
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();
    const yearNum = parseInt(year, 10);

    if (!name || !year || !username || !password) {
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

    // Placeholder de cadastro
    console.log("Cadastro:", { name, year, username, password });
    navigate("/feed");
  };

  return (
    <RegisterWrapper>
      <Backdrop>
      <RegisterCard>
        <LogoSection>
          <LogoImage src={LogoInfo} alt="InfoScript Logo" />
        </LogoSection>

        <FormSection>
          <form onSubmit={handleRegister}>
            <InputGroup>
              <Label>Nome</Label>
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <Label>Ano ingresso</Label>
              <Input
                type="text"
                placeholder={new Date().getFullYear().toString()}
                value={year}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 4);
                  setYear(onlyDigits);
                }}
              />
            </InputGroup>

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

            <SubmitButton type="submit">Concluir</SubmitButton>
          </form>

          <HelperText>
            Já tem conta?
            <a onClick={() => navigate("/login")}>Entrar</a>
          </HelperText>
        </FormSection>
      </RegisterCard>
      </Backdrop>
    </RegisterWrapper>
  );
};

export default Register;
