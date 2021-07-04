const express = require('express');
const morgan = require('morgan');
require('colors');

const app = express();




// Middlewares
app.use(morgan('dev'));

app.get('/user', (req, res) => {
    res.json({
            "nombre":"César",
            "apellido":"Vargas"
    });
});

app.post('/about', (req, res) => {
    res.send('Petición post recibida');
});

app.put('/contact', (req, res) => {
    res.send('Petición UPDATE recibida');
});

app.delete('/test', (req, res) => {
    res.send('<h1>Petición delerte recibida </h1>');
});

app.listen(3000, () => {
    console.log(`\n- Server started on port 3000`.america, '\n- URL: http://localhost:3000\n'.cyan.bold);
});
