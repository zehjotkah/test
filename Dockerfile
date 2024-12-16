# Build stage
FROM node:20-slim as builder

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Production stage
FROM node:20-slim as runner

WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

RUN npm install --production --legacy-peer-deps

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npx", "remix-serve", "./build/server/index.js"]