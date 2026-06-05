# DeployFlow CI

![CI/CD](https://img.shields.io/badge/CI%2FCD-Pipeline-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)

A CI/CD pipeline demonstration project with automated linting, testing, Docker build, and deployment simulation. Built with Node.js, GitHub Actions, and Docker.

## Project Overview

A senior-level DevOps showcase. The repository includes a fully functional CI/CD pipeline that lints, tests, builds a Docker image, and simulates a deployment to production. The dashboard page displays the latest build status and pipeline history.

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
