const mongoose = require('mongoose')
const rastreador = require('./rastreador');
  
module.exports = (app) => {

    const RastreamentoController = {

        cadastrar(request, response){

            const Rastreamento = app.models.rastreamento // Estou cadastrando o rastreamento
            const Rastreador = app.models.rastreador; // coleção do exemplo anterior

            const rastreamento = new Rastreamento(request.body) // request.body é a requisicao do postman pra se fazer alguma coisa

            if (!rastreamento.dataHora) {
                //Se não for definido a hora e data, ele deverá
                //cadastrar a data do servidor.
                rastreamento.dataHora = new Date();
            }

            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev', // string de conexão. Drive + porta
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            ).then(() => {
                //Vou procurar se já existe um rastreador no banco de dados anteriormente
                //Aqui estou mexendo na coleção anterior com o 'Rastreador'
                Rastreador.find( { codigoRastreador: rastreamento.codigoRastreador } )
                .then((listaRastreador) => {

                    console.log(`listaRastreador:`);
                    console.log(typeof(listaRastreador));
                    console.log(listaRastreador);                    

                    // se a busca na coleção 'rastreadores' retornar algo,
                    // o listaRastreador (array) vem com tamanho maior que zero
                    if (listaRastreador.length > 0) {

                        Rastreamento.create(rastreamento)
                        .then((resultado) => {
                            console.log(`Rastreamento do rastreador ${rastreamento.codigoRastreador} cadastrado com sucesso.`);
                            console.log(resultado);
                            mongoose.disconnect();
                            response.status(200).send(resultado);
                        })
                        .catch((erro) => {
                            console.log(`Erro ao cadastrar o Rastreamento: ${erro}`);
                            console.log(erro);
                            mongoose.disconnect();
                            response.status(500).send(`Erro ao cadastrar o Rastreamento: ${erro}`);
                        });    
                        
                    } else {
                        console.log(`Rastreador de codigoRastreador: ${rastreamento.codigoRastreador} não localizado no cadastro.`);
                        mongoose.disconnect();
                        response.status(404).send(`Rastreador de codigoRastreador: ${rastreamento.codigoRastreador} não localizado no cadastro.`);
                    }

                }).catch(() => {
                    console.log(`Erro ao localizar o cadastrar do Rastreador: ${erro}`);
                    console.log(erro);
                    mongoose.disconnect();
                    response.status(500).send(`Erro ao localizar o cadastrar do Rastreador: ${erro}`);
                });

            }).catch((erro) => {
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                console.log(erro);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            });
        },


        buscarPorCodigoRastreador(request, response) {
            console.log(`request.params: ${request.params}`)
            console.log(request.params)
            
            if(request.params.codigoRastreador == "" || request.params.codigoRastreador == null) {
                response.status(400).send('Parâmetro código rastreador inválido')
            }else {

            mongoose.connect(
            'mongodb://localhost:27017/rastro-dev', // string de conexão. Drive + porta
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }
            )
            .then(() => { 

                const Rastreamento = app.models.rastreamento // Estou buscando pelos cadastros de rastreamentos e não por 
                //rastreadores. rastreamento é o nome do arquivo

                Rastreamento.find( { codigoRastreador: request.params.codigoRastreador} )
                .then((listaRastreamentos) => {
                    console.log(listaRastreamentos)
                    mongoose.disconnect()
                    response.status(200).send(listaRastreamentos)
                })
                .catch((erro) => {
                    console.log(`Erro ao realizar a pesquisa/cosulta de rastreamentos no MongoDB: ${erro}`);
                    console.log(erro)
                    mongoose.disconnect()
                    response.status(500).send(`Erro ao realizar a pesquisa/cosulta de rastreamentos no MongoDB: ${erro}`);
                })
    
                
    
            }).catch((erro) => {
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                console.log(erro);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            })

           
            }

        }
    }

    return RastreamentoController;

} 