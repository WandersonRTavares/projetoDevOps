const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/pedidos', createProxyMiddleware({
    target: 'http://pedidos:3000',
    changeOrigin: true
}));

app.listen(3000, () => {
    console.log('Gateway rodando na porta 3000');
});