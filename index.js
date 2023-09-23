const express = require("express");
const router = require("./src/routes/index.js");
/* const { multiplicacao } = require("./funcoes");
const { soma } = require("./funcoes"); 
const { subtracao } = require("./funcoes");
const { divisao } = require("./funcoes");
const { potencia } = require("./funcoes"); */
const app = express();
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.json({message: "Hello World"});
});

/* app.post("/api/soma", (req, res) => {
    const result = soma(req.body.num1 + req.body.num2)
    res.status(200).json({
        return: `resultado`
    });
});
app.post("/api/subtracao", (req, res) => {
    const result = subtracao(req.body.num1, req.body.num2)
    res.status(200).json({
    message: `resultado: ${result}`
    });
});

app.post('/api/multiplicar', (req, res) => {
    const result = multiplicar(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    });
});

app.post('/api/dividir', (req, res) => {
    const result = dividir(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    });
});

app.post('/api/potencia', (req, res) => {
    const result = potencia(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    });
});

app.post('/api/raiz', (req, res) => {
    const result = raiz(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    });
});
 */




app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

