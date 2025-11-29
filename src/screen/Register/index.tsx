import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoInfo from "../../assets/images/icone-InfoScript.png";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !username || !password) {
      setError("Preencha todos os campos");
      return;
    }

    // Placeholder de cadastro
    console.log("Cadastro:", { name, username, password });
    navigate("/feed");
  };

  return (
    <RegisterWrapper>
      <Backdrop>
      <RegisterCard>
        <LogoSection>
          <LogoImage src={LogoInfo} alt="InfoScript Logo" />
          <AppTitle>InfoScript</AppTitle>
        </LogoSection>

        <FormSection>
          <FormTitle>Criar conta</FormTitle>

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
