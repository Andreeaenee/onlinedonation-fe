# Stage 1: Build the react app
FROM node:22.1.0 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the react app
RUN npm run build

# Stage 2: Serve the react app using `serve`
FROM node:22.1.0-alpine

# Install `serve` to serve the built app
RUN npm install -g serve

# Copy the build output to the container
COPY --from=build /app/build /app/build

# Expose port 3001
EXPOSE 3001

# Start the app using `serve`
CMD ["serve", "-s", "/app/build", "-l", "3001"]
