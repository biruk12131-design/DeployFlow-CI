# DeployFlow CI

![CI/CD](https://img.shields.io/badge/CI%2FCD-Pipeline-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)

A CI/CD pipeline demonstration project with automated linting, testing, Docker build, and deployment simulation. Built with Node.js, GitHub Actions, and Docker.

## Project Structure

```
DeployFlow-CI/
├── .env.example              # Environment variables template
├── .eslintrc.json            # ESLint configuration
├── .github/                  # GitHub Actions workflows and configurations
├── .gitignore                # Git ignore rules
├── Dockerfile                # Docker container configuration
├── eslint.config.mjs         # ESLint configuration module
├── metadata.json             # Project metadata
├── next-env.d.ts             # Next.js TypeScript environment declarations
├── next.config.ts            # Next.js configuration
├── package.json              # Node.js dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration module
├── render.yaml               # Render platform deployment configuration
├── tsconfig.json             # TypeScript configuration
├── app/                      # Application source code and Next.js app directory
├── assets/                   # Static assets (images, fonts, etc.)
├── hooks/                    # Reusable React hooks or shell scripts
├── lib/                      # Utility libraries and helper functions
├── public/                   # Public assets served directly
└── src/                      # Source code components and styles
```

## Directory Guide

| Directory | Purpose |
|-----------|---------|
| `.github/` | GitHub Actions workflows, issue templates, and CI/CD configurations |
| `app/` | Next.js application code, pages, and routes |
| `assets/` | Static assets like images, icons, fonts, and media files |
| `hooks/` | Custom React hooks for state management or shell scripts for CI/CD |
| `lib/` | Shared utility functions, helper modules, and libraries |
| `public/` | Publicly accessible static files and assets |
| `src/` | Source code for components, styles, and application logic |

## Configuration Files

| File | Purpose |
|------|---------|
| `.env.example` | Template for required environment variables |
| `.eslintrc.json` | ESLint rules for code quality and standards |
| `Dockerfile` | Docker container image definition for deployment |
| `next.config.ts` | Next.js build and runtime configuration |
| `tsconfig.json` | TypeScript compiler and type-checking options |
| `package.json` | Project dependencies, scripts, and metadata |
| `postcss.config.mjs` | CSS post-processing and transformation configuration |
| `render.yaml` | Deployment configuration for Render platform |
| `metadata.json` | Project metadata and configuration information |

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: PostCSS
- **Code Quality**: ESLint
- **Containerization**: Docker
- **Deployment**: Render
- **Package Manager**: npm

## Language Composition

- HTML: 94.7%
- JavaScript: 2.9%
- TypeScript: 2.2%
- Other: 0.2%

## Development

Install dependencies:
```bash
npm install
```

Start the application:
```bash
npm start
```

Run tests:
```bash
npm test
```

Run linting:
```bash
npx eslint src/
```

## Docker

Build the image:
```bash
docker build -t deployflow-ci .
```

Run the container:
```bash
docker run -p 3000:3000 deployflow-ci
```
