class ServicoIndex {
    Somar(num1, num2) {
        console.log('ENTROU NA FUNCAO')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números sadsa dasd")
        }
        const resultado = num1 + num2
    
        return resultado;
    }
    Subtrair(num1, num2) {
        console.log('ENTROU NA FUNCAO')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números sadsa dasd")
        }
        const resultado = num1 - num2
    
        return resultado;
    }
    Dividir(num1, num2) {
        console.log('ENTROU NA FUNCAO')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números sadsa dasd")
        }
        const resultado = num1 / num2
    
        return resultado;
    }
    Multiplicar(num1, num2) {
        console.log('ENTROU NA FUNCAO')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números sadsa dasd")
        }
        const resultado = num1 * num2
    
        return resultado;
    }
    Raiz(num1) {
        console.log('ENTROU NA FUNCAO')
       
        const resultado = Math.sqrt (num1)
    
        return resultado;
    }
} 

module.exports = ServicoIndex










/* function potencia(num1, num2) {
    return num1 ** num2;
}

function raiz(num1, num2) {
    return num1 ** (1 / num2);
}

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}
module.exports = {potencia, raiz, soma, subtracao, multiplicacao, divisao}; */

