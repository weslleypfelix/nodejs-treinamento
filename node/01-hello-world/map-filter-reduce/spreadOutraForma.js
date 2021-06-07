let pessoa = {
    nome: "Jonas",
    idade: 26,
    time : "São Paulo"
}

let mesmaPessoaSpread = {
    ...pessoa,
    cidade: "São Paulo/SP"
}

console.log(mesmaPessoaSpread)