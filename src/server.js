// `require()`: requisita / pega um modulo de`node_modules`
const express = require('express');
const server = express();

// configurar pasta public
// use: config servidor
server.use(express.static('public'));

// template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server.get('/', (req, res) => {
  return res.render('index.html', { title: 'Seu marketplace de coleta de resíduos' })
});

server.get('/create-point', (req, res) => {
  return res.render('create-point.html')
});

server.get('/search', (req, res) => {
  return res.render('search-results.html')
});

// ligar o servidor
server.listen(3000);
