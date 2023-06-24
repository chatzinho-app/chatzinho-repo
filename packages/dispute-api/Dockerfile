# DEVELOPMENT IMAGE
# Use an official Node.js runtime as the base image
FROM node:18.16 as development

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package-lock.json to verify if has packages changes
COPY package*.json ./

# Install the project dependencies
RUN npm i

# Copy the application code to the container
COPY . .

# Run migrations
RUN npm run typeorm:run-migrations

# Run the application in development mode
CMD "npm" "run" "start:dev"

# PRODUCTION IMAGE
# Use an official Node.js runtime as the base image
FROM node:18.16 as production

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package-lock.json to verify if has packages changes
COPY package*.json ./

# Install the project dependencies
RUN npm i

# Copy the application code to the container
COPY . .

# Run migrations
RUN npm run typeorm:run-migrations

# Run the application in development mode
CMD "npm" "run" "build"



