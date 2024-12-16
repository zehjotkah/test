# Build stage
FROM node:20-slim as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:20-slim as runner

WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm install --production

# Add runtime configuration
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Add start script to package.json
RUN npm pkg set scripts.start="remix-serve ./build/server/index.js" && \
    npm install @remix-run/serve

CMD ["npm", "start"]