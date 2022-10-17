# specify the node base image with your desired version node:<version>
FROM node:16

# Create app directory
WORKDIR /usr/src/app


CMD [ "cd", "backend" ]
# Install app dependencies BACKEND
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3001
CMD [ "node", "server.js" ]

CMD [ "cd", ".." ]

# Install app dependencies for FRONTEND
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000
CMD [ "npm", "start" ]
