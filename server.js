require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const routerLocal = require('./routes/local/index');
//const Pgs = require('./routes/pgs/index');
const publicoRouter = require('./routes/publico');
const privadoRouter = require('./routes/privado');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', publicoRouter);
app.use('/bo/', privadoRouter);
app.use('/api/local/', routerLocal);
//app.use('/api/pgs/', routerPgs);

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
    console.log('Express server listening on port', port)
});
