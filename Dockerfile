FROM node:16.14.0-alpine

ENV MONGO_DB_USERNAME=username \ 
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node","/home/app/index.js"]