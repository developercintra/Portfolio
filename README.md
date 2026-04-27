# 💼 Portfólio — Gabriel Cintra

Portfólio profissional desenvolvido com **React**, **Vite** e **Tailwind CSS v4**, com deploy via **Docker + Nginx**.

## 🚀 Tecnologias

- **React 19** — Componentização e UI
- **Vite** — Build e dev server
- **Tailwind CSS v4** — Estilização utilitária
- **Docker** — Containerização
- **Nginx** — Servidor web de produção

## 📁 Estrutura

```
src/
├── assets/             # Imagens e mídia
├── components/         # Componentes React
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Formacao.jsx
│   ├── Sobre.jsx
│   ├── Experiencia.jsx
│   ├── Habilidades.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js  # Dados centralizados
├── App.jsx
├── index.css
└── main.jsx
```

## ⚡ Rodando Localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## 🐳 Rodando com Docker

```bash
docker compose up -d --build
```

Acesse: `http://localhost:3000`

Para parar:

```bash
docker compose down
```

## 🌗 Dark Mode

O toggle de tema (claro/escuro) está no navbar. Utiliza class-based dark mode via `@custom-variant` do Tailwind CSS v4.

## 📬 Contato

- **Email:** gabrielcintracantonio@gmail.com
- **LinkedIn:** [gabriel-cintra-developer](https://www.linkedin.com/in/gabriel-cintra-developer/)
- **GitHub:** [developercintra](https://github.com/developercintra)
