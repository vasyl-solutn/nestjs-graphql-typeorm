# NestJS + GraphQL + TypeORM + SQL

Use this repository as a template or resource for NestJS with GraphQL and TypeORM.
Check out the video tutorial [here](https://www.youtube.com/watch?v=CSfZmyzQAG8&).
[![NestJS GraphQL with TypeORM & SQL](https://github.com/stuyy/nestjs-graphql-typeorm/assets/25330491/935f8740-2f1b-4cc6-9275-5c62cf63ceb7)](https://www.youtube.com/watch?v=CSfZmyzQAG8&)


## Docker mysql up
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:9.0.1
docker start some-mysql

docker exec -it some-mysql mysql -u root -pmy-secret-pw

show DATABASES;

show TABLES;

## up locally
npm run start:dev
http://localhost:3000/graphql



