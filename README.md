# GraphIQ

GraphIQ is tool designed to streamline graph analysis. It allows you to upload graph images, parse their structure, and ask insightful questions about them. By automating the extraction of graph details such as axes, vertices, and contextual information, GraphIQ accelerates your analysis and helps uncover new insights.

---

## Features

- **Graph Analysis**: Extracts graph details such as axes, vertices, and contextual information.
- **Question-Answering**: Enables you to ask insightful questions about the extracted graph details.
- **Support Text and Image Input**: Accepts text and image inputs for graph analysis.
- **No Vendor Lock-In**: No vendor lock-in, as GraphIQ can easily be integrated with other LLMs.

### 🛠️ Monorepo Architecture

GraphIQ utilizes a monorepo setup powered by **Turborepo**, enabling seamless development and build management:

- **React Frontend**: Built using **Vite** for a fast and modern frontend development experience.
- **Express.js Backend**: Provides robust API endpoints and serves static assets in production.

### ✨ Key Highlights

- **Vite Proxy**: Proxies API requests from the frontend to the backend for smooth local development.
- **Shared Environment Variables**: Manages consistent configuration across applications using `dotenvx`.
- **Production-Ready**: Efficiently bundles the frontend into static files served by the backend.
- **Turbocharged Development**: Unified commands for building, linting, and running servers via Turborepo.

---

## Project Structure

```bash
/apps
  /react      # Frontend React application
  /express    # Backend Express.js application
/packages
  /shared     # Shared code or utilities (if any)
```

## Setup and Installation

### 1. Clone the repository:

```bash
git clone https://github.com/probir-sarkar/react-express-monorepo
cd react-express-monorepo
```

### 2. Install dependencies using PNPM:

```bash
pnpm install
```

### 3. Set up environment variables:

Create a `.env` file in the root directory to manage global variables across the monorepo.

### 4. Start development servers:

```bash
pnpm dev
```

This will start both the frontend (Vite on port `5173`) and backend (Express on port `3000`).

### 5. Build for production:

```bash
pnpm build
```

### 6. Start the production server:

```bash
pnpm start
```

# Development Server Setup

- The **frontend** runs on [localhost:5173](http://localhost:5173) (powered by Vite).
- The **backend** runs on [localhost:3000](http://localhost:3000) (powered by Express.js).
- All API requests to `/api` are proxied from the frontend to the backend.

## Proxying API Requests

All API requests to /api are automatically proxied from the frontend to the backend during development
