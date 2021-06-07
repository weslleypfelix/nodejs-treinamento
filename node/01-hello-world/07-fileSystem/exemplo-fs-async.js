// exemplo do modulo do node,  file system

const fs = require('fs') //fs é o modulo file system

//Só pra ver o que tem no fs
// console.log(`fs : ${typeof(fs)} | constructor: ${fs.constructor.name}`)
// console.log(fs)
//Isso que o fs me devolve, é um objeto do tipo fs
//lendo um arquivo... no modo ASSINCRONO

let retorno = fs.readFile('index.html', /*Esse primeiro param. é o caminho do arquivo*/
    (erro, dados) => {
        console.log(`erro :   ${erro}`)// Primeiro parametro responsável por informar quando houver erros
        console.log(`dados :  ${dados}`)// São os dados d arquivo
    }
) //caminho do arquivo

console.log('retorno')
console.log(retorno)