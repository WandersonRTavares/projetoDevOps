const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servico de Pedidos rodando!');
});

app.listen(3000, () => {
    console.log('Pedidos rodando na porta 3000');
});