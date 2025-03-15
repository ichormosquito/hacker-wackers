# Use Node.js as the base image
FROM node:18

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

# Start the application
CMD ["npm", "start"]