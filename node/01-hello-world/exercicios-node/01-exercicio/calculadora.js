const calculadora = {
    soma(a, b) {
        return a + b
    },
    somarNumeros(...numeros) {
       return numeros.reduce(
            (atual, proximo) => {
                return atual + proximo
            }
        )
    },
    sub(a, b) {
        return a - b
    },
    subtrairNumeros(...numeros) {
        let sub = numeros[0]
        for (let i = 1; i < numeros.length; i++) {
            sub -= numeros[i]
        }
        return sub
    },
    multiplicar(a, b) {
        return a * b
    },
    multiplicarNumeros(...numeros) {
        let mult = 1
        for (let i = 0; i < numeros.length; i++) {
            mult *= numeros[i]
        }
        return mult
    },
    dividir(a, b) {
        return a / b
    },
    dividirNumeros(...numeros) {
        let div = 1
        for (let i = 1; i < numeros.length; i++) {
            div /= numeros[i]
        }
        return div * 100
    }

}

module.exports = calculadora