# 🤖 AI & Robotics Summer Workshop

A full-stack registration landing page for a kids' AI & Robotics summer camp — built with React, Tailwind CSS, Express, and MongoDB.

🔗 **Live Demo:** [robocamp-ai-workshop.vercel.app](https://robocamp-ai-workshop.vercel.app)
📦 **Backend API:** [robocamp-api-2pty.onrender.com](https://robocamp-api-2pty.onrender.com)

## ✨ Features

- 🎨 Pixel-faithful recreation of a Kidrove-style illustrated design system
- 📱 Fully responsive across mobile, tablet, and desktop
- 🧩 Strongly typed React components with content cleanly separated from markup
- ✅ Real-time client-side form validation (name, email, phone)
- 🔐 Server-side validation with Zod — never trusts the client alone
- 🗄️ Optional MongoDB persistence with a graceful "mock mode" fallback
- 🚀 Deployed and live on Vercel (frontend) + Render (backend)

## 🛠 Tech Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS |
| **Backend** | Node.js, Express, TypeScript, Zod |
| **Database** | MongoDB via Mongoose (optional) |
| **Deployment** | Vercel (client) · Render (server) |

## 📁 Project Structure

```text
robocamp-ai-workshop/
├── client/              # React + TypeScript + Tailwind frontend
│   ├── src/
│   │   ├── components/  # Navbar, Hero, WorkshopDetails, LearningOutcomes,
│   │   │                # FAQSection, FAQItem, RegistrationForm, Footer
│   │   ├── data/        # content.ts — workshop details, outcomes, FAQs
│   │   └── lib/         # api.ts — typed API client
│   └── vercel.json      # SPA routing config
├── server/              # Express + TypeScript backend
│   ├── src/
│   │   ├── models/      # Enquiry.ts — Mongoose schema
│   │   └── index.ts     # Express app, routes, validation
│   └── .env.example
└── render.yaml          # Render Blueprint for 1-click backend deploy
```

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or newer
- npm or yarn

### 1. Backend Setup (`/server`)

```bash
cd server
npm install
cp .env.example .env   # then fill in your values
npm run dev
```

**Environment variables (`server/.env`):**

| Variable | Description | Required |
| --- | --- | --- |
| `PORT` | Port the server runs on (default 5000) | No |
| `MONGODB_URI` | MongoDB connection string | No — runs in mock mode if omitted |
| `CLIENT_URL` | Frontend origin, for CORS (e.g. `http://localhost:5173`) | Yes |

### 2. Frontend Setup (`/client`)

```bash
cd client
npm install
```

**Create `client/.env`:**

```env
VITE_API_URL=http://localhost:5000
```

```bash
npm run dev
```

Visit `http://localhost:5173` 🎉

## 📡 API Documentation

### `GET /api/health`

Health check endpoint.

**Response:**

```json
{ "status": "ok" }
```

### `POST /api/enquiry`

Submits a new workshop registration enquiry.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210"
}
```

**Success Response — 200 OK:**

```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+919876543210",
    "_id": "64d...",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

**Error Response — 400 Bad Request:**

```json
{
  "success": false,
  "errors": {
    "email": "Valid email is required"
  }
}
```

> 💡 **If `MONGODB_URI` isn't set**, the API still returns a valid success response — it just skips persistence and logs a warning, so the app never breaks in a database-less environment.

## ☁️ Deployment

### Frontend → Vercel

1. Import this repo into Vercel
2. Set Root Directory to `client`
3. Add environment variable `VITE_API_URL` pointing to your live backend URL
4. Deploy

*The included `client/vercel.json` handles SPA routing rewrites automatically.*

### Backend → Render

1. Connect this repo to Render via Blueprint (auto-detects `render.yaml` at the root)
2. Set `CLIENT_URL` to your live Vercel URL (required for CORS)
3. Optionally set `MONGODB_URI` for real persistence
4. Deploy

> ⚠️ Render's free tier spins down after inactivity — the first request after idling may take 30–60 seconds to respond while the instance wakes up.

## 🧪 Local Testing Checklist

- [x] Submitting the form with empty/invalid fields shows inline validation errors
- [x] Submitting valid data shows a success message
- [x] Server console logs the incoming request payload
- [x] App runs correctly with and without `MONGODB_URI` set
- [x] Layout holds up at mobile, tablet, and desktop widths

## 📝 My Approach & Improvements

I built this as a full-stack monorepo with a React + TypeScript + Tailwind CSS frontend and an Express + TypeScript backend, using Zod for request validation and optional MongoDB persistence via Mongoose. I started by designing the UI to closely match the Kidrove-style reference — playful illustrations, rounded cards, and a bright orange/teal palette — then broke the build into typed, reusable components (Navbar, Hero, WorkshopDetails, LearningOutcomes, FAQSection, RegistrationForm, Footer) with content kept separate from markup for easy updates. The backend validates all incoming data server-side and gracefully falls back to a mock response when no database is configured, so the app never breaks in a database-less environment. I deployed the frontend to Vercel and the backend to Render, configuring CORS and environment variables to connect them in production, and tested the full registration flow end-to-end before submitting.

With more time, I'd add automated tests (unit tests for components, integration tests for the API), rate-limiting on the enquiry endpoint, email confirmation on successful registration, and a simple admin view to manage submissions.

## 📄 License

This project was built as part of a development assignment and is intended for evaluation purposes.
