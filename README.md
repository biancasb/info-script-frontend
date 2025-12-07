# InfoScript Frontend

Sistema de rede social acadêmica voltado para compartilhamento de projetos, conhecimentos e experiências entre estudantes universitários.

## Desenvolvedoras

- **Bianca Siega Bernardi**
- **Rafaela Laura Ribeiro**

## Sobre o Projeto

O InfoScript é uma plataforma web que permite aos estudantes universitários compartilhar seus projetos acadêmicos, trabalhos de pesquisa, códigos e materiais educacionais. A interface foi projetada para ser clean, moderna e focada na experiência do usuário, inspirada em plataformas como Medium.

### Funcionalidades Principais

- Autenticação de usuários com JWT
- Feed de publicações acadêmicas
- Perfil de usuário personalizado
- Sistema de curtidas e salvos
- Busca por conteúdo e usuários
- Categorização por matérias/tags
- Compartilhamento de links GitHub e PDFs
- Interface responsiva

## Tecnologias Utilizadas

- **React 19** - Biblioteca principal para construção da interface
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **Styled Components** - Estilização com CSS-in-JS
- **React Router DOM** - Roteamento de páginas
- **Axios** - Cliente HTTP para comunicação com API
- **Zod** - Validação de schemas e formulários
- **Material UI Icons** - Ícones da interface

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd info-script-frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_URL=http://localhost:3000
```

## Executando o Projeto

### Modo Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build de Produção

Para gerar a build otimizada:

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Avatar/         # Avatar de usuário
│   ├── Button/         # Botões customizados
│   ├── Drawer/         # Menu lateral
│   ├── Footer/         # Rodapé
│   ├── Header/         # Cabeçalho e barra de navegação
│   └── ...
├── constants/          # Constantes da aplicação
│   ├── Colors.ts       # Paleta de cores
│   ├── Layout.ts       # Espaçamentos e dimensões
│   └── Typography.ts   # Configurações tipográficas
├── screen/            # Páginas da aplicação
│   ├── Account/       # Configurações de conta
│   ├── Feed/          # Feed principal
│   ├── Login/         # Tela de login
│   ├── Profile/       # Perfil do usuário
│   ├── Register/      # Cadastro
│   ├── SearchResults/ # Resultados de busca
│   └── WishlistPost/  # Posts salvos
├── services/          # Serviços e integrações
│   └── api.ts        # Configuração do Axios
├── utils/            # Utilitários e helpers
│   ├── auth.ts       # Funções de autenticação
│   └── validators.ts # Validações com Zod
├── App.tsx           # Componente raiz com rotas
└── main.tsx          # Ponto de entrada da aplicação
```

## Padrões de Código

### Organização de Imports

Os imports devem seguir esta ordem:

1. Dependências do React
2. Bibliotecas externas
3. Constants (Colors, Layout, Typography)
4. Components
5. Utils e Services
6. Styles

Exemplo:
```typescript
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";

import { Colors, Layout, Typography } from "@/constants";
import Header from "../../components/Header";
import api from "@/services/api";

import { Container, Title } from "./styles";
```

### Estrutura de Componentes

Componentes devem ser quebrados em funções menores e chamadas no return final:

```typescript
const MyComponent: React.FC = () => {
  const renderHeader = () => (
    <div>Header content</div>
  );

  const renderBody = () => (
    <div>Body content</div>
  );

  return (
    <Container>
      {renderHeader()}
      {renderBody()}
    </Container>
  );
};
```

### Constantes de Estilo

Todas as cores, espaçamentos e tipografia devem usar as constantes definidas em:
- `src/constants/Colors.ts`
- `src/constants/Layout.ts`
- `src/constants/Typography.ts`

Evite valores hardcoded no código.

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview da build
- `npm run lint` - Executa linter ESLint

## Integração com Backend

O frontend se comunica com a API REST através do Axios configurado em `src/services/api.ts`.

Endpoints principais:
- `POST /usuarios/login` - Autenticação
- `POST /usuarios/register` - Cadastro
- `GET /postagens` - Listagem de posts
- `POST /postagens` - Criação de post
- `GET /materias` - Listagem de matérias
- `GET /profiles/:username` - Perfil do usuário

O token JWT é armazenado no localStorage e enviado automaticamente em todas as requisições através de um interceptor do Axios.

## Funcionalidades em Destaque

### Sistema de Curtidas e Salvos

As curtidas são persistidas localmente no `localStorage` com a chave `wishlist_posts`. Ao curtir um post no feed, ele é automaticamente salvo e pode ser acessado na página de Salvos.

### Busca Inteligente

O sistema de busca mantém histórico das últimas 5 pesquisas no `localStorage` e oferece sugestões baseadas no histórico.

### Validação de Formulários

Utiliza Zod para validação robusta de formulários com mensagens de erro em tempo real.

## Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Suporte

Para suporte ou dúvidas sobre o projeto, entre em contato com as desenvolvedoras.

## Licença

Este projeto foi desenvolvido como trabalho acadêmico.
