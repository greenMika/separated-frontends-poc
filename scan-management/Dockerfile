FROM node:16-alpine

WORKDIR /usr/server/app
COPY ./ .
RUN npm install

ENV NODE_ENV=production
RUN npm run build
CMD npm start