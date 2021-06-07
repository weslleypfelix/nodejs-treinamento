//Express é uma funcao. 
//É algo parecido com o create server

const express = require('express')
const app = express();
const consign = require('consign') // utilizado para separação de rotas

// a partir do objeto app que vamos montar nossa aplicacao
app.use(express.json()) // cria "norma" que durante os middlewares( que são requisicoes, a comunicacao sera por json)
app.use(express.urlencoded({extended: true})) 

consign().include('models').then('controllers').then('routes').into(app)

app.listen(3009 /*porta*/, ()=>console.log('Servidor rodando na porta 3009...'));
