# Ecommerce Frontend · ![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white) ![License](https://img.shields.io/badge/License-ISC-blue)

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
  - React 19, React Router, Axios
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

- Home / Product grid with search
- Cart and checkout flow
- Orders list and details

(Add screenshots or GIFs here.)

## Ecosystem

| Project | Description |
|-|-|
| [ecommerce-backend](../ecommerce-backend/README.md) | Express API, serves static frontend build in production |
| ecommerce-frontend | React + Vite app with routing, cart, checkout |

## License

This software is licensed under the ISC license (see repository root).
