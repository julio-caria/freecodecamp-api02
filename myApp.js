let express = require('express');
require('dotenv').config();
let app = express();

console.log("Hello World")

app.get('/', (req, res) => {
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);

    // Middleware - Servir ativos estáticos
    absolutePath = __dirname + '/public'
    app.use(express.static(__dirname + "/public"));
    app.use("/public", express.static(__dirname + "/public"));
})

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({"message": "Hello json"})
    } else {
        res.json({"message": "Hello json"})
    }
})































 module.exports = app;
