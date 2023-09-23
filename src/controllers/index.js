const ServicoIndex = require("../services/index")

const servico = new ServicoIndex()

class ControllerIndex {
    Somar(req, res){
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Subtrair(req, res){
        try {
            const result = servico.Subtrair(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Dividir(req, res){
        try {
            const result = servico.Dividir(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Multiplicar(req, res){
        try {
            const result = servico.Multiplicar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Potenciar(req, res){
        try {
            const result = servico.Potenciar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Raiz(req, res){
        try {
            const result = servico.Raiz(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
}



module.exports = ControllerIndex