const express = require('express');

const app = express();

app.use(express.static('./dist/ecom-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ecom-front/'}),
);

app.listen(`Running on port ${process.env.PORT || 8080}`);
