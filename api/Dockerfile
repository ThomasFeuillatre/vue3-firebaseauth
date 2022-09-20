FROM node:14 AS development
RUN apt-get -qy update && apt-get -qy install openssl

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./yarn.lock
COPY prisma ./prisma/
RUN yarn install

RUN yarn add glob rimraf

COPY . .

RUN yarn build

FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn add --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]