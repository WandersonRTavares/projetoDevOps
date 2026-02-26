const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servico de Pagamentos rodando!');
});

app.listen(3000, () => {
    console.log('Pagamentos rodando na porta 3000');
});