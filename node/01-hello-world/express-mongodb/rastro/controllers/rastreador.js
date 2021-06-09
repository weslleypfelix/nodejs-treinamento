const mongoose = require('mongoose')
const rastreamento = require('./rastreamento')

module.exports = (app) => {
    const RastreadorController = {
        // Esse aqui vai ser um objeto.
        // dentro dele colocaremos funções. Cada função na vdd vai se referir a cada api 
        //que vamos construir
    
        //1º API -> Cadastrar rastreador
        //Vai atender a rota POST / rastreador

        cadastrar(request, response) {


            const Rastreador = app.models.rastreador //app/ pasta models/ arquivo rastreador
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
                
                //Aqui estou cadastrando o documento, com o create a partir do tipo Rastreador

                const resultadoCreate = Rastreador.create(rastreador /*variavel que controla a colecao */)
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

        },
        alterar(request, response) {
            console.log("Rota PUT/ rastreador chamada")
            console.log(`${request.body}`)
            console.log(request.body)

            const Rastreador = app.models.rastreador

            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev', // string de conexão. Drive + porta
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            ).then(() => {
                //a função update One altera um documento da coleção apenas
                Rastreador.updateOne( 
                    //objeto com criterio de busca do documento
                    {codigoRastreador: request.body.codigoRastreador},
                    
                    // Objeto com os dados que devem ser atualizados
                    {
                        $set: {
                            placaVeiculo: request.body.placaVeiculo,
                            cpfCliente: request.body.cpfCliente,
                            
                        }
                    } 
                    )
                    .then((resultado) => {
                        console.log(`resultado do UpdateOne:`)
                        console.log(resultado)

                        if (resultado.nModified > 0){
                            mongoose.disconnect()
                            response.status(200).send('Rastreador alterado com sucesso')
                        }else {
                            mongoose.disconnect()
                            response.status(404).send('Rastreador não alterado no cadastro')
                        }

                        
                    })
                    .catch((erro) => {
                        console.log(`Erro ao alterar o Rastreador: ${erro}`);
                        console.log(erro)
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao alterar o Rastreador: ${erro}`);
                    
                    })
            })
            .catch((erro) => {
                console.log(`erro do connection: ${erro} | constructor: ${erro.constructor.name}`);
                console.log(erro);
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            
            })


        },
        excluir(request, response){
            console.log('Rota DELETE /rastreador chamada...')
            console.log('request.params:')
            console.log(request.params) // oque ta na url
            
            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev', // string de conexão. Drive + porta
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            )
            .then(() => {
                const Rastreamento = app.models.rastreamento
                const Rastreador = app.models.rastreador
                Rastreamento.deleteMany(
                    // Eu posso ter mais de um registro com o mesmo codigo de rastreador
                    { codigoRastreador: request.params.codigoRastreador }
                )
                .then((resultadoDeleteRastreamento) => {
                    console.log(`resultadoDeleteRastreamento  :`)
                    console.log(resultadoDeleteRastreamento)

                    Rastreador.deleteOne(
                        {codigoRastreador : request.params.codigoRastreador}
                    )
                    .then((resultadoDeleteRastreador) => {
                        console.log(`resultadoDeleteRastreador:`);
                        console.log(resultadoDeleteRastreador);
                        mongoose.disconnect();
                        if (resultadoDeleteRastreador.deletedCount > 0) {
                            if (resultadoDeleteRastreamento.deletedCount == 1) {
                                response.status(200).send(`Foi excluído ${resultadoDeleteRastreamento.deletedCount} documento de rastreamento e o documento do Rastreador.`);
                            } else {
                                response.status(200).send(`Foram excluídos ${resultadoDeleteRastreamento.deletedCount} documentos de rastreamento e o documento do Rastreador.`);
                            }                            
                        } else {
                            response.status(404).send(`Rastreador não localizado no cadastro.`);
                        }
                    })
                    .catch((erro) => {
                        console.log(`Erro ao excluir o documento do Rastreador: ${erro}`);
                        console.log(erro);
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao excluir o documento do Rastreador: ${erro}`);    
                    })
                })
                .catch((erro) => {
                    console.log(`Erro ao excluir os documentos de rastreamento do rastreador`)
                    console.log(erro)
                    mongoose.disconnect()
                    response.status(500).send("Erro ao excluir decumento")
                })

            })
            .catch((erro) => {
                console.log('Erro ao conectar no mongo')
                console.log(erro)
                response.status(500).send('Erro ao conectar no mongooo')
            })



        }
    }
    return RastreadorController
}