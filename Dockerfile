# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire current directory contents into the container at /app
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Set the command to run the app using serve
CMD ["serve", "-s", "build"]

# Expose port 5000 to the outside world
EXPOSE 3000
