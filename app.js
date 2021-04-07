const express = require('express')
const app = express()

const port = 3030

const path = require('path');
app.use(express.static('public'));

app.listen(port, () => {
    console.log('VerduMarket Run on port '+ port);
});




// ------ Rutas linkeadas ------ //

//Home (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

//Detalle del producto (productDetail.html)
app.get('/views/productDetail.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

//Formulario de registro (register.html)
app.get('/views/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

//Formulario de login (login.html)
app.get('/views/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

//Carrito de compras (productCart.html)
app.get('/views/productCart.html', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productCart.html'));
});





// ------ Rutas PENDIENTES ------ //

//    ¿Template?
app.get('/template2', (req, res) => {
    res.sendFile(path.join(__dirname, './views/template2.html'));
});




