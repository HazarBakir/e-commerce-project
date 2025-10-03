# Ecommerce App (React + Node/Express + SQLite) · ![Build](https://img.shields.io/badge/Build-passing-brightgreen) ![Tests](https://img.shields.io/badge/Tests-passing-brightgreen) ![License](https://img.shields.io/badge/License-ISC-blue)

A full‑stack ecommerce application built during my React trainings. The project showcases modern React on the frontend and a Node/Express backend with Sequelize and SQLite. It includes product browsing, search, cart, checkout, orders, and basic tracking flows.

> This repository is a monorepo with two apps: `ecommerce-frontend` and `ecommerce-backend`.

<img width="1920" height="1440" alt="864_1x_shots_so" src="https://github.com/user-attachments/assets/06d5c97d-0811-485b-9d26-8370fba2ffce" />

## Features
- Product grid with search and image assets
- Product details within grid cards
- Shopping cart with quantity updates and delivery options
- Checkout flow with order/payment summary
- Orders page with details
- Basic tracking page
- Responsive UI and clean routing
- API served from Express with Sequelize models and seed data


## Tech Stack
- Frontend: React 19, Vite, React Router, Axios, Testing Library, Vitest, ESLint
- Backend: Node.js, Express, Sequelize, sql.js (SQLite in WASM), pg/mysql2 (optional adapters), CORS
- Tooling: Vite dev server with proxy, ESLint, Nodemon


## Monorepo Structure
```
.
├─ ecommerce-frontend/   # React app (Vite)
└─ ecommerce-backend/    # Express API + static build host
```

- The frontend dev server proxies `/api` and `/images` to the backend.
- Production build outputs to `ecommerce-backend/dist`, and the backend serves it.


## Screenshots
Add your screenshots or GIFs here to showcase the UX:
- Home / Product grid
- Cart / Checkout
- Orders


## Getting Started (Local)
Prerequisites: Node.js 22+

1) Install dependencies
- In `ecommerce-backend`:
  - `npm install`
- In `ecommerce-frontend`:
  - `npm install`

2) Start the backend (port 3000)
- In `ecommerce-backend`:
  - Dev: `npm run dev`
  - Prod: `npm start`

3) Start the frontend (Vite dev server)
- In `ecommerce-frontend`:
  - `npm run dev`
  - The dev server proxies `/api` and `/images` to `http://localhost:3000`

4) Build for production
- In `ecommerce-frontend`:
  - `npm run build` (outputs to `../ecommerce-backend/dist`)
- Serve the build via the backend: `npm start` in `ecommerce-backend`


## Useful Scripts
- Frontend: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`, `npm run test`
- Backend: `npm run dev`, `npm start`


## Testing (Frontend)
- Tech: Vitest + @testing-library/react + jsdom
- Run tests in `ecommerce-frontend`: `npm run test`


## API Overview (Backend)
Base URL (dev): `http://localhost:3000/api`
- `GET /products?search=...`
- `GET /delivery-options?expand=estimatedDeliveryTime`
- `GET /cart-items?expand=product`
- `POST /cart-items`, `PUT /cart-items/:productId`, `DELETE /cart-items/:productId`
- `GET /orders?expand=products`, `POST /orders`
- `GET /payment-summary`
- `POST /reset` (dev utility)

Static assets: `http://localhost:3000/images/...`


## Deployment
- Build the frontend: `ecommerce-frontend > npm run build` (outputs to backend `dist`)
- Deploy the backend (which serves the static frontend build and the API)
- Ensure the server exposes port 3000 (or set `PORT`) and serves `dist/index.html` for SPA routes

## License
This repository is for portfolio and learning purposes. If you wish to reuse or adapt parts of it, please provide attribution.
