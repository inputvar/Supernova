# Use the official Node.js image from Docker Hub
FROM node:alpine

# Set the working directory to /app
WORKDIR /supernova

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json /supernova/

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /supernova

# Install the "@zegocloud/zego-uikit-prebuilt-live-streaming-rn" package
RUN npm install @zegocloud/zego-uikit-prebuilt-live-streaming-rn

# Define the command to run the application
CMD ["npm",  "start"]
