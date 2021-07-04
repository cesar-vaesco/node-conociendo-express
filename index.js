const express = require('express');
const morgan = require('morgan');
require('colors');

const app = express();


app.all('/user', (req, res, next) => {
    console.log('Por aquí paso....');
    next();
});

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.get('/user', (req, res) => {
    res.json({
            "nombre":"César",
            "apellido":"Vargas"
    });
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Petición post recibida');
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Petición post recibida');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`Información del usuario ${req.body.nombre} y su id ${req.params.id} ha sido actualizada`);
});

app.delete('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`El usuario con el id ${req.params.id} a sido eliminado`);
});

app.listen(3000, () => {
    console.log(`\n- Server started on port 3000`.america, '\n- URL: http://localhost:3000\n'.cyan.bold);
});
