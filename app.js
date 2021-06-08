const express = require('express');
const app = express();
const path = require('path')


app.get('/', (req, res)=>{
   let htmlPath = path.resolve(__dirname, './views/index.html');
   res.sendFile(htmlPath);    
})


app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/babbage.html"));
});

app.get('/barners-lee', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/barners-lee.html"));
});

app.get('/clarke', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/clarke.html"));
});

app.get('/hamilton', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/hamilton.html"));
});

app.get('/hopper', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/hopper.html"));
});


app.get('/Lovelace', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/Lovelace.html"));
});

app.get('/turing', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/turing.html"));
});

app.use(express.static('public'));



app.listen(3030, () =>
console.log("Servidor en linea")
);