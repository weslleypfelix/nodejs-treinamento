module.exports = (app) => { // objeto que o express criou que iremos juntar tudo com o consign
// Criando a 1ª) rota
// rota '/'
// é tudo por meio de http que nossas aplicacoes
//conversam.

//get define a rota e a funcao que deve ser executada
//Obj app é o objeto controlador da aplicacao
app.get(
    '/', // url da rota
    (request, response) => { // funcao a ser executada
        //n iremos mandar front, iremos mandar json
        console.log('Rota principal chamada!!...')
        response.send('Servidor rodando, está tudo OK !')
    }
)

//crindo rota para cadastrar rastreador
//POST rota '/rastreador'
app.post( //onde estará essa funcao ? no rastreador.js do controllers
    '/rastreador',
        app.controllers.rastreador.cadastrar // Estou passando a funcao
    );
}
