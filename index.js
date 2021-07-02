const express = require('express');
const morgan = require('morgan');
require('colors');

const app = express();




// Middlewares
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.get('/about', (req, res) => {
    res.send('About me');
});

app.get('/contact', (req, res) => {
    res.send('Contact me');
});

app.get('/test', (req, res) => {
    res.send('<h1>TEST!!</h1>');
});

app.listen(3000, () => {
    console.log(`\n- Server started on port 3000`.america, '\n- URL: http://localhost:3000\n'.cyan.bold);
});
