FROM node:18.13.0-alpine as build

WORKDIR /app
RUN apk add tzdata
COPY package.json .
RUN yarn set version berry
COPY yarn.lock .yarnrc.yml ./
RUN yarn install

COPY . .

FROM node:18.13.0-alpine
WORKDIR /app

#COPY --from=build /app/node_modules ./node_modules

CMD ["yarn", "start"]
