FROM node:8.3.0

# Create api folder
RUN mkdir -p /server
WORKDIR /server

#Cache NPM dependencies
COPY package.json /server/
RUN npm install

#Copy api files
COPY . /server

CMD node index.js