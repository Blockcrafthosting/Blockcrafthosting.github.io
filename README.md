
Hosting Plans App - PayPal Producción

Estructura del proyecto:
- backend/: Node.js + Express + SQLite
  - src/
    - index.js (server + endpoints auth + PayPal)
    - db.js (SQLite)
    - auth.js (JWT)
  - .env (CLIENT_ID y CLIENT_SECRET de PayPal)
- frontend/: React + Tailwind
  - src/
    - App.jsx
    - pages/Plans.jsx, Login.jsx, Register.jsx
    - components/PlanCard.jsx
    - store/auth.jsx
  - .env (VITE_API_URL=http://localhost:4000)

Funcionalidades:
- Registro / Login de usuarios
- Planes de hosting: Gratis 4GB, $5 5GB, $10 10GB, $11 11GB, $20 20GB+CPU500+90GB
- Botones de PayPal Checkout (Producción real)
- Guardado de cada compra en SQLite (historial completo)
