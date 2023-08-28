FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./

RUN npm ci
RUN npm run build

RUN npm start
EXPOSE 3000