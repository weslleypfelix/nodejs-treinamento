// a funcao map vai receber uma funcao e pra cada elemento do array ele vai executar o que foi
//definido. e retornara um novo array com o resultado dessa funcao

let numbers = [1, 2, 3, 4, 5, 6]

let halfNumbers = numbers.map(
    (eachNumber) => {return eachNumber / 2}
)

console.log(numbers)
console.log(halfNumbers)

// map deu um novo array de cada elemento do array que ele operou
//map recebe uma funcao callbacl como parametro

//MAP DEVOLVE UM NOVO ARRAY ! A DIFERENCA É QUE ELE MODIFICA CADA ELEMENTO DE UM ARRAY