FROM node:14
WORKDIR /js/app
COPY package.json /js/app
RUN npm install
COPY . /js/app
CMD node serverside.js
EXPOSE 80