FROM node:16

WORKDIR /search-engne-client

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD [ "npx", "serve" , "-s", "build" ]

EXPOSE 3000