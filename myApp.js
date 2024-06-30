let express = require('express');
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
































 module.exports = app;
