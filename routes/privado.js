const path = require('path');

const privadoRouter = require('express').Router();

// Define a route for serving the HTML page
privadoRouter.get('/gerirCarros', (req, res) => {
    // Construct the absolute path to the HTML file
    const filePath = path.join(__dirname, '../templates/backOffice/tabelaCarros.html');
    // Send the HTML file as the response to the HTTP request
    res.sendFile(filePath);
});

module.exports = privadoRouter;
