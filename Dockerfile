# Use an official Node runtime as the base image
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the application
RUN npm run build 

# Production stage
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default for nginx)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]