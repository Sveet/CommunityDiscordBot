FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci
COPY . .
RUN npm run build

RUN npm start
EXPOSE 3000