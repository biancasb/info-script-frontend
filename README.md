# InfoScript Frontend

Rede social acadêmica para compartilhar projetos, pesquisas e materiais entre estudantes.

## Desenvolvedoras

- Bianca Siega Bernardi
- Rafaela Laura Ribeiro

## Visão Geral

- Feed de publicações com curtidas e salvos por usuário
- Perfis com informações acadêmicas e projetos
- Busca por conteúdo/usuários com histórico recente
- Tags por matéria e compartilhamento de links/PDFs

## Stack

- React 19 + TypeScript + Vite
- Styled Components, React Router DOM
- Axios (API) + Zod (validação)
- Material UI Icons

## Pré-requisitos

- Node.js 18+
- npm (ou yarn/pnpm)
- Git

## Configuração Rápida

```bash
git clone <repository-url>
cd info-script-frontend
npm install
```

Crie `.env` na raiz:

```env
VITE_API_URL=http://localhost:3000
```

## Comandos

- `npm run dev` – desenvolvimento (http://localhost:5173)
- `npm run build` – build de produção em `dist/`
- `npm run preview` – preview da build
- `npm run lint` – lint

## Estrutura do Projeto

```
src/
├── components/        # Avatar, Header, Footer, Drawer, etc.
├── constants/         # Colors, Layout, Typography
├── screen/            # Account, Feed, Login, Profile, Register, SearchResults, WishlistPost
├── services/          # api.ts (Axios)
├── utils/             # auth, validators
├── App.tsx            # Rotas
└── main.tsx           # Bootstrap
```

## Como Funciona

- Autenticação com JWT (token em localStorage via interceptor Axios)
- Curtidas/Salvos persistidos por usuário em `localStorage` (`wishlist_posts_<userId>`)
- Busca mantém histórico das últimas 5 pesquisas em `localStorage`

## Contribuição

- Crie uma branch: `git checkout -b feature/minha-feature`
- Commit: `git commit -m "Minha feature"`
- Push e abra um PR para `staging`

## Suporte

Dúvidas? Abra uma issue ou contate as desenvolvedoras.
