
<p align="center">
  Aplicação em React/TypeScript - Controle financeiro 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/dt-money"/>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/dt-money/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/dt-money">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/dt-money">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Aplicação em ReactJs/TypeScript de cadastro de projetos baseado em um timer onde é gravado um histórico que exibe se o projeto está em andamento, interrompido ou concluído!


## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [React.js](https://pt-br.legacy.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [ContextApi](https://legacy.reactjs.org/docs/context.html)
- [useMemo](https://react.dev/reference/react/useMemo)
- [Axios](https://www.npmjs.com/package/axios)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://www.npmjs.com/package/zod)
- [ESlint](https://eslint.org/)



## Estrutura ##
```
.
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── server.json
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── NewTransactionModal
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Summary
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── contexts
│   │   └── TransactionsContext.tsx
│   ├── hooks
│   │   └── useSummary.ts
│   ├── lib
│   │   └── axios.ts
│   ├── main.tsx
│   ├── pages
│   │   └── Transactions
│   │       ├── components
│   │       │   └── SearchForm
│   │       │       ├── index.tsx
│   │       │       └── styles.ts
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── styles
│   │   ├── global.ts
│   │   └── themes
│   │       └── default.ts
│   ├── @types
│   │   └── styled.d.ts
│   ├── utils
│   │   └── formatter.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock


```

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/dt-money

# Access
$ cd dt-money

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
