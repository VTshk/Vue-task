# vue-test

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
json-server db.json –w
```
### Users
1. Читатель
"login": "reader@mail.com",
"password": 123456,
"description": Читатель не может создавать и редактировать существующие посты, но может хлопать за существующие, количество хлопков по типу Medium, не ограничено.

2. Писатель
"login": "writer@mail.com",
"password": 123456,
"description": писатель может создавать, редактировать и удалять свои посты, но не может “хлопать”.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
