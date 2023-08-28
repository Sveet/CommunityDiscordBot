FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm ci
RUN npm run build

CMD ["npm", "start"]
EXPOSE 3000