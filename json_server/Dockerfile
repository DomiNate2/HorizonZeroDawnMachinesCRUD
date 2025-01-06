FROM node
WORKDIR /home/node/app
COPY ./db.json .
RUN npm i -g json-server
ENTRYPOINT ["npx","json-server", "db.json", "-p", "3000", "-h", "0.0.0.0"]
