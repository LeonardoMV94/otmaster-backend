FROM node:latest
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

CMD ["npm","start"]

# dockrizacion de proyecto https://www.youtube.com/watch?v=iLlmm0L-VpQ
#docker build -t node-otmaster .