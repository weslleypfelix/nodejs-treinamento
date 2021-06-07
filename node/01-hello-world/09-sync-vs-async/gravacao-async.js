//teste de gravacao de arquivos texto no modo asincrono

const fs = require('fs')
const inicio = new Date()
console.log(`${inicio}`)
for (let i = 1; i <= 1000; i++){
    //writeFile é assincrono...
    let retorno = fs.writeFile(`teste-async-${i}.txt`, 'Olá Weslley',
    (erro /*Neste parametro iremos verificar se houve algum erro*/) => {
        console.log(`Arquivo teste-async-${i}.txt gravado`)
        if(i == 1000){
        const UltimoArquivo = new Date()
        console.log(`ultimo arquivo : ${UltimoArquivo}`)
        console.log(`tempo (ms): ${UltimoArquivo - inicio}`)
    }}
    )
}
const fim = new Date()
console.log(`fim : ${fim}`)
console.log(`tempo (ms): ${fim - inicio}`)