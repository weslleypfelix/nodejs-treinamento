// module.exports = (a, b) => a * b

module.exports = (idade) => {
    if(idade >= 18)
    return "Você é maior de idade"
    else 
    return "Você é de menor, safado"
}

    // module.exports = (raio) => {
    //     return raio * 2
    // }


// a partir do momento em que usamos module.exports, estamos exportando todo o arquivo para outro 
// lugar