🤖 AI & Robotics Summer Workshop

A full-stack registration landing page for a kids' AI & Robotics summer camp — built with React, Tailwind CSS, Express, and MongoDB.

🔗 Live Demo: robocamp-ai-workshop.vercel.app
📦 Backend API: robocamp-api-2pty.onrender.com


✨ Features


🎨 Pixel-faithful recreation of a Kidrove-style illustrated design system
📱 Fully responsive across mobile, tablet, and desktop
🧩 Strongly typed React components with content cleanly separated from markup
✅ Real-time client-side form validation (name, email, phone)
🔐 Server-side validation with Zod — never trusts the client alone
🗄️ Optional MongoDB persistence with a graceful "mock mode" fallback
🚀 Deployed and live on Vercel (frontend) + Render (backend)



🛠 Tech Stack

LayerTechnologyFrontendReact 18, TypeScript, Vite, Tailwind CSSBackendNode.js, Express, TypeScript, ZodDatabaseMongoDB via Mongoose (optional)DeploymentVercel (client) · Render (server)


📁 Project Structure

robocamp-ai-workshop/
├── client/              # React + TypeScript + Tailwind frontend
│   ├── src/
│   │   ├── components/  # Navbar, Hero, WorkshopDetails, LearningOutcomes,
│   │   │                # FAQSection, FAQItem, RegistrationForm, Footer
│   │   ├── data/        # content.ts — workshop details, outcomes, FAQs
│   │   └── lib/          # api.ts — typed API client
│   └── vercel.json       # SPA routing config
├── server/               # Express + TypeScript backend
│   ├── src/
│   │   ├── models/        # Enquiry.ts — Mongoose schema
│   │   └── index.ts       # Express app, routes, validation
│   └── .env.example
└── render.yaml            # Render Blueprint for 1-click backend deploy


🚀 Getting Started

Prerequisites


Node.js v18 or newer
npm or yarn


1. Backend Setup (/server)

bashcd server
npm install
cp .env.example .env   # then fill in your values
npm run dev

Environment variables (server/.env):

VariableDescriptionRequiredPORTPort the server runs on (default 5000)NoMONGODB_URIMongoDB connection stringNo — runs in mock mode if omittedCLIENT_URLFrontend origin, for CORS (e.g. http://localhost:5173)Yes

2. Frontend Setup (/client)

bashcd client
npm install

Create client/.env:

envVITE_API_URL=http://localhost:5000

bashnpm run dev

Visit http://localhost:5173 🎉


📡 API Documentation

GET /api/health

Health check endpoint.

Response:

json{ "status": "ok" }

POST /api/enquiry

Submits a new workshop registration enquiry.

Request Body:

json{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210"
}

Success Response — 200 OK:

json{
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

Error Response — 400 Bad Request:

json{
  "success": false,
  "errors": {
    "email": "Valid email is required"
  }
}


💡 If MONGODB_URI isn't set, the API still returns a valid success response — it just skips persistence and logs a warning, so the app never breaks in a database-less environment.




☁️ Deployment

Frontend → Vercel


Import this repo into Vercel
Set Root Directory to client
Add environment variable VITE_API_URL pointing to your live backend URL
Deploy


The included client/vercel.json handles SPA routing rewrites automatically.

Backend → Render


Connect this repo to Render via Blueprint (auto-detects render.yaml at the root)
Set CLIENT_URL to your live Vercel URL (required for CORS)
Optionally set MONGODB_URI for real persistence
Deploy



⚠️ Render's free tier spins down after inactivity — the first request after idling may take 30–60 seconds to respond while the instance wakes up.




🧪 Local Testing Checklist


 Submitting the form with empty/invalid fields shows inline validation errors
 Submitting valid data shows a success message
 Server console logs the incoming request payload
 App runs correctly with and without MONGODB_URI set
 Layout holds up at mobile, tablet, and desktop widths



📝 My Approach & Improvements

My approach combined AI-assisted tooling with hands-on debugging rather than treating it as a one-shot generation. I started by designing the UI in Stitch, modeled closely on Kidrove's playful, illustrated visual language, then handed that design over to Gemini 3.1 Pro (via Antigravity) to scaffold a typed, production-shaped monorepo: a React + TypeScript + Tailwind client and an Express + TypeScript + Zod server with optional MongoDB persistence. From there, my role shifted to integration and QA — I ran the app locally, deliberately tested edge cases, and traced down real issues as they surfaced: a Tailwind v4/v3 config mismatch breaking the PostCSS pipeline, a broken email/phone validation regex rejecting valid input, and a Zod version mismatch (.errors vs .issues) that failed the production TypeScript build on Render. Each was diagnosed from actual error logs and fixed with a verified, tested commit rather than guesswork. I deployed the client to Vercel and the server to Render, then closed the loop on CORS configuration and confirmed the full registration flow worked end-to-end in production, not just locally.

With more time, I'd add automated tests (Jest + React Testing Library on the frontend, Supertest on the API) so regressions like the ones I hit manually would be caught automatically. I'd also add rate-limiting and basic spam protection on /api/enquiry, an email confirmation step on successful registration, a lightweight admin view to browse submitted enquiries, and a proper CI pipeline to run lint/build/test checks on every push before deployment.


📄 License

This project was built as part of a development assignment and is intended for evaluation purposes.
