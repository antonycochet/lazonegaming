FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY ./index.js ./package*.json /app/

RUN npm install

COPY . /app

EXPOSE 4000

CMD ["node", "index.js"]