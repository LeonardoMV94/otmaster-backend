FROM node:16
ENV NODE_ENV=production

WORKDIR /home/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8000
CMD ["npm","start"]

# dockrizacion de proyecto https://www.youtube.com/watch?v=iLlmm0L-VpQ
### docker build -t node-otmaster .