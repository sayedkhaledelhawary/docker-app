FROM node as base

FROM base as DEVELPMENT

WORKDIR /app

COPY package.json .

RUN npm install


COPY .  .

EXPOSE 3000

CMD [ "npm", "run",  "start-dev" ]



FROM base as prodction

WORKDIR /app

COPY package.json .

RUN npm install --only=prodction


COPY .  .

EXPOSE 3000

CMD [ "npm", "start" ]