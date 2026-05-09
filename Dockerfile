# ── Stage 1: Build (Vite + React) ───────────────────────────
FROM node:22-alpine AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Cài dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build production bundle
RUN npm run build

# ── Stage 2: Serve với Nginx ─────────────────────────────────
FROM nginx:1.25-alpine

# Copy build output từ stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]