const path = require('path');

const publicoRouter = require('express').Router();

// Define uma rota para a página HTML
publicoRouter.get('/', (req, res) => {
    // Obtenha o caminho absoluto para o arquivo HTML
    const filePath = path.join(__dirname, '../templates/frontEnd/index.html');
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile(filePath);
});

module.exports = publicoRouter;