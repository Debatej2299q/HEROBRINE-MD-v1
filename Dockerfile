# Use a base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Clone the repo
RUN apk add --no-cache git \
    && git clone https://github.com/Debatej2299q/HEROBRINE-MD-v1.git . \
    && rm -rf .git

# Install dependencies
RUN npm install --production

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
