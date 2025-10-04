# Ecommerce Frontend · ![Build](https://img.shields.io/badge/Build-passing-brightgreen) ![Tests](https://img.shields.io/badge/Tests-passing-brightgreen) ![License](https://img.shields.io/badge/License-ISC-blue) ![React](https://img.shields.io/badge/React-18.2-61dafb?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)

[Project Overview](../README.md) • [Backend README](../ecommerce-backend/README.md) • [React Docs](https://react.dev/) • [Vite Docs](https://vite.dev/)

<br/>

**A modern React + Vite frontend for an ecommerce experience.**

This app provides the UI for browsing products, managing a cart, checking out, and viewing orders. It talks to the Express backend via a Vite dev proxy in development, and is statically served by the backend in production builds.

<br/>

## Install

```bash
npm install
```

## Usage

- Start the dev server (port shown in terminal):
```bash
npm run dev
```
- API and images are proxied during development:
  - `/api` → `http://localhost:3000`
  - `/images` → `http://localhost:3000`

- Build for production (outputs to `../ecommerce-backend/dist`):
```bash
npm run build
```

## Development

- Code style and tooling
  - React 18.2, React Router, Axios
  - Vite for bundling and dev server
  - ESLint for linting
- Scripts
  - `npm run dev` — start Vite dev server
  - `npm run build` — production build (outputs into backend `dist`)
  - `npm run preview` — preview production build
  - `npm run lint` — run ESLint
  - `npm run test` — run unit tests

### Tests

Testing is powered by Vitest and Testing Library.
```bash
npm run test
```

### API Base Paths

The frontend expects the backend on port 3000 in development (configured in `vite.config.js`):
```
/api     → http://localhost:3000
/images  → http://localhost:3000
```

## Example Screens

<img width="1920" height="1440" alt="864_1x_shots_so" src="https://github.com/user-attachments/assets/a76d3c35-68aa-4e33-bb8c-1f8dad473746" />
<img width="1920" height="1440" alt="10_1x_shots_so" src="https://github.com/user-attachments/assets/47080ef0-4bdb-4d42-bbd4-a738100dd837" />
<img width="1920" height="1440" alt="713_1x_shots_so" src="https://github.com/user-attachments/assets/6824ddb0-b73f-40a6-a567-9e60be346938" />
<img width="1920" height="1440" alt="198_1x_shots_so" src="https://github.com/user-attachments/assets/ba337153-ab1c-4112-b0e0-49ea0f366d01" />
<img width="1920" height="1440" alt="869_1x_shots_so" src="https://github.com/user-attachments/assets/bdcb9e6c-77c5-48da-a2ff-15eaed75a318" />

## Ecosystem

| Project | Description |
|-|-|
| [ecommerce-backend](../ecommerce-backend/README.md) | Express API, serves static frontend build in production |
| ecommerce-frontend | React + Vite app with routing, cart, checkout |
