# Build stage
FROM node:20 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY horizons-export-5256eb34-abc9-40f5-81df-ce06306196f9/package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY horizons-export-5256eb34-abc9-40f5-81df-ce06306196f9/ ./

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built files from the build stage to the nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 12146
EXPOSE 12146

# Start nginx
CMD ["nginx", "-g", "daemon off;"]