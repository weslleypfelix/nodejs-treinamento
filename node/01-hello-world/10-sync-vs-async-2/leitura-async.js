const fs = require('fs')
const leituraSync = require('./leitura-sync')

const leituraAsync = (arquivo) => {
    console.log(`fazendo a leitura no mod sincrono do arquivo : ${arquivo}`)
    const inicio = new Date()
    fs.readFile(arquivo, (erro, dados) => {
        if(erro){
            throw erro
        }else {
            const fimLeitura = new Date()
            console.log(`Tempo (ms) de leitura do arquivo: ${fimLeitura - inicio}`)
        }
    } )
    const fim = new Date()
    const tempo = fim - inicio
    console.log(`Tempo (ms)bloqueado no modo assincrono: ${tempo}`)
    return tempo
}

module.exports = leituraAsync