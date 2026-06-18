# AI & Robotics Summer Workshop

A full-stack web application designed for a summer robotics camp registration, built with React, Tailwind CSS, Express, and MongoDB.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript, Zod
- **Database:** MongoDB (via Mongoose) - Optional

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### 1. Backend Setup (`/server`)

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Copy `.env.example` to `.env` and configure your settings.
   - `PORT`: (default 5000)
   - `MONGODB_URI`: Your MongoDB connection string (optional; if left blank, the app runs in mock mode).
   - `CLIENT_URL`: URL of the frontend (e.g., `http://localhost:5173`).
4. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup (`/client`)

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the `/client` directory and add:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

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

**Response (Success - 200 OK):**
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

**Response (Error - 400 Bad Request):**
```json
{
  "success": false,
  "errors": {
    "email": "Valid email is required"
  }
}
```

## Deployment

### Frontend (Vercel)
The `/client` directory contains a `vercel.json` configured for Single Page Application (SPA) routing.
1. Connect your GitHub repository to Vercel.
2. Select the `/client` directory as the Root Directory.
3. Add `VITE_API_URL` to the Environment Variables pointing to your deployed backend URL.
4. Deploy!

### Backend (Render)
The repository contains a `render.yaml` blueprint at the root for easy deployment of the `/server` directory to Render.
1. Connect your GitHub repository to Render using the Blueprint feature.
2. Render will automatically detect the `render.yaml` configuration.
3. Update the `CLIENT_URL` and `MONGODB_URI` environment variables in the Render dashboard.

## My Approach & Improvements
<!-- TODO: Provide personal approach and potential improvements here -->
