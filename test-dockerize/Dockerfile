FROM node:12

# create a directory to hold the application code
# inside the image, this will be the working 
# directory for the application
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json
# AND package-lock.json are copied
COPY package*.json ./

# Only copying the package.json file, allow us to
# take advantage of cached Docker layer

RUN npm install

# Bundle app's source code inside the Docker image
COPY . .

EXPOSE 8080

# Define the command to run your app using CMD
# which define your runtime
CMD ["node", "server.js"]

# To build the image
# docker build -t <your username>/node-web-app .