// a funcao reduce é a mesma coisa, mas ela nao irá retornar
//nenhum array, antes , vai retornar um valor

let numeros = [1, 2, 3, 4, 5, 6, 7]

let soma = numeros.reduce(
    (atual, proximo) => {
        return atual + proximo
    }
)

console.log(numeros)
console.log(soma)