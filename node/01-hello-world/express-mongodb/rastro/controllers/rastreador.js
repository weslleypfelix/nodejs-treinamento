const mongoose = require('mongoose')

module.exports = (app) => {
    const RastreadorController = { // Esse aqui vai ser um objeto.
    // dentro dele colocaremos funções. Cada função na vdd vai se referir a cada api que vamos construir
    
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

        }
    }
    return RastreadorController
}