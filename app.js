const express = require('express')
const app = express()

const port = 3030

const path = require('path');
app.use(express.static('public'));


//Rutas:

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});//Home (index.html)

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});//Detalle del producto (productDetail.html)

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
});//Carrito de compras (productCart.html)

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});//Formulario de registro (register.html)

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});//Formulario de login (login.html)

app.get('/template', (req, res) => {
    res.sendFile(path.join(__dirname, './views/template.html'));
});//Formulario de login (login.html)

app.get('/template2', (req, res) => {
    res.sendFile(path.join(__dirname, './views/template2.html'));
});//Formulario de login (login.html)



app.listen(port, () => {
    console.log('VerduMarket Run on port '+ port);
});
