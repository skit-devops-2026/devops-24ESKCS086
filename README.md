# interviewX

## Author

| Roll No. | Name | GitHub username |
|---|---|---|
| 24ESKCS086 | BHAVISHYA SAINI | b241693-cyber |

## About

interviewX is an AI-powered interview preparation platform for students. It generates technical and HR interview questions, gives instant feedback on answers using an AI model, and tracks preparation progress over time. The project is built as a React frontend with a Node.js / Express backend and MongoDB Atlas as the database.

## Tech stack

- Frontend: react,taiwindcss,motion,react-icons
- Backend: node.js,express.js,axios,redux,multer,openrouter
- Database: mongodb-atlas
- DevOps: Docker, docker-compose, GitHub Actions (CI/CD to GHCR), Prometheus, Grafana, Kubernetes

## Project structure

```
backend/     Express API - /health and /metrics (Prometheus) endpoints
frontend/    React (Vite) app, served by nginx in Docker
monitoring/  Prometheus config, alert rules and Grafana dashboard
k8s/         Kubernetes deployment and service manifests
docs/        Deployment notes and deployment screenshot
```

## Running locally

```bash
make install
make run
```

Or with Docker (app + Prometheus + Grafana):

```bash
docker compose up --build
# Frontend:  http://localhost:8080
# Backend:   http://localhost:3000/health
# Prometheus: http://localhost:9090
# Grafana:   http://localhost:3001  (admin / admin)
```

## Container images (GHCR)

Built and pushed by GitHub Actions on every push to `main`:

- `ghcr.io/skit-devops-2026/devops-24eskcs086-backend:latest`
- `ghcr.io/skit-devops-2026/devops-24eskcs086-frontend:latest`

## Live URL

https://skit-devops-2026.github.io/devops-24ESKCS086/

Frontend is deployed to GitHub Pages by the CI workflow. The backend is
deployed from the root Dockerfile (see `docs/deployment.md` for the Render
steps).

## Health endpoint

`GET /health` returns the running commit SHA. See `Makefile` and the milestone
sheet for why this is required.

Example:

```json
{"status":"ok","commit":"local","uptime":12.3,"timestamp":"2026-10-22T00:00:00.000Z"}
```

## Kubernetes

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

See `k8s/README.md` and `monitoring/README.md` for details.
