const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Estamos apenas começando heheh!</h1>')
})

app.listen (port, () => {
    console.log("Servidor no AR!")
})