FROM node:10

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV NODE_CONFIG_DIR=./src/config

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .
RUN yarn build

EXPOSE 5000
CMD [ "yarn", "start:prod" ]