//funcao filter tb recebe um array como aprametro
//e lida com cada elemento do array

//se a funcao retorna true, o elemento vai pro novo array

//filter retorna um novo array a partir da funcao passada como 
//parametro e vai preencher esse novo array com o retorno
//true da chamada da funcao com cada elemento

let numeros = [1, 10, 15, 25, 50, 60, 99]

let numerosPares = numeros.filter(
    (numero) => {
        return numero % 2 == 0
    }
)

console.log(numeros)
console.log(numerosPares)