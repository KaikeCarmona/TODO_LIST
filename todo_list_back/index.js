const express = require('express');
const cors = require('cors');
const db = require('./model/connection/db');
const router = require('./view/routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use(router); // Prefixo '/api' para suas rotas de API

db.sync()
  .then(() => console.log('Banco de dados conectado:'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

app.listen(3000, () => {
  console.log('Servidor funcionando na porta 3000');
});