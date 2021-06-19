# Tutoriel NodeJs

## Installer Node

## Commandes 
`npm init -y`
`npm i -g nodemon`

## Serveur
Create server.js
Ajouter boilerplate :
```js
const http = require("http");

const server = http.createServer(function(req, res) {
  res.write("Hello World!");
  res.end();
})

server.listen(3000)
```