const { cyan } = require('colors');
const express = require('express');
const morgan = require('morgan');
require('colors');

const app = express();


// función que sirve de middleware
function logguer(req, res, next) {
    /* console.log('Petición recibida...'); */
    console.log(`Ejemplo de middleware => Ruta recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`.cyan);

    next();
}

//settings - Configuraciones
app.set('appName', '\nPráctica de César!!!');
app.set('port', 4500);
app.set('view engine', 'ejs');


// Middlewares -- procesando datos antes de que lleguen a las rutas
app.use(morgan('dev'));
app.use(express.json());
app.use(logguer);

app.all('/user', (req, res, next) => {
    console.log('Por aquí paso....');
    next();
});


app.get('/', (req, res) => {
    const data = [{ nombre: 'César' }, { nombre: 'Vero' }, { nombre: 'Gloria' }, { nombre: 'Vanessa' }, { nombre: 'Aurelio' }];
    res.render('index.ejs', { personas: data });
});

// Routes
app.get('/user', (req, res) => {
    res.json({
        "nombre": "César",
        "apellido": "Vargas"
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


app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log(`\n- Server started on port ${app.get('port')}`.green, `\n- URL: http://localhost:${app.get('port')}\n`.cyan.bold);
});
