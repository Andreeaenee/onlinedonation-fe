# Stage 1: Build
FROM node:22.1.0 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code, including .env
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve
FROM node:22.1.0-alpine

# Install serve globally
RUN npm install -g serve

# Copy the built application from the previous stage
COPY --from=build /app/build /app/build

# Expose the desired port
EXPOSE 3001

# Start the application using serve
CMD ["serve", "-s", "/app/build", "-l", "3001"]
