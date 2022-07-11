FROM node:16
ENV NODE_ENV=development \
    PORT=10000

WORKDIR /home/app
COPY package*.json ./
RUN npm ci

COPY . .
EXPOSE 10000
#RUN npm run migrations:run

CMD ["npm","start"]

# dockrizacion de proyecto https://www.youtube.com/watch?v=iLlmm0L-VpQ
### docker build -t node-otmaster .