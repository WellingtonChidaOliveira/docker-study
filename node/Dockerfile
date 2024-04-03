FROM node:15

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

CMD [ "node","index.js" ]