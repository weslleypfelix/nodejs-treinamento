
const leituraSync = (arquivo) => {
    console.log(`fazendo a leitura no mod sincrono do arquivo : ${arquivo}`)
    const inicio = new Date()
    let dados = fs.readFileSync(arquivo)
    const fim = new Date()
    const tempo = fim - inicio
    console.log(`Tempo (ms)bloqueado no modo sincrono: ${tempo}`)
    return tempo
}

module.exports = leituraSync