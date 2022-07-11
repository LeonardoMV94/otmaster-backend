FROM node:16
ENV NODE_ENV=production \
    PORT=10000

WORKDIR /home/app
COPY package*.json ./
RUN npm install -g sequelize-cli@6.4.1
RUN npm ci

COPY . .
EXPOSE 10000

CMD ["npm","start"]

# dockrizacion de proyecto https://www.youtube.com/watch?v=iLlmm0L-VpQ
### docker build -t node-otmaster .