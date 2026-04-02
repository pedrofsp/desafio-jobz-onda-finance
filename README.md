# Onda Finance Dashboard

Aplicação web de controle financeiro desenvolvida como parte de um desafio técnico, com foco em boas práticas de arquitetura, componentização e experiência do usuário.

---

## Acesso ao projeto

A aplicação está disponível em:

https://desafio-jobz-onda-finance-1s27.vercel.app/

---

## Credenciais de acesso

```txt
Email: user@test.com
Senha: 123456
```

---

## Como rodar o projeto

### 1. Acessar a pasta /fronted e Instalar dependências

```bash
cd frontend/
npm install
```

---

### 3. Rodar o projeto

```bash
npm run dev
```

---

### 4. Rodar testes

```bash
npm run test
```

---

## Tecnologias utilizadas

- **React + TypeScript**
- **Vite**
- **Tailwind**
- **shadcn/ui + Radix UI**
- **Zustand (state management)**
- **React Hook Form**
- **Vitest + Testing Library**

---

## Funcionalidades

### Autenticação

- Login com dados mockados
- Persistência de sessão com Zustand
- Redirecionamento automático se já estiver logado
- Rotas protegidas (dashboard privado)

---

### Dashboard

- Exibição de saldo total
- Cálculo de entradas e saídas
- Lista de transações

---

### Transações

- Criação de novas transações via modal
- Tipos:
  - Entrada
  - Saída

- Atualização automática dos dados
- Persistência no `localStorage`

---

### Gerenciamento de estado

- Zustand para:
  - autenticação
  - transações

- Persist middleware para manter dados após refresh

---

### UI/UX

- Interface baseada em componentes do shadcn/ui (Componentes customizados e Paginas)
- Componentização com Tailwind + CVA

---

### Testes

- Teste unitário com Vitest no custom hook useTransfer para testar o flow de transferência

---

## Decisões técnicas

- Uso de **custom hooks** para separar a lógica (funções e react hooks no caso) de UI, deixando o codigo do componente/pagina mais limpo
- Uso de componentização com foco no clean code
- Estilização feita com foco no taiilwing/shadcn e uso de CSS somente quando estritamente necessário
- Padronização do commits e padronização dos imports
- Mock de backend para foco no frontend
- Uso de design tokens com Tailwind para facilitar theming
- Testes focados em lógica (hooks)

---

## Melhorias futuras

- Integração com API real (Axios + React Query)
- Uso do Firebase para genrenciar usários e adição de Social Login (Oauth2 ou semelhante)
- Sistema de categorias de transações
- Filtros e busca das transções na dashboard (adição de categorias)
- Tema claro/escuro (toggle)
- Aprimoramento do fit com a identidade visual da empresa no design de forma geral

---

## Autor

Pedro Presotto

---

## Observações

Este projeto foi desenvolvido com foco em demonstrar organização de código, domínio de ferramentas modernas do ecossistema React e boas práticas de desenvolvimento frontend.
