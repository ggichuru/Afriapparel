const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/ecomFront'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ecomFront/'}),
);

app.listen(`Running on port ${process.env.PORT || 8080}`);
