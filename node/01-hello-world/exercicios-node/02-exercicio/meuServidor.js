const http = require('http')
const fs = require('fs');

const server = http.createServer(
    (request, response) => {
        let arquivo = ''
       

        if (request.url === '/'){
            arquivo = 'index.html'
        } else if (request.url === '/fale-conosco'){
            arquivo = 'fale-conosco.html'
        }else if (request.url === '/musica'){
            arquivo = 'musica.html'
        }
         else if (request.url === '/sobreNos'){
            arquivo = 'sobreNos.html'
        }else {
            arquivo = 'paginaNaoEncontrada.html'
        }

        if (fs.existsSync(arquivo)) {
            fs.readFile(arquivo,
                (erro, dados) => {
                    if(erro) {
                        throw erro
                    } else {
                        response.writeHead(200 /*status sucesso*/, {'Content-Type': 'text/html'})
                        response.end(dados)
                    }
                }
            )
        }
        else {
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.write(`Arquivo ${arquivo} não localizado...`);
            response.end();
        }

    }
)


server.listen(3009)