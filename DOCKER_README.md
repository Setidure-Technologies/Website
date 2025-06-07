# Docker Deployment Instructions

This document provides instructions on how to deploy your React website using Docker.

## Prerequisites

- Docker installed on your server
- Docker Compose installed on your server

## Files Overview

- `Dockerfile`: Multi-stage build file that builds your React app and serves it with Nginx
- `docker-compose.yml`: Configuration for Docker Compose to run your container
- `nginx.conf`: Custom Nginx configuration for serving your React app

## Deployment Steps

### 1. Build and Start the Container

```bash
# Navigate to the directory containing docker-compose.yml
cd /path/to/your/project

# Build and start the container in detached mode
docker-compose up -d
```

### 2. Verify the Deployment

```bash
# Check if the container is running
docker-compose ps

# View logs if needed
docker-compose logs
```

### 3. Access Your Website

Your website should now be accessible at:
- http://localhost:12146 (if running locally)
- http://your-server-ip:12146 (if running on a server)

## Managing Your Deployment

### Stopping the Container

```bash
docker-compose down
```

### Rebuilding After Code Changes

```bash
# Rebuild the image and restart the container
docker-compose up -d --build
```

### Scaling (if needed)

```bash
# Run multiple instances of your website
docker-compose up -d --scale website=3
```
Note: Additional configuration would be needed for load balancing.

## Customization

### Environment Variables

To add environment variables, uncomment and modify the `environment` section in `docker-compose.yml`.

### Persistent Storage

To add persistent storage, uncomment and modify the `volumes` section in `docker-compose.yml`.

### Custom Domain

To use a custom domain, update the `server_name` directive in `nginx.conf` and ensure your DNS is properly configured.

## Troubleshooting

- If the website doesn't load, check the container logs: `docker-compose logs`
- If you encounter permission issues, ensure the Docker user has appropriate permissions
- For networking issues, verify that port 12146 is not being used by another service