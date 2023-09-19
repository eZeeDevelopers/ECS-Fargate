FROM node:16
COPY ./app /usr/src/app
WORKDIR /usr/src/app
COPY ./app/package.json .
COPY ./app/package-lock.json .
RUN npm install
COPY ./app .
EXPOSE 3000
CMD ["node", "app.js"]