//config do mongoose
const mongoose = require('mongoose')

module.exports = (app) => {
    //classe Schema do Mongoose permite definir a estrutura de uma colecao no MongoDB

const Schema = mongoose.Schema


// permite definir a estrutura da colecao. retorna um objt
const rastreadorSchema = Schema( //Estou definindo a colecao. 
    {
        codigoRastreador : { type: String, required: true, index: { unique: true }},
        placaVeiculo : { type: String, required: true},
        cpfCliente: { type: String, required: true },
        endereco : { type: String, required: true}
    }
)

//model() cria a colecao, ou seja, a tabela do banco
// Devolve uma funcao *pesquisar dps* É possível instanciar uma nova funcao. POde ser que seja uma funcao
//pode ser que nao seja.
const Rastreador = mongoose.model('rastreadores' /*nome da colecao 1ºparametro*/, rastreadorSchema)

return Rastreador;
}

