const chai = require('chai');
const assert = chai.assert;
const math = require('./math'); // Importe suas funções matemáticas aqui

describe('Funções Matemáticas', function () {
    it('Soma', function () {
        assert.equal(math.soma(2, 3), 5);
        assert.equal(math.soma(-2, 3), 1);
    });

    it('Subtração', function () {
        assert.equal(math.subtracao(5, 2), 3);
        assert.equal(math.subtracao(2, 5), -3);
    });

    it('Multiplicação', function () {
        assert.equal(math.multiplicacao(2, 3), 6);
        assert.equal(math.multiplicacao(-2, 3), -6);
    });

    it('Divisão', function () {
        assert.equal(math.divisao(6, 2), 3);
        assert.equal(math.divisao(8, 4), 2);
    });

    it('Potência', function () {
        assert.equal(math.potencia(2, 3), 8);
        assert.equal(math.potencia(5, 0), 1);
    });

    it('Raiz Quadrada', function () {
        assert.equal(math.raiz(9), 3);
        assert.equal(math.raiz(16), 4);
    });
});