# OTMaster 

Backend ApiRest in Express 4 with Database MySql 8.0

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run start
```
# Comands Docker Compose - require docker engine installed
### service up mysql & otmaster app
```
docker-compose up -d mysql 
docker compose up -d otmaster
```
optional
```
docker compose up -d phpmyadmin
```
### service down mysql
```
docker-compose stop mysql
docker compose stop otmaster
```
optional
```
docker compose stop phpmyadmin
```

## Command into OTMaster app bash for insert data demo
#### create 1 colab and 2 roles
```
npm run migrations:run
```
#### roles: 
     admin & user
#### colaboradores: 
     rut: 10111222
     pass: "1234qwery"

## Model Database
![alt database-model](https://github.com/LeonardoMV94/otmaster-backend/blob/main/database-model.png?raw=true)

