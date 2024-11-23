# Installation Guide

## Prerequisites

- Node.js 18.x or higher
- Pnpm (npm package manager)
- Git (version control)
- Code Editor (VSCode, Neovim, etc.)

## Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/Daim-Nickel-Penny/GraphIQ.git
```

2. Change the working directory to the cloned repository:

```bash
cd GraphIQ
```

3. Install the required dependencies:

```bash
pnpm install
```

4. Create a .env file in the root directory and add the following content:

```
GROQ_API_KEY=your-groq-api-key
```

5. Create a `key.ts` file in the `apps/express/src` directory. (Refer to `key.dummy.ts` for an example)

6. Paste the API key you obtained from the Groq website into the `key.ts` file.

7. Start the server:

```bash
pnpm start
```

8. Open your browser and navigate to `http://localhost:5173/chat`.

9. You are now ready to use GraphIQ!

## Troubleshooting

If you encounter any issues during the installation process, please refer to the troubleshooting section in the README.md file for common issues and their solutions.

## App Updates

To update the app, follow these steps:

1. Pull the latest changes from the repository:

```bash
git pull
```

2. Install the updated dependencies:

```bash
pnpm install
```

3. Restart the server:

```bash
pnpm start
```

4. Open your browser and navigate to `http://localhost:5173/chat`.

5. You are now up to date with the latest changes in the app.
