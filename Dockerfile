# Specify a base image
FROM node:16-slim as build

WORKDIR '/app'
ARG MODE
# Install some depenendencies
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . .
COPY ./src/config_$MODE.json ./src/config.json
# Correct line-feeds
RUN apt update && apt install -y dos2unix
RUN find . -type f -name "*.js*" -print0 | xargs -0 dos2unix
# If production
RUN npm run build

FROM nginx:alpine
WORKDIR /var/www
COPY --from=build /app/build .
RUN sed -i.bak "s/root.*;/root \/var\/www;/" /etc/nginx/conf.d/default.conf
RUN sed -i.bak "s/80;/3000;/" /etc/nginx/conf.d/default.conf
RUN sed -i.bak "s/localhost;/frontend;/" /etc/nginx/conf.d/default.conf
RUN mv static front
RUN sed -i.bak "s/assets\//front\//g" index.html
RUN sed -i.bak "s/static\//front\//g" asset-manifest.json
RUN cd /var/www/front/js && sed -i.bak "s/assets\//front\//g" *.js *.map
RUN cd /var/www/front/css && sed -i.bak "s/assets\//front\//g" *.map *.css
