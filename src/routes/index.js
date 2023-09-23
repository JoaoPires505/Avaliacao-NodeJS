const express = require('express')
const ControllerIndex = require('../controllers/index')

const controller = new ControllerIndex()
const router = express.Router()
router.post('/api/somar', controller.Somar)
router.post('/api/subtrair', controller.Subtrair)
router.post('/api/divisao', controller.Dividir)
router.post('/api/multiplicar', controller.Multiplicar)
router.post('/api/potenciar', controller.Potenciar)
router.post('/api/raiz', controller.Raiz)

module.exports = router