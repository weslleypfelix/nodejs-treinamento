//for each é uma funcao de objetos do tipo
//array e executara algo para cada elem do array

let listaDeIntegrantes = [
    'thiago@gmail.com',
    'weslleypfelix@gmail.com',
    'cleisson@gmail.com',
    'tainara@gmail.com',
    'italo@gmail.com'
]

const enviarEmail = (email) => {
    console.log(`Email enviado para ${email} com sucesso!`)
}

listaDeIntegrantes.forEach((item) => {
    enviarEmail(item)
})