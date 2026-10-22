.PHONY: install test build run docker-build docker-up

install:
	cd backend && npm install
	cd frontend && npm install

test:
	cd backend && npm test

build:
	cd frontend && npm run build
	@echo "backend: no build step (Node.js)"

run:
	cd backend && node server.js

# Needed from M4 onwards
docker-build:
	docker build -t ghcr.io/skit-devops-2026/devops-24eskcs086-backend:latest ./backend
	docker build -t ghcr.io/skit-devops-2026/devops-24eskcs086-frontend:latest ./frontend

docker-up:
	docker compose up --build
