FROM node:16
WORKDIR /app
COPY ./app/package.json .
COPY ./app/package-lock.json .
RUN npm install
COPY ./app .
EXPOSE 3000
CMD ["node", "app.js"]