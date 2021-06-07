//teste de gravacao de arquivos texto no modo sincrono

const fs = require('fs')
const inicio = new Date()
console.log(`${inicio}`)
for (let i = 1; i <= 1000; i++){
    let retorno = fs.writeFileSync(`teste-sync-${i}.txt`, 'Olá Weslley')
    /* A função writeFileSync recebe dois parametros. 
    um arquivo simples e no segundo parametro, seu conteudo no arquivo 
    enquanto for verdade o loop do for, ele vai criando arquivos com 
    o respectivo conteudo dentro
    */
}
const fim = new Date()

console.log(`fim : ${fim}`)
console.log(`tempo (ms): ${fim - inicio}`)