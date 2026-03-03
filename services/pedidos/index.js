const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servico de Pedidos rodando!');
});

app.listen(3000, () => {
    console.log('Pedidos rodando na porta 3000');
});
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total de requisições HTTP'
});

app.use((req, res, next) => {
    httpRequestCounter.inc();
    next();
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});