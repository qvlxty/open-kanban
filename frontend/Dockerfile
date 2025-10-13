FROM node:20.11.1-alpine3.19 AS build

WORKDIR /usr/src/app

RUN apk add --update --no-cache git openssh && rm -rf /var/cache/apk/*

COPY package.json  ./
COPY yarn.lock  ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx:stable-alpine3.17-slim AS serve

COPY configs/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist /app

EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]
