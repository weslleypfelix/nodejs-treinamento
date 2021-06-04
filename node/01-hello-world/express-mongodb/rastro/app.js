//Express é uma funcao. 
//É algo parecido com o create server

const express = require('express')

//config do mongoose
const mongoose = require('mongoose')

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

const app = express();
// a partir do objeto app que vamos montar nossa aplicacao
app.use(express.json()) // cria "norma" que durante os middlewares( que são requisicoes, a comunicacao sera por json)
app.use(express.urlencoded({extended: true})) 

app.listen(3009 /*porta*/, ()=>console.log('Servidor rodando na porta 3009...'));

// Criando a 1ª) rota
// rota '/'

//é tudo por meio de http que nossas aplicacoes
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
app.post(
    '/rastreador',
    (request, response) => {


        const rastreador = new Rastreador(request.body) //Estou criando a coleção

        mongoose.connect(
            'mongodb://localhost:27017/rastro-dev', // string de conexão. Drive + porta
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        ).then(
            (resultado) => {
                console.log('Conexao com MongoDB realizada.');
                // console.log(resultado);
        
                const resultadoCreate = Rastreador.create(rastreador)
                    .then((resultado) => {
                        console.log(`resultado do then: ${resultado} | constructor: ${resultado.constructor.name}`);
                        console.log(resultado);
                        console.log(`Rastreador ${rastreador.codigoRastreador} cadastrado com sucesso.`);
                        mongoose.disconnect();
                        response.status(200).send(resultado);
                    })
                    .catch((erro) => {
                        console.log(`erro do create: ${erro} | constructor: ${erro.constructor.name}`);
                        console.log(erro);
                        console.log(`Erro ao cadastrar o Rastreador: ${erro}`);
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao cadastrar o Rastreador: ${erro}`);
                    });
                ;
                console.log(`resultado do create: ${typeof(resultadoCreate)} | constructor: ${resultadoCreate.constructor.name}`);
            }
        ).catch(
            (erro) => {
                console.log(`erro do connection: ${erro} | constructor: ${erro.constructor.name}`);
                console.log(erro);
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            }
        );


            
    }
)