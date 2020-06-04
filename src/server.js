const express = require('express');
const server = express();

// configurar pasta public
// use: config servidor
server.use(express.static('public'));

// configurar caminhos (rotas)
// req: requisição, pedido
// res: reposta
server.get('/', (req, res) => {
  // para que o index.html seja enviado quando a rota / for acessada
  // __dirname: caminho da pasta de server.js
  res.sendFile(__dirname + '/views/index.html')
});

server.get('/create-point', (req, res) => {
  res.sendFile(__dirname + '/views/create-point.html')
});

// ligar o servidor
server.listen(3000);
