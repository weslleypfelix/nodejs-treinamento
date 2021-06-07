//exemplo de modulo file System

const fs = require('fs')

//nao há a necessidade de passar um callback pq eu irei ficar parado

// let retorno = fs.readFileSync('index.html')

let retorno = null

try {
    retorno = fs.readFileSync('index2.html')
} catch(erro) {
    console.log(`Deu erro ! ai mds ${erro}`)
}



console.log(`${retorno}`)