const express = require('express');
require('dotenv').config({ path: './.env'}); // Arquivo de variaveis de ambiente

const app = express();
const port = process.env.PORT;

app.use(express.static('public')); // Pasta de acesso externo
app.set('view engine', 'pug'); // Gerador de view
app.set('views', './src/views'); // Pasta das views

const tempoRouter = require('./src/routes/tempo.js');

app.listen(port, console.log(`Servidor escutando a porta: ${port}`));

app.get('/', (req, res) => res.send('Servidor Funcionando'));

app.use('/tempo', tempoRouter);