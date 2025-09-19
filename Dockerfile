# Use official Node.js runtime as base
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy rest of the app
COPY . .

# Expose the app port
EXPOSE 5000

# Run the app
CMD ["node", "server.js"]
