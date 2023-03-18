const express = require('express');
const https = require('https');
const { URL } = require('url');

const tempoRouter = express.Router();

tempoRouter.get('', async(req, res) => {
    let tempoData = '';

    https.get(new URL(`https://api.hgbrasil.com/weather?key=${process.env.WEATHER_API_KEY}&woeid=${process.env.WEATHER_API_WOEID}`), (tempoRes) => {
        tempoRes.on('data', (d) => tempoData += d);

        tempoRes.on('end', () => {
            tempoData = JSON.parse(tempoData)?.results;
            console.log(tempoData);

            res.render('tempo.pug', tempoData); // Renderiza pagina
        });
    }).on('error', (err) => {
        console.log(`Erro: ${err.message}`);
    });
});

module.exports = tempoRouter;